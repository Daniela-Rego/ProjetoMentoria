import "reflect-metadata"
import "dotenv/config";
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import  {Post } from "./entity/Post"
import { Feeling } from "./entity/Feeling"

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [User,Post,Feeling],
    migrations: ['./dist/typeorm/migration/**/*.js']
})

export  default AppDataSource;
