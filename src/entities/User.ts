import IUser from '../interfaces/userInterface'
import { v4 as uuidv4 } from 'uuid';

export class User implements IUser{
    private params: IUser

    constructor(dataUser:IUser){
        this.params = dataUser;
        if(dataUser.id === undefined|| dataUser.id === null){
            this.params.id = uuidv4();
          }
         
    }


    get name() {
        return this.params.name;
    }
    get dateOfBirth(){
        return this.params.dateOfBirth
    }
    get cpf(){
        return this.params.cpf
    }
    get email(){
        return this.params.email
    }
    
    validateDate(dataUser:IUser){
        this.validateDateOfBirth(dataUser.dateOfBirth)
       this.validateEmail(dataUser.email)
    }

    validateDateOfBirth(dateOfBirth:Date){
       const year = dateOfBirth.getFullYear();
       const yearNow = new Date();
       const someYear = yearNow.getFullYear();
       const is18 = year - someYear;

       if(is18 < 18){
            throw new Error('Usuario precisa ser maior de 18 Anos');
       }

    }
    
    validateEmail(email:String){

        if (!email.includes('@')){
            throw new Error('Email não é valido ');
        }
    }

}