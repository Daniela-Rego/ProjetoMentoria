import {PostController}   from "../../controllers/PostController"
import { Response,Request } from "express";
import { PostRepository } from "../../repository/postRepository";
import { WeekeendService } from "../../service/weekeendService";
import { PostService } from "../../service/PostService";
describe("Should be test class PostController",() => {
    beforeEach( () =>{

    })

    
    describe("Should be test a create Post",()=>{
        it("Should be test for a post created on  day of week ",() =>{
            let responseObject:any;
            let mockResponse:Partial<Response>
            const requestPostMock = {
                body:{
                    discription: "aqui é o texto de como o user esta se sentindo", 
                    title: "Titulo da postagem",
                    id_feeling: 234
                }
               
            } as Request
           

            mockResponse ={
                status: jest.fn().mockReturnThis(),
                json:  jest.fn().mockImplementation((result) => {
                responseObject = result;
                  }),
                }
                const postRepository = new PostRepository()
                const weekeendService = new WeekeendService(postRepository);
                const postService = new PostService(postRepository,weekeendService)
            const postController = new PostController(postService,postRepository,weekeendService);
                postController.createPost(requestPostMock,mockResponse as Response );

               expect(mockResponse.status).toHaveBeenCalledWith(201);
               expect(mockResponse.json).toHaveBeenCalledWith("Post is created")

        })
        it("Should be test when a post has an error  ",() =>{
            let responseObject:any
            let mockResponse:Partial<Response>

            const requestPostMock = {
                body:{
                    discription: "aqui é o texto de como o user esta se sentindo", 
                    title: "Titulo da postagem",
                    id_feeling: 234
                }
               
            } as Request

            mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockImplementation((result) => {
                    responseObject = result;
                      }),
            }
            const postRepository = new PostRepository()
                const weekeendService = new WeekeendService(postRepository);
                const postService = new PostService(postRepository,weekeendService)
            const postController = new PostController(postService,postRepository,weekeendService);
           
           postController.createPost(requestPostMock,mockResponse as Response)
           expect(mockResponse.status).toHaveBeenCalledWith(500);
        });
        it("Shoud be teste mount object for service",()=>{
             /*const Post = {
                id: 123, 
                Texto: "aqui é o texto de como o user esta se sentindo", 
                titulo: "Titulo da postagem",
                data: new Date(),
                id_user: 124,
                id_sentimento: 234,
                status: "POSTED"
            }*/

                

        });

        
    })
})