export class Criatura{
    //#vida = this.#vidaMaxima;
    #vidaMaxima = 100;
    #ataque = 50;
    constructor(){
        this.setNombre = undefined;
    }
    set setNombre(nom="Jhon"){
        this.nombre = nom
    }
    set setVida(puntos){
        this.#vidaMaxima += puntos;
    }
    set setAtaque(puntos){
        this.#ataque += puntos;
    }
}