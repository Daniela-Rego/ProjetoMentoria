import { User } from "../entities/User";
import InterfaceLogin from "../interfaces/LoginBodyInterface";
import { UserRepository } from "../repository/userRepository"
import AppDataSource from "../typeorm/dataSource";
export class LoginService{
    constructor (private userRepository: UserRepository){}

  async  loginUser(body: InterfaceLogin){

        const {email, password} = body;
        const user = await this.userRepository.findEmail(email )


    }
}