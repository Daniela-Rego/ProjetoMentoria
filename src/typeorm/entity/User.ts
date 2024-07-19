import "reflect-metadata";
import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("user_orm")
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    created_at: Date;

    constructor( name: string, idade: number) {
        this.id = uuidv4();  
        console.log("dentro do user typeOrm", this.id)  
        this.name = name;
        this.age = idade;
        this.created_at = new Date()
    }

}
