import conf from "./config.js"
import {Client, ID, Databases ,Storage ,Query} from "appwrite"

export class Service{
    client = new Client(),
    databases,
    bucket,
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
}
const service = new Service()
export default service 