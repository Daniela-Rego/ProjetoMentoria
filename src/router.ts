import { Router } from 'express'
import { PostController } from './controllers/PostController';
import { UserController } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';
import { autentication } from './middleware/tokenMiddleware';


const routes = Router()

console.log("entrei rotas ");


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
routes.post('/createUser', (req, res) => {
   console.log("req", req.body)
   var userController = new UserController()
   userController.createUser(req, res)


});

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

routes.post('/createPost', autentication, (req, res) => {
   const postController = new PostController()
   postController.createPost(req, res)
});

//Deve aparecer todos os post com seus status.
routes.get('/Posts', (req, res) => {
   console.log("req", req.body)
});

 /*cron.schedule('*30 * * * * *', async () => {
                console.log("entrei na cron")

//chama rota atualiza status post
        });*/





export default routes; 
