import { Monstruo } from "./Monstruo.js";
export class Kobold extends Monstruo{
    constructor(){
        super();
        this.setNombreMonstruo = "Kobold";
        this.setVidaMonstruo = -30;
        this.setAtaqueMonstruo = -20;
        this.getAtaque;
    }
}