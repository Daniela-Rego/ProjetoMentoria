import { Router } from 'express'
import { PostController } from './controllers/PostController';
import { UserController } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';
import { autentication } from './middleware/tokenMiddleware';
import cron from "node-cron";
import { PostRepository } from './repository/postRepository';
import { WeekeendService } from './service/weekeendService';
import { PostService } from './service/PostService';

const routes = Router()

console.log("entrei rotas ");
const postRepository = new PostRepository()
   const weekeendService = new WeekeendService(postRepository);
   const postService = new PostService(postRepository,weekeendService)
const postController = new PostController(postService,postRepository,weekeendService)

/**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint allows you to create a new user.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name
 *               cpf:
 *                 type: string
 *                 description: The user's cpf
 *               birth_date:
 *                 type: string
 *                 description: The user's birth_date 
 *               email:
 *                 type: string
 *                 description: The user's email
 *               password:
 *                 type: string
 *                 description: The user's password
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully.
 *       500:
 *         description: Bad request.
 */
routes.post('/createUser', (req:any , res: any) => {
   console.log("req router", req.body)
   let userController = new UserController()
   userController.createUser(req, res)


});
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login in the system
 *     description: This endpoint allows you to Login in the system .
 *     tags: [Users] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's name
 *               password:
 *                 type: string
 *                 description: The user's cpf
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login Realizado successfully.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: user unauthorized.
 * 
 */

routes.post('/login', new LoginController().login)


//routes.use(autentication)

/**
 * @swagger
 * /createPost:
 *   post:
 *     summary: Create a new Post
 *     description: This endpoint allows you to create a new Post.
 *     tags: [Posts] 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The user's name
 *               description:
 *                 type: string
 *                 description: The user's cpf
 *               id_feeling:
 *                 type: string
 *                 description: The user's birth_date
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Post created successfully.
 *       400:
 *         description: Bad request.
 *       401:
 *         description: user unauthorized.
 * 
 */



routes.post('/createPost', autentication, (req:any, res: any) => {
   postController.createPost(req, res)
});


//Deve aparecer todos os post com seus status.
routes.get('/Posts', (req: any, res: any) => {
   console.log("req", req.body)
});

cron.schedule('*/30 * * * * *', async () => {
   console.log("entrei na cron");
   postController.updateStatus();
});







export default routes; 
