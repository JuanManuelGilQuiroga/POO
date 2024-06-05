import { ClaroDeLaAlianza } from "./areas/ClaroDeLaAlianza.js";
import { Colina } from "./areas/Colina.js";
import { LagunaEncantada } from "./areas/LagunaEncantada.js";
import { PasoDeLosGoblins } from "./areas/PasoDeLosGoblins.js";
import { ValleDeLasSombras } from "./areas/ValleDeLasSombras.js";
import { PocionFuerza } from "./PocionFuerza.js";
import { Heroe } from "./Heroe.js";
import { Inventario } from "./Inventario.js";
export class Juego extends HTMLElement{
    monstruo
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.historial = [];
        this.opcion = "";
        this.heroe = new Heroe("Manuel");
        //this.inventario = new Inventario();

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
            if(this.opcion == "" || this.opcion.getEncontrar.getVidaMaxima <= 0 || this.opcion.getEncontrar instanceof PocionFuerza ){
                const Opciones = [ClaroDeLaAlianza, Colina, LagunaEncantada, PasoDeLosGoblins, ValleDeLasSombras];
                this.opcion = new Opciones[Math.floor(Math.random()*Opciones.length)]
                this.loguear(`Entraste en ${this.opcion.getNombreArea}`)
                console.log(this.opcion.getEncontrar)
                if(this.opcion.getEncontrar === PocionFuerza){
                    this.loguear("Encontraste una pocion de fuerza, agregala al inventario");
                    
                }
            }else{
                this.loguear("Ya encontraste un monstruo")
            }
        }else{
            this.loguear("El heroe esta muerto")
        }
    }
    agregarItem(item){
        this.heroe.inventario.push(item);
        this.loguear("Agregaste la pocion a tu inventario!");
        console.log(this.heroe)
    }
    atacar(daño=this.heroe.getAtaque){
        if(this.heroe.getVidaMaxima>0){
            if( this.opcion.getEncontrar.getVidaMaxima > 0){
                this.opcion.getEncontrar.setVidaMonstruo = -daño
                this.loguear(`Atacas a ${this.opcion.getEncontrar.nombre}! Le sacas ${this.heroe.getAtaque} de vida`);
                console.log(this.opcion);
                if(this.opcion.getEncontrar.getVidaMaxima > 0){
                    this.heroe.setVida = -this.opcion.getEncontrar.getAtaque;
                    this.loguear(`Te ataca ${this.opcion.getEncontrar.nombre}! Te saca ${this.opcion.getEncontrar.getAtaque} de vida`);
                    console.log(this.heroe)
                }else{
                    this.loguear("El monstruo esta muerto")
                }
            } else{
                this.loguear("El monstruo esta muerto")
            }
        }else{
            this.loguear("El heroe esta muerto")
        }
    }
    utilizarItem(){
        if(this.heroe.inventario.length > 0){
            if(this.heroe.inventario[0] instanceof PocionFuerza){
                this.atacar(this.heroe.inventario[0].Fuerza)
                this.loguear("Usaste una pocion de fuerza!")
            }
            this.heroe.inventario.shift()
        }else{
            this.loguear("No tienes items en tu inventario")
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
            <button id="agregarAlInventarioButton">Agregar Item al Inventario</button>
            <button id="utilizarItemButton">Utilizar Item</button>
        `;
        console.log(this.inventario);
        
        let botonInvestigar = this.shadowRoot.querySelector("#investigarButton");
        botonInvestigar.addEventListener("click", () => this.investigar());

        let botonAtacar = this.shadowRoot.querySelector("#atacarButton");
        botonAtacar.addEventListener("click", () => this.atacar());

        let botonReiniciar = this.shadowRoot.querySelector("#reiniciarButton");
        botonReiniciar.addEventListener("click", () => this.reiniciar());

        let botonAgregarInventario = this.shadowRoot.querySelector("#agregarAlInventarioButton");
        botonAgregarInventario.addEventListener("click", () => this.agregarItem(this.opcion.getEncontrar));

        let botonUtilizarItem = this.shadowRoot.querySelector("#utilizarItemButton");
        botonUtilizarItem.addEventListener("click", () => this.utilizarItem());
    }
}
customElements.define("my-game", Juego)