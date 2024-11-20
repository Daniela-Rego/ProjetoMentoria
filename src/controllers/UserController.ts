import { Request, Response } from "express";
import { UserRepository } from "../repository/userRepository";
import { UserService } from "../service/userService";

export class UserController {
   async createUser(request:Request, res:Response ){
      try{
        console.log("entrei controller user")
        var repository = new UserRepository();
        var service = new UserService(repository);
        await service.createUser(request.body);
     
          res.status(201).json("User Created test");
      }catch(error){
        console.log("error no controller user",error)
          res.status(500).json("Erro a criar user");
      } 
        
    }

}