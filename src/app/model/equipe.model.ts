import { Categorie } from "./categorie.model";

export class Equipe {
    id? : number;
    nom? : string;
    classement?:number;
    datematch? : Date ;
    categorie!:Categorie;
    }