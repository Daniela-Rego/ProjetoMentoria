import { Request, Response } from "express";
import { PostService } from "../service/PostService"
import { PostRepository } from "../repository/postRepository";
import { WeekeendService } from "../service/weekeendService";
export  class PostController {
    
    private postRepository:PostRepository;
    private weekeendService : WeekeendService;
    private postService : PostService;
    
    constructor(){
        this.postRepository = new PostRepository();
        this.weekeendService = new WeekeendService(this.postRepository);
        this.postService = new PostService(this.postRepository,this.weekeendService)
    }


   async createPost(request:Request, response:Response,){
        try{
            console.log("request.body===>",request.body);
           await this.postService.createPosts(request.body);
            console.log("VOLTEI CONTROLLER")
            response.status(201).json("Post is created")
        }
            
        catch(error: any ){
            console.log("entrei controller catch",error.message)
             response.status(400).json({message: error.message})
        }
        
        
    }

   async updateStatus (){
     console.log("entrei no updateStatus no controller");
     this.postService.updateStatus();
     
   }

    
    
 }