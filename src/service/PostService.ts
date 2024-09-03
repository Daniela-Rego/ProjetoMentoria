import { title } from "process";
import IPostbody from "../interfaces/PostBodyInterface";


import  PostEntity  from "../entities/PostEntity"
import { PostRepository } from "../repository/postRepository";

export class PostService{
    
    constructor( private repositoryPost : PostRepository ){}

    async createPosts(body: IPostbody): Promise<PostEntity>{
        console.log("antes da validacao")
        this.postIsvalid(body)  
       
       
         const post = new PostEntity(body)
         console.log("cretatePost:",post)
         
        const savePost =  await  this.repositoryPost.save(post);
            
            return savePost;
        //validar se o user logado existe no banco 
         //validar quem é o usuario logado(token)
        //Post so deve ser executado em dia de semana
        //Post tem tamanho maximo de caracter(10caracter)
        //Um post será rejeitado caso contenha palavras ofensivas. (iniciamos com palavrão)
        //se o usuário for free so pode fazer 3 posts por dia, premmium pode fazer ilimitado

    }

     postIsvalid(body: IPostbody): Boolean| Error{
        //validar se foi indicado ao menos um sentimento no post, entender como deve ficar quando tiver mais de um sentimento
        ////validar se foi indicado ao menos um sentimento no post
       console.log("entrei em validao post")
        if(!body.id_feeling){
            throw new Error("Por favor indique ao menos um sentimento")
        }
         //validar se o title não esta vazio
        if(!body.title){
            throw new Error("Campo Titulo é Obrigatorio")
        }
        //validar se o description não esta vazio
        if(!body.description){
            throw new Error("Campo  descrição é Obrigatorio")
        }

        //Post tem tamanho maximo de caracter(50caracters)
        if(body.description.length >50){
            throw new Error("Campo description nao pode ter mais de 50")
        }
    

        return  true
    }

    async verifyIfWeekeend(date: Date): Promise<Boolean> {
        const dayOfWeek = date.getDay();
        console.log('dentro verifyIfWeekeend',dayOfWeek)
        if (dayOfWeek == 0 || dayOfWeek == 6) {
            console.log('final de semana');
            //return true;
        }
        return false;
    }



}