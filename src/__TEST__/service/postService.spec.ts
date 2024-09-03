import PostEntity from "../../entities/PostEntity";
import IPostbody from "../../interfaces/PostBodyInterface";
import { PostRepository } from "../../repository/postRepository";
import { PostService } from "../../service/PostService";

describe(" Should be teste class PostService", () => {
    let postService: PostService;
    //let postRepository: PostRepository;
   
    beforeEach(() => {
        var mockReturnRepositoryPostSave = {
            PostEntity:
            {
                paramsPost: {
                    title: 'Como estou me sentindo?',
                    description: 'Hoje foi um dia extraordinário',
                    id_user: '7fcdaa18-c552-4ef4-a316-c48abb2d14cb',
                    id_feeling: 'f8a0bf33-7941-412a-8532-615590e6c3b2',
                    id: '458cc349-5db3-431f-af8b-bf421729c40b',
                    created_at: new Date('2024-08-10'),
                    status: 'POSTED'
                }
            }

        }

     /* var postRepository = {
            save: jest.fn(),
           repoPost: {}
        }*/

       
          // postRepository.save.mockResolvedValue(mockReturnRepositoryPostSave)

        //postService = new PostService(postRepository);
    })

    it("Should be field filling is correct", () => {
        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: "f8a0bf33-7941-412a-8532-615590e6c3b2"

        }
        expect(mockRequest.id_feeling.length == 36).toBe(true)
        expect(mockRequest.id_feeling).toEqual('f8a0bf33-7941-412a-8532-615590e6c3b2')
        expect(mockRequest.id_feeling).not.toBeNull()
        expect(mockRequest.id_feeling.length).toEqual(36)
    })
    it("Should be field filling is not not valid", () => {
        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: ''

        }
        expect(mockRequest.id_feeling).toBe('')
        expect(() => postService.postIsvalid(mockRequest)).toThrow("Por favor indique ao menos um sentimento")

    })


    it("Should be teste Post is Valid", async () => {
        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: "f8a0bf33-7941-412a-8532-615590e6c3b2"

        }
        //var mockPostIsvalid = jest.spyOn(postService,'postIsvalid').mockReturnValue(true);
        // postService.postIsvalid = jest.fn().mockReturnValue(true);



        expect(await postService.postIsvalid(mockRequest)).toBe(true);


    })

   /* it("Should be teste createPosts is Valid", async () => {

        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: "f8a0bf33-7941-412a-8532-615590e6c3b2",
        }

        

        
       

       


        expect(await postService.createPosts(mockRequest)).toEqual(mockReturnRepositoryPostSave);


    })*/


    it("Should be field title is correct", () => {
        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: "f8a0bf33-7941-412a-8532-615590e6c3b2"

        }
        expect(mockRequest.title).not.toBeNull();
        expect(mockRequest.title).toEqual('Como estou me sentindo mock?');
    })

    it("Should be field title is correct", () => {
        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: "f8a0bf33-7941-412a-8532-615590e6c3b2"

        }
        expect(mockRequest.title).not.toBeNull();
        expect(mockRequest.title).toEqual('Como estou me sentindo mock?');
    })

    it("Should be field description is correct", () => {
        var mockRequest: IPostbody = {

            title: "Como estou me sentindo mock?",
            description: "Hoje foi um dia extraordinário",
            id_user: "7fcdaa18-c552-4ef4-a316-c48abb2d14cb",
            id_feeling: "f8a0bf33-7941-412a-8532-615590e6c3b2"

        }
        expect(mockRequest.description).not.toBeNull();
        expect(mockRequest.description).toEqual('Hoje foi um dia extraordinário');
        expect(mockRequest.description.length).toBeLessThanOrEqual(50)
    })

});