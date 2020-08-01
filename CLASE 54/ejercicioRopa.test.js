/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 */
class Ropa {
    constructor(nombre, tipo, talle, color, telas, temporada) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.talle = talle;
        this.color = color;
        this.telas = telas;   
        this.temporada = temporada;
        this.tallesValidos = ["S", "M", "L", "XL"]; // que onda con esto//
    }

    validarTalle() {
       const elTalle = this.tallesValidos.findIndex(talle => talle === this.talle);
       if (elTalle === -1) throw new Error ("No existe el talle")
       return "Tu talle esta disponible";
    }
    vestirme() {
       /* const ropaParaVestirse = "remera" || "pantalon" || "pollera" */
        if (this.tipo !== "remera" && this.tipo !== "pollera" && this.tipo !== "pantalon") throw new Error (`No te podes vestir con un/una ${this.nombre}`)
        return "Vestirse ok";
    }
    calzarme() {
        if (this.tipo !== "calzado") throw new Error (`No te podes calzar un/una ${this.nombre}`)
        return "Calzado ok"
    }    
}

//const remeraOrne = new Ropa ("Remera manga larga", "remera", "L", "rojo", "algodon" );
//const zapatillasOrne = new Ropa ("Zapatillas Adidas running", "calzado", "38", "negro", "avion" );
///////////////////////////////////////////////////////////////////////////////////////////////////

// 2
 /**
  * Transformar los distintos tipos de ropa
  * del ejercicio anterior a nuevas clases
  * que extiendan de la clase principal.
  */

class Abrigo extends Ropa {
    constructor(nombre, talle, color, telas) {
        super(nombre, "Abrigo", talle, color, telas, "invierno");
        this.capucha = false; 
        this.impermeable = false;
    }
    agregarCapucha() {
        this.capucha = true;
    }
    validarImpermeable() {
        this.impermeable = true;
    }  
}

class Campera extends Abrigo {
    constructor(talle, color, telas, marca, modelo) {
        super("Campera", talle, color, telas);
        this.marca = marca;
        this.modelo = modelo;
    }
}
/*
const CamperaDeOrne = new Campera("M", "Negra", "Algodon", "Adidas", "NewYork94");
*/

class Piloto extends Abrigo {
    constructor(talle, color, telas, marca, modelo){
        super("Piloto", talle, color, telas);
        this.temporada = "Todo el Año";
    }
    valirdarImpermeable() {
        super.validarImpermeable();
        console.log("Soy un Piloto, que esperabas?")
    } 
}

/*
const PilotoDeOrne = new Piloto("M", "Rosa", "Vinilo","Good Year", "Antártida");

PilotoDeOrne.valirdarImpermeable();
"Soy un Piloto, que esperabas?"
PilotoDeOrne.agregarCapucha();
*/




