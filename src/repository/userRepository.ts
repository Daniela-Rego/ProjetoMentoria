import AppDataSource from "../typeorm/dataSource";
import { User } from "../typeorm/entity/User";


export class UserRepository {
  private repo = AppDataSource.getRepository(User);

  async save(params: any) {
    console.log("entrei no save", params)
    await this.repo.save(params)
  }

  async findEmail(email: string): Promise<User | null> {
    const findEmail = await this.repo.findOneBy({ email: email });
    console.log("findEmail: ", findEmail)
    return findEmail;
  }
  async findId(_id: string): Promise<User | null> {
    const findID = await this.repo.findOneBy({ id: _id });
    console.log("findID: ", findID)
    return findID;
  }

}