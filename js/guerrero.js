import { personaje } from "./personaje.js"
export class guerrero extends personaje{
    #pechera = true;
    #espada = true;
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 10;
        this.armadura();
        this.espada();
    }
    espada(){
        if(this.#espada) this.setDano = 20;
    }
    armadura(){
        if(this.#pechera) this.setDefensa = 100;
    }
}