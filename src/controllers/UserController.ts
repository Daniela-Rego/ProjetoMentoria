import { Request, Response } from "express";
import { UserRepository } from "../repository/userRepository";
import { UserService } from "../service/userService";

export class UserController {
    //por que nao posso usar o constructor? :
  //constructor(private service: UserService){}

   async createUser(request:Request, res:Response ){
        var repository = new UserRepository();
        var service = new UserService(repository);
        await service.createUser(request.body);
     
        return  res.status(201).json("User Created test");
    }

}