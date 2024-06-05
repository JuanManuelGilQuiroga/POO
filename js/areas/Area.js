export class Area{
    constructor(){
        this.setNombreArea = undefined;
        this.encontrar = "";
    }
    set setNombreArea(nom){
        this.nombre = nom
    }
    set setEncontrar(encontrar){
        this.encontrar = encontrar
    }
    get getNombreArea(){
        return this.nombre
    }
    get getEncontrar(){
        return this.encontrar
    }
}