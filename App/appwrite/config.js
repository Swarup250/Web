import conf from "../src/conf/conf"
import {Client, ID, Databases ,Storage ,Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,FearturedImage,status,userId}){
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title,content,FearturedImage,status,userId}
            )
        } catch (error) {
            console.log(error);
        }
    }

    async upadatePost(slug,{title,content,FearturedImage,status}){
        try {
            this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,FearturedImage,status 
                }
            )
        } catch (error) {
            console.log(error);
        }
    }    

    async deltePost(slug){
        try {
            await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getPreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
} 
const service = new Service()
export default service 