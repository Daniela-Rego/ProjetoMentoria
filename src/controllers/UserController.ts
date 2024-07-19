import { Request, Response } from "express";
export class UserController {

    createUser(request:Request, res:Response ){

      return  res.status(201).json("User Created test")
    }

}