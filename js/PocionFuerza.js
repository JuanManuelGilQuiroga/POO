import { Item } from "./item.js";
export class PocionFuerza extends Item{
    constructor(){
        super();
        this.setNombre = "Pocion de fuerza";
        this.Fuerza = 70;
    }
}
