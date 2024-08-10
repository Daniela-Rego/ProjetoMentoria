import AppDataSource from "../typeorm/dataSource";
import { User } from "../typeorm/entity/User";


export class UserRepository{
    private repo = AppDataSource.getRepository(User);
    
    async save(params: any){
        console.log("entrei no save",params)       
        const resultTypeOrm = await this.repo.save(params)
        console.log('resultTypeOrm',resultTypeOrm)
    }

   async findEmail (email:string): Promise<string> {
     const findEmail = await this.repo.findOneBy({ email: email });
        console.log("findEmail: ",findEmail)
     return "string"
   }

}