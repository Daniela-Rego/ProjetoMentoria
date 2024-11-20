import PostEntity from "../entities/PostEntity";
import AppDataSource from "../typeorm/dataSource";
import { Post } from "../typeorm/entity/Post";


export class PostRepository {
    private repoPost = AppDataSource.getRepository(Post)

    async save(post: PostEntity): Promise<PostEntity>{
        console.log("entrei save post in repository")
      
        const savePost = await this.repoPost.save(post);
       
        console.log("savePost:::",savePost)
       
        return savePost;

    }

    async saveWeekend(post: PostEntity): Promise<PostEntity>{
        console.log("entrei saveWeekend post in repository")
      
        const savePost = await this.repoPost.save(post);
       
        console.log("savePost:::",savePost)
       
        return savePost;

    }
    async updateSatusPost():Promise<void>{
        try{
            console.log("entrei updateSatusPost repository");
            const postsToUpdate = await this.repoPost.find({ where: { status: 'POST_WAIT' } });

            if(postsToUpdate){
                console.log("tem post para atualizar")
                this.repoPost.createQueryBuilder()
                .update(Post)
                .set({ status: 'POSTED' })
                .where('status = :status', { status: 'POST_WAIT' })
                .execute();

            }
            return

           
        }catch(e){
            console.log("deu erro updateSatusPost repository:: ",e)
        }
       
    }
}