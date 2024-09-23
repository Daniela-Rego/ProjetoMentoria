import InterfaceLogin from "../interfaces/LoginBodyInterface";
import { UserRepository } from "../repository/userRepository"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import "dotenv/config";
export class LoginService{
    constructor (private userRepository: UserRepository){}

  async  loginUser(body: InterfaceLogin): Promise<any>{

        const {email, password} = body;
        const user = await this.userRepository.findEmail(email )
        console.log("LoginService loginUser::",user)
        console.log("LoginService loginUser password::",password)
      
      
        if(!user){
            throw new Error ("email não encontrado")
        }
        
        const verifyPass = await bcrypt.compare(password, user.password)
        console.log("LoginService loginUser verifyPass::",verifyPass)
        if(!verifyPass){
            throw new Error ("email ou senha invalidos")
        }
        //Criação do token: precisa armazenar 3 dados no token payload, secrity, options
        //payload é o que queremos salvar mesmo no token. secrity é uma senha que passamos pra informar que é um token valido é uma senha unica pra todo o sistema.
        //options: são varias coisas que podemos armazenar mas iremos armazenar somente o tempo de expiração do token 
        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '8h' })
       
        console.log('token::',token);

            const login = {
                user: user, 
                token:token
            }
            console.log("login::",login)
        return login
    }
}    

