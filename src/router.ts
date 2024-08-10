import { Router } from 'express'
import { UserRepository } from './repository/userRepository';
import { PostController } from './controllers/PostController';
import { v4 as uuidv4 } from 'uuid';
import { UserController } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';
const routes = Router()

console.log("entrei rotas ");


routes.post('/createUser', (req, res) => {
   console.log("req", req.body)
   var userController = new UserController()
   userController.createUser(req, res)


});
routes.post('/login',(req, res)=>{
   var loginController = new LoginController()
   loginController.login(req, res)

} )

routes.post('/createPost', (req, res) => {
   console.log("req", req.body)
   const postController = new PostController()
   postController.createPost(req, res)
});

//Deve aparecer todos os post com seus status.
routes.get('/Posts', (req, res) => {
   console.log("req", req.body)
});





export default routes; 
