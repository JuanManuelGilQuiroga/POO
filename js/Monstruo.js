import { Criatura } from "./Criatura.js"
export class Monstruo extends Criatura{
    constructor(){
        super();
        this.setNombreMonstruo;
        this.setVidaMonstruo;
        this.setAtaqueMonstruo;
        this.getAtaque;
    }
    set setNombreMonstruo(nom){
        this.setNombre = nom;
    }
    set setVidaMonstruo(puntos){
        this.setVida = puntos;
    }
    set setAtaqueMonstruo(puntos){
        this.setAtaque = puntos;
    }
    get getAtaqueMonstruo(){
        return this.getAtaque
    }
}