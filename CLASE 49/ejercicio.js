/*
 * Crear un objeto "receta" que tenga una lista 
 * de ingredientes con su cantidad, y un 
 * metodo que muestre un texto de 
 * las cantidades. Por ejemplo:
 * - La receta <nombre> lleva 2 tazas de harina,
 * 5 gramos de levadura, etc...
*/



//const budin = new Receta ()
function Ingredientes (cantidad, ingrediente) {
    this.cantidad = cantidad;
    this.ingrediente = ingrediente;
}

function Receta (nombre) {
    this.nombre = nombre;
    this.ingredientes = [];
    this.agregarIngredientes = (cantidad,ingrediente) =>{
        let newIngrediente = new Ingredientes(cantidad,ingrediente);
        this.ingredientes.push(newIngrediente);
    }
}

function Recetazas () {
    this.lista = [];

    this.agregarReceta = (nombre,cantidad,ingrediente) =>{
        const newReceta = new Receta(nombre);
        this.lista.push(newReceta);
        let index = this.lista.findIndex(nombreReceta => nombreReceta = nombre);
        this.lista[index].agregarIngredientes(cantidad,ingrediente);
    }
    //this.agregarIngredientesPorReceta = (nombre,cantidad, ingrediente) =>{    
    //}
}


//ejemplo//
function Libro (nombre,año) {
    this.nombre = nombre;
    this.año = año;
}

function persona (nombre) {
    this.nombre = nombre;
    this.libros = [];
    this.agregarLibros = (nombre, año) => {
        let newLibro = new Libro(nombre, año)
        this.libros.push(newLibro);
    }
}
//Orne = new persona
//Orne.agregarLibros("Harry Potter", 2001);
