import { Request, Response } from "express";
import { PostService } from "../service/PostService"
import { PostRepository } from "../repository/postRepository";
export  class PostController {
    // qual o melhor colocar o response aqui ou no router?
    //se colocar no router o request aqui poss colocar uma interface como tipo ?
    createPost(request:Request, response:Response,){
        try{
            const postRepository = new PostRepository()
            const postService = new PostService(postRepository)
            console.log("request.body===>",request.body);
            postService.createPosts(request.body);
            return response.status(201).json("Post is created")
        }
            
        catch(error){
            return response.status(500).json(error)
        }
        
        
    }

    
    
 }