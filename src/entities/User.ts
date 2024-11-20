import IUserbody from '../interfaces/userInterface'
import { v4 as uuidv4 } from 'uuid';


export class User implements IUserbody {
    private params: IUserbody

    constructor (dataUser: IUserbody) {
        console.log("entrei class user")
        this.params = dataUser;
       

        if (dataUser.id === undefined || dataUser.id === null) {
            this.params.id = uuidv4();
        }
        if (dataUser.type == null || dataUser.type == undefined) {
            this.params.type = "FREE"
        }
        if (typeof dataUser.birth_date === 'string') {
            this.params.birth_date = this.formatDate(dataUser.birth_date);
        }
        this.validateDate(this.params)

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

    async validateDate(dataUser: IUserbody) {
        console.log("entrei validate: ",typeof(dataUser.birth_date))
       let formatBirth_date = await this.validateDateOfBirth(dataUser.birth_date)
        await this.validateEmail(dataUser.email)
        return
    }

    validateDateOfBirth(dateOfBirth: Date) {
        //let date = this.formatDate(dateOfBirth)
        console.log("entrei validateDateOfBirth",dateOfBirth)
        const year = dateOfBirth.getFullYear();
        console.log(" validateDateOfBirth 1")
        const yearNow = new Date().getFullYear();
        console.log(" validateDateOfBirth 2")
        const is18 = yearNow - year ;
        console.log("dateOfBirth: ",dateOfBirth);
        //console.log("date: ",date);
        console.log("year: ",year)
        console.log("yearNow: ",yearNow)
        console.log("is18",is18)
        if (is18 < 18 ) {
            throw new Error('Usuario precisa ser maior de 18 Anos');
        }
        if (isNaN(is18) ) {
            throw new Error('Data de Nascimento inválida');
        }
        return;

    }

    formatDate(dateString: string){
        const [day, month, year] = dateString.split("/");
        console.log("ENTREI FORMAT DATE");
            return new Date(`${year}-${month}-${day}`);
    }

    validateEmail(email: String) {

        if (!email.includes('@')) {
            throw new Error('Email não é valido ');
        }
        return
    }

    

}