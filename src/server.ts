import "reflect-metadata";
import express from 'express'
import routes from "./router.js";
import { metadata } from 'reflect-metadata/no-conflict';
import AppDataSource from "./typeorm/dataSource.js";

AppDataSource.initialize()
  .then(async () => {
    console.log("iniciou o banco")

    const app = express();
    const port = process.env.PORT || 3001
    app.use(express.json());
    app.use(routes)
    app.listen(port);
    console.log(`listening on port ${port}`);
   



}).catch((error: any) => console.log('deu erro', error));


  


