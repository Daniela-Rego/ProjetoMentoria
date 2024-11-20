import "reflect-metadata";
import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("posts")
export class Post {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    id_user: string;

    @Column()
    id_feeling: string;

    @Column()
    status: string;

    @Column()
    created_at: Date;
   

    constructor( title: string, description: string,id_user:string,id_feeling:string,status:string) {
        this.id = uuidv4();  
        console.log("dentro do POST typeOrm", this.id)  
        this.title = title;
        console.log("dentro do POST typeOrm  this.title",  this.title)  
        this.description = description;
        this.id_user = id_user;
        this.id_feeling =  id_feeling
        this.status = status
        this.created_at = new Date()
    }

}



