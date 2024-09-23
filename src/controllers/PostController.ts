import { Request, Response } from "express";
import { PostService } from "../service/PostService"
import { PostRepository } from "../repository/postRepository";
import { WeekeendService } from "../service/weekeendService";
export  class PostController {
    // qual o melhor colocar o response aqui ou no router?
    //se colocar no router o request aqui poss colocar uma interface como tipo ?
   async createPost(request:Request, response:Response,){
        try{
            const postRepository = new PostRepository()
            const weekeendService = new WeekeendService(postRepository);
            const postService = new PostService(postRepository,weekeendService)
            console.log("request.body===>",request.body);
           await postService.createPosts(request.body);
            console.log("VOLTEI CONTROLLER")
            response.status(201).json("Post is created")
        }
            
        catch(error: any ){
            console.log("entrei controller catch",error.message)
             response.status(400).json({message: error.message})
        }
        
        
    }

    
    
 }