import conf from "../appwrite/conf.js"
import {Client, Account, ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client)
    }
}

async function createAccount({email ,password ,name}) {
    try{
        const userAccount = this.account.create(ID.unique(),email,password,name)
        if(userAccount){
            return 
        }
        else{
            return userAccount;
        }
    }
    catch(error){
        return error;
    }
}

const authService = new AuthService()
export default authService