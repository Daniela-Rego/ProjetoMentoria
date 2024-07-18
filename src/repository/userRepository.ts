import AppDataSource from "../typeorm/dataSource";
import { User } from "../typeorm/entity/User";


export class UserRepository{
    private repo = AppDataSource.getRepository(User);
    
    async save(params: any){
        console.log("entrei no save",params)
        /*const format ={
           id: params.id,
           name:params.name
        }*/
      
        const resultTypeOrm = await this.repo.save(params)
            console.log('resultTypeOrm',resultTypeOrm)
    }
}