import {Router} from 'express'
import  {UserRepository} from './repository/userRepository';
import { v4 as uuidv4 } from 'uuid';
const routes = Router()
 
 console.log("entrei rotas ");

 routes.get('/createUser',(req, res) => {res.send('API')});  
 
 routes.post('/createUser',(req, res) => {
    console.log("req",req.body)

   UserController.criateUser

    
});  





export default routes; 
