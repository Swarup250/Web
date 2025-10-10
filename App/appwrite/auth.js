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
         // Create a new user account with a unique ID, email, password, and name.
        const userAccount = await this.account.create(ID.unique(),email,password,name)
        // Check if the user account was successfully created
        if(userAccount){
            return this.login({email,password})
        }
        else{

            return userAccount;
        }
    }
    catch(error){
        // Return the caught error if account creation fails
        return error;
    }
}
async function login ({email,password}) {
    try {
        return await this.account.createEmailSession(email,password);
    } catch (error) {
        console.log(error)
    }
} 
const authService = new AuthService()
export default authService