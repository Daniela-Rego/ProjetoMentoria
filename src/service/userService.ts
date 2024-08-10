import IUserbody from "../interfaces/userInterface";
import { UserRepository } from "../repository/userRepository";
import { User } from "../entities/User";
import bcrypt from 'bcrypt'

export class UserService {
    constructor( private  repository: UserRepository){}

   async createUser( body: IUserbody){
            var {name,  birth_date, cpf, email, password } = body

           var newPass= await this.criptyPass(password)

            body.password = newPass.toString();
            console.log("hash:",body.password)
            var user = new User(body)

           console.log("criou user: ",user)

            this.repository.save(user)





    }
    async criptyPass(password:string): Promise<string>{

        const hashPassword = await bcrypt.hash(password, 10)

        return hashPassword;
    }

  
}

