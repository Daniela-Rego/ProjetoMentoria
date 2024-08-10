import { v4 as meuId } from "uuid";
import IPostbody from "../interfaces/PostBodyInterface";


//Dúvida para que serve esse implements  ?
export default class PostEntity implements IPostbody {

    private paramsPost: IPostbody

    constructor(params: IPostbody) {

        this.paramsPost = params;
        console.log("entrei na classe Post ")
        if (params.id === undefined || params.id === null) {
            this.paramsPost.id = meuId();
            console.log(this.paramsPost.id)
        }
        if (params.created_at === undefined || params.created_at === null) {
            this.paramsPost.created_at = new Date();
        }
        if (params.status === undefined || params.status === null) {
            this.paramsPost.status = "POSTED";
        }

    }

    get id(){
        return this.paramsPost.id;
    }

    set id(value){
        this.paramsPost.id = value
    }

    get title() {
        return this.paramsPost.title;
    }

    get description() {
        return this.paramsPost.description;
    }

    get id_user() {
        return this.paramsPost.id_user;
    }

    get id_feeling() {
        return this.paramsPost.id_feeling;
    }

    get status() {
        return this.paramsPost.status;
    }

    get created_at() {
        return this.paramsPost.created_at;
    }

    set status(value) {
        this.paramsPost.status = value
    }

}