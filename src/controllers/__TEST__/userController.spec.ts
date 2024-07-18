import IUser from "../../interfaces/userInterface"
import { UserController } from "../UserController"
import { Response,Request } from "express";

describe('Should be test class UserController',() =>{
    it('Should be test creteUser method',async () => {
       const resquest = {
            body:{
                name: "Daniela",
                dateOfBirth: new Date('10/03/1994'),
                cpf: "103.673.875-08",
                email: "daniela.lima@gmail.com"
            }
       }as Request;

       const response ={
           status: 201,
           message: "User Created test"
       } as unknown as Response

        const controllerUser = new UserController()
        controllerUser.createUser(resquest,response)
        expect(response).toBe(response.status(200))
    })
})