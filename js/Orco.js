import { Monstruo } from "./Monstruo.js";
export class Orco extends Monstruo{
    constructor(){
        super();
        this.setNombreMonstruo = "Orco";
        this.setVidaMonstruo = 50;
        this.setAtaqueMonstruo = -10;
        this.getAtaque;
    }
}