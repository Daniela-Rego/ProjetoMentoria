import "reflect-metadata";
import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("users")
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    birth_date: Date;

    @Column()
    cpf: string

    @Column()
    email: string;

    @Column()
    type: string;

    @Column()
    password:string

    @Column()
    created_at: Date;

    constructor( name: string, birth_date: Date, cpf:string , email:string, password: string) {
        this.id = uuidv4();  
        console.log("dentro do user typeOrm", this.id)  
        this.name = name;
        this.birth_date = birth_date;
        this.created_at = new Date()
        this.cpf = cpf;
        this.email = email;
        this.type = ""
        this.password =password;

    }

}
