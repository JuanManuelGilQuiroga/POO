import { Criatura } from "./Criatura.js"
export class Heroe extends Criatura{
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 0;
    }
}