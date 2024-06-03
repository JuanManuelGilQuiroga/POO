import { Orco } from "./Orco.js";
import { Goblin } from "./Goblin.js";
import { Kobold } from "./Kobold.js";
import { Monstruo } from "./Monstruo.js";
import { PocionFuerza } from "./PocionFuerza.js";
import { Heroe } from "./Heroe.js";
export class Juego extends HTMLElement{
    monstruo
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.historial = [];
        this.opcion = ""
        this.heroe = new Heroe("Manuel")

    }

    connectedCallback() {
        this.render();
    }

    loguear(mensaje){
        this.historial.push(mensaje)
        console.log(mensaje)
        console.log(this.historial)
    }
    investigar(){
        if(this.heroe.getVidaMaxima>0){
            if(this.opcion == "" || this.opcion.getVidaMaxima <= 0){
                const Opciones = [Orco, Goblin, Kobold, PocionFuerza];
                this.opcion = new Opciones[Math.floor(Math.random()*Opciones.length)]
                console.log(this.opcion)
            }else{
                this.loguear("Ya encontraste un monstruo")
            }
        }else{
            this.loguear("El heroe esta muerto")
        }
    }
    atacar(){
        if(this.heroe.getVidaMaxima>0){
            if(this.opcion.getVidaMaxima > 0){
                this.opcion.setVidaMonstruo = -this.heroe.getAtaque
                this.loguear(`Atacas a ${this.opcion.nombre}! Le sacas ${this.heroe.getAtaque} de vida`)
                console.log(this.opcion)
            } else{
                this.loguear("El monstruo esta muerto")
            }
        }else{
            this.loguear("El heroe esta muerto")
        }
    }
    reiniciar(){
        location.href = "/"
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }
            </style>
            <button id="investigarButton">Investigar</button>
            <button id="atacarButton">Atacar</button>
            <button id="reiniciarButton">Reiniciar Juego</button>
        `;
        let botonInvestigar = this.shadowRoot.querySelector("#investigarButton");
        botonInvestigar.addEventListener("click", () => this.investigar());

        let botonAtacar = this.shadowRoot.querySelector("#atacarButton");
        botonAtacar.addEventListener("click", () => this.atacar());

        let botonReiniciar = this.shadowRoot.querySelector("#reiniciarButton");
        botonReiniciar.addEventListener("click", () => this.reiniciar());
    }
}
customElements.define("my-game", Juego)