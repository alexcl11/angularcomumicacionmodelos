export class Producto {
    // LAS PROPIEDADES PARA QUE SEAN ACCESIBLES DEBEN SER PUBLICAS
    // public nombre: string;
    // public imagen: string;
    // public precio: number;

    constructor(
        public nombre: string,
        public imagen: string,
        public precio: number,
    ){
        
    }

    // // VAMOS A CREAR UN CONSTRUCTOR CON PARAMETROS PARA QUE RECIBA LA 
    // // INFORMACION DE LAS PROPIEDADES DIRECTAMENTE
    // constructor(nombre:string, imagen:string, precio:number){
    //     this.nombre = nombre;
    //     this.imagen = imagen;
    //     this.precio = precio
    // }



        
}