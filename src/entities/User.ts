import IUserbody from '../interfaces/userInterface'
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt'

export class User implements IUserbody {
    private params: IUserbody

    constructor(dataUser: IUserbody) {

        this.params = dataUser;
       

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

    set id(value){
        this.params.id = value
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
        const year = dateOfBirth.getFullYear();
        const yearNow = new Date();
        const someYear = yearNow.getFullYear();
        const is18 = year - someYear;

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