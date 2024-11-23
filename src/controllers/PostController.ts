import { Request, Response } from "express";
import { PostService } from "../service/PostService"
import { PostRepository } from "../repository/postRepository";
import { WeekeendService } from "../service/weekeendService";
export  class PostController {
    
    constructor( private postService: PostService,private postRepository: PostRepository, private weekeendService: WeekeendService){}
    //Como passamos o postController.createPost diretamente como referência ao middleware de rota, isso faz com que o contexto do this dentro do método createPost seja perdido.
    //Transformei o método createPost em uma função de seta. 
    //As funções de seta herdam o contexto do this da classe onde são definidas.
    //createPost = async (request:Request, response:Response,) =>{
    async createPost(request:any, response:any){
        try{
            
            console.log("entrei controller v1: request.body===>",request.body);
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