import IUserbody from '../interfaces/userInterface'
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt'

export class User implements IUserbody {
    private params: IUserbody

    constructor(dataUser: IUserbody) {

        this.params = dataUser;
       this.validateDate(this.params)

        if (dataUser.id === undefined || dataUser.id === null) {
            this.params.id = uuidv4();
        }
        if (dataUser.type == null || dataUser.type == undefined) {
            this.params.type = "FREE"
        }

    }

    get id(){
        return this.params.id;
    }

    get name() {
        return this.params.name;
    }
    get type() {
        return this.params.type;
    }

    /*get dateOfBirth() {
        return this.params.dateOfBirth
    }*/
   get birth_date() {
        return this.params.birth_date
    }
    get cpf() {
        return this.params.cpf
    }
    get email() {
        return this.params.email
    }

    get password() {
        return this.params.password;
    }
    set password(value) {
        this.params.password = value;
    }

    set type(value) {
        this.params.type = value;
    }

    validateDate(dataUser: IUserbody) {
        this.validateDateOfBirth(dataUser.birth_date)
        this.validateEmail(dataUser.email)
    }

    validateDateOfBirth(dateOfBirth: Date) {
        let date = new Date(dateOfBirth);
        const year = date.getFullYear();
        const yearNow = new Date().getFullYear();
        const is18 = yearNow - year ;
        console.log("is18",is18)
        if (is18 < 18) {
            throw new Error('Usuario precisa ser maior de 18 Anos');
        }

    }

    validateEmail(email: String) {

        if (!email.includes('@')) {
            throw new Error('Email não é valido ');
        }
    }

    

}