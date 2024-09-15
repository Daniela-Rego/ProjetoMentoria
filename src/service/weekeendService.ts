import "dotenv/config";
import mqConnection from "./rabbitmqServices"
import PostEntity from "../entities/PostEntity"
import { PostRepository } from "../repository/postRepository";
import IPostbody from "../interfaces/PostBodyInterface";
import cron from "node-cron";

export class WeekeendService {
    constructor(private repositoryPost: PostRepository) { }

    async execute() {
        console.log("entrei class WeekeendService")
        

            await mqConnection.consumer(process.env.QUEUE_WEEKEND!, async (message) => {
                console.log("2:::", message.content.toString());
                console.log("typeOf::", typeof (message.content.toString()))
                const content: IPostbody = JSON.parse(message.content.toString());
                content.status = "POST_WAIT"
                console.log("content::::", content);
                const post = new PostEntity(content);
                await this.repositoryPost.save(post);

            })

            console.log("depois do consumer")


       
    }

}