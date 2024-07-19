
import { UserController } from "../UserController"
import { Response,Request } from "express";

describe('Should be test class UserController',() =>{
    it('Should be test creteUser method',async () => {
        let responseObject: any;
        let mockRequest: Partial<Request>;
        let mockResponse: Partial<Response>;
        mockRequest = {
            body:{
                name: "Daniela",
                dateOfBirth: new Date('10/03/1994'),
                cpf: "103.673.875-08",
                email: "daniela.lima@gmail.com"
            }
        };

        mockResponse ={
           status: jest.fn().mockReturnThis(),
           json:  jest.fn().mockImplementation((result) => {
            responseObject = result;
          }),
        };

        const controllerUser = new UserController()
        controllerUser.createUser(mockRequest as Request,mockResponse as Response)
        expect(mockResponse.status).toHaveBeenCalledWith(201)
        expect(mockResponse.json).toHaveBeenCalledWith("User Created test")
    })
})