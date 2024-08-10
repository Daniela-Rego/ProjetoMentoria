
import { UserRepository } from "../repository/userRepository"
import { LoginService } from "../service/LoginService"
import { Request, Response } from "express";

export class LoginController {
    
    
    
    async login(req:Request, res: Response){

        const userRepository = new UserRepository()
        const serviceLogin = new LoginService(userRepository)

        
       var respService = serviceLogin.loginUser(req.body)
       

       return res.status(200).json("Post is created")
    }
}