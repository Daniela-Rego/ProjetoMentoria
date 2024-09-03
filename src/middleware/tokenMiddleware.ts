import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'






export const autentication = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const { authorization } = req.headers
        console.log("authorization::",authorization)
        if (!authorization) {
            throw new Error('Não autorizado')
        }

        const formatToken = authorization.split(' ')[1]



            let  tokenUser =jwt.verify(formatToken, process.env.JWT_PASS ?? '') as JwtPayload  ;
        console.log("TokenMeddleware:: ", tokenUser)
        console.log("TokenMeddleware id_user:: ", tokenUser.id)
       
        req.body.id_user = tokenUser.id;
       
        next();

    } catch (e) {
        console.log("erro catch autentication ::", e)
        res.status(401).send("Token inválido")
    }

}




