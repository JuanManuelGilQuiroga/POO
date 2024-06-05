import { Area } from "./Area.js";
import { PocionFuerza } from "../PocionFuerza.js";
export class LagunaEncantada extends Area{
    constructor(){
        super();
        this.setNombreArea = "La Laguna Encantada";
        this.setEncontrar = new PocionFuerza();
        this.getNombreArea;
        this.getEncontrar
    }
}