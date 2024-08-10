import PostEntity from "../entities/PostEntity";
import AppDataSource from "../typeorm/dataSource";
import { Post } from "../typeorm/entity/Post";

export class PostRepository {
    private repoPost = AppDataSource.getRepository(Post)

    async save(post: PostEntity): Promise<PostEntity>{
        console.log("entrei save post")
      
        const savePost = await this.repoPost.save(post);
       
        console.log("savePost:::",savePost)
       
        return savePost;

    }
}