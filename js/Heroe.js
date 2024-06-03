import { Criatura } from "./Criatura.js"
import { Inventario } from "./Inventario.js";
export class Heroe extends Criatura{
    constructor(nom){
        super();
        this.getVidaMaxima;
        this.setNombre = nom;
        this.setVida = 0;
        this.inventario = Inventario;
    }
    /*utilizarItem(this){

    }*/
    get getInventario(){
        return this.inventario
    }
}