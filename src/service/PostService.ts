import { title } from "process";
import IPostbody from "../interfaces/PostBodyInterface";
import PostEntity from "../entities/PostEntity"
import { PostRepository } from "../repository/postRepository";
import { WeekeendService } from "./weekeendService"
import mqConnection from "./rabbitmqServices"
import { AnyARecord } from "dns";

export class PostService {

    constructor(private repositoryPost: PostRepository, private weekeendService: WeekeendService) { }

    async createPosts(body: IPostbody): Promise<PostEntity | undefined | Error> {
        try {
            console.log("antes da validacao")
            const postValid = await this.postIsvalid(body)

            console.log("ANTES DA CLASSE POST NA POST SERVICES")
            if (postValid) {
                const post = new PostEntity(body)
                console.log("cretatePost:", post)

                const savePost = await this.repositoryPost.save(post);

                return savePost;
            }


        } catch (error: any) {
            console.log("entrei catch do CreatePost", error.message);
            throw new Error(error.message)
        }

        //validar se o user logado existe no banco 
        //validar quem é o usuario logado(token)
        //Post so deve ser executado em dia de semana
        //Post tem tamanho maximo de caracter(10caracter)
        //Um post será rejeitado caso contenha palavras ofensivas. (iniciamos com palavrão)
        //se o usuário for free so pode fazer 3 posts por dia, premmium pode fazer ilimitado

    }

    async postIsvalid(body: IPostbody): Promise<Boolean | Error> {
        console.log("entrei em validao post")
        // try {
        if (!body.id_feeling) {
            throw new Error("Por favor indique ao menos um sentimento")
        }
       
        if (!body.title) {
            throw new Error("Campo Titulo é Obrigatorio")
        }
        
        if (!body.description) {
            throw new Error("Campo  descrição é Obrigatorio")
        }

        if (body.description.length > 50) {
            throw new Error("Campo description nao pode ter mais de 50")
        }

        var dateVerify: Date = body.created_at ? body.created_at : new Date();

        const IsWeekeends = await this.IsWeekeend(dateVerify)
        if (IsWeekeends) {
            console.log('If IsWeekeenddddd');
           
            await mqConnection.publishInExchange('amq.direct', 'weekend', body)
            await this.weekeendService.execute();
            console.log("VOLTEI POSTSERVICE");
            return false
        }

        return true
        /* } catch (error: any) {
             console.log("entrei catch postValidate: ", error.message);
             throw new Error(error.message);
         }*/

    }

    async IsWeekeend(date: Date): Promise<Boolean> {
        const dayOfWeek = date.getDay();
        console.log('dentro verifyIfWeekeend', dayOfWeek)
        if (dayOfWeek == 0 || dayOfWeek == 6) {
            console.log('final de semana');
            return true;
        }
        console.log('Dia de semana');
        return false;
    }



}