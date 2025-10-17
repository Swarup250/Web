import conf from "./config.js"
import {Client, ID, Databases ,Storage ,Query} from "appwrite"

export class Service{
    client = new Client(),
    databases,
    bucket,
    constructor(){
        this.client
            .setEndpoint
    }
}
const service = new Service()
export default service 