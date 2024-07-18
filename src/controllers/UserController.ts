import IUser from "../interfaces/userInterface";
import { Response } from "express";
export class UserController {

    createUser(request:any, res:any ){


      return  res.status(201).json("User Created")
    }

}