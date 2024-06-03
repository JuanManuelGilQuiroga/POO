import { Monstruo } from "./Monstruo.js";
export class Goblin extends Monstruo{
    constructor(){
        super();
        this.setNombreMonstruo = "Goblin";
        this.setVidaMonstruo = -50;
    }
}