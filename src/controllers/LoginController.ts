
import { UserRepository } from "../repository/userRepository"
import { LoginService } from "../service/LoginService"
import { Request, Response } from "express";

export class LoginController {



    async login(req: Request, res: Response) {

        const userRepository = new UserRepository()
        const serviceLogin = new LoginService(userRepository)


        var respService = await serviceLogin.loginUser(req.body)
        console.log("LoginController respService :", respService)


        return res.status(200).json(`Login Realizado com sucesso. User_id: ${respService.user.id}, Type: ${respService.user.type},token:${respService.token}`)
    }

    
    
}