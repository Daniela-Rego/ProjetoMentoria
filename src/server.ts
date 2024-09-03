import "reflect-metadata";
import express from 'express'
import routes from "./router.js";
import { metadata } from 'reflect-metadata/no-conflict';
import AppDataSource from "./typeorm/dataSource.js";
import { swaggerUi, swaggerSpec } from './swaggerConfig';


AppDataSource.initialize()
  .then(async () => {
    console.log("iniciou o banco")

    const app = express();
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    const port = process.env.PORT || 3001
    app.use(express.json());
    app.use(routes)
    app.listen(port);
    console.log(`listening on port ${port}`);
   



}).catch((error: any) => console.log('deu erro', error));


  


