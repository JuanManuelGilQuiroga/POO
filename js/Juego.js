import { Orco } from "./Orco.js";
import { Goblin } from "./Goblin.js";
import { Kobold } from "./Kobold.js";
import { Monstruo } from "./Monstruo.js";
import { Heroe } from "./Heroe.js";
export class Juego extends HTMLElement{
    monstruo
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.historial = [];
        this.monstruo = ""
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
        if(this.monstruo == "" || this.monstruo.getVidaMaxima <= 0){
            const Monstruos = [Orco, Goblin, Kobold];
            this.monstruo = new Monstruos[Math.floor(Math.random()*Monstruos.length)]
            console.log(this.monstruo)
        }else{
            this.loguear("Ya encontraste un monstruo")
        }
    }
    atacar(){
        if(this.monstruo.getVidaMaxima > 0){
            this.monstruo.setVidaMonstruo = -this.heroe.getAtaque
            this.loguear(`Atacas a ${this.monstruo.nombre}! Le sacas ${this.heroe.getAtaque} de vida`)
            console.log(this.monstruo)
        } else{
            this.loguear("El monstruo esta muerto")
        }
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
        `;
        let botonInvestigar = this.shadowRoot.querySelector("#investigarButton");
        botonInvestigar.addEventListener("click", () => this.investigar());

        let botonAtacar = this.shadowRoot.querySelector("#atacarButton");
        botonAtacar.addEventListener("click", () => this.atacar());
    }
}
customElements.define("my-game", Juego)