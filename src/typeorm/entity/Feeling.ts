import "reflect-metadata";
import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("feeling")
export class Feeling {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    feeling: string;

    @Column() //hexadecimal
    color : string;

    @Column()
    created_at: Date;
   

    constructor( feeling: string, color: string) {
        this.id = uuidv4();  
        console.log("dentro do feeling typeOrm", this.id)  
        this.feeling = feeling;
        this.color = color;
        this.created_at = new Date()
    }

}
