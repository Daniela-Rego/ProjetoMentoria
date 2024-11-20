import IUserbody from "../interfaces/userInterface";
import { UserRepository } from "../repository/userRepository";
import { User } from "../entities/User";
import bcrypt from 'bcryptjs';

export class UserService {
    constructor(private repository: UserRepository) { }

    async createUser(body: IUserbody) {
        try{
            var { name, birth_date, cpf, email, password } = body

            console.log("entrei service user",typeof(body.birth_date))
            var newPass = await this.criptyPass(password)
            body.password = newPass;
            var user = new User(body)

            console.log("criou user: ", user)

            this.repository.save(user)

        }catch(error){
            console.log("deu erro ao criar ou salvar user")
            return;
        }
        




    }
    async criptyPass(password: string): Promise<string> {

        const hashPassword = await bcrypt.hash(password, 10)

        return hashPassword;
    }


}

