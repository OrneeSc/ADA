/* TAREA CLASE 37*/

/*01 Crear un documento con el nombre arr_006.js
 * Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
 * Smells Like Teen Spirit
 * In Bloom
 * Come As You Are
 * Immodium
 * Lithium
 * Polly
 * Territorial Pissings
 * Drain You
 * Lounge Act
 * Pay To Play
 * On a Plain
 * Endless, Nameless
 * Reemplazar Immodium por Breed
 * Reemplazar Pay To Play por Stay Away
 * Reemplazar Tim por Something in the Way
 * Mostrar en consola la lista de canciones modificada
 * El resultado debería ser:
 * [
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Breed",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Stay Away",
    "On a Plain",
    "Something in the Way"
] */

const discoNevermind = ["Smells Like Teen Spirit", "In Bloom" ,"Come As You Are", "Immodium", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Pay To Play", "On a Plain", "Endless ,Nameless"];
discoNevermind [3] = "Breed";
discoNevermind [9] = "Stay Away";
discoNevermind [11] = "Something in the Way";
console.log(discoNevermind);
["Smells Like Teen Spirit", "In Bloom", "Come As You Are",
 "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act",
  "Stay Away", "On a Plain", "Something in the Way"]

  /////////////////////////////////////////////////////////////////////
  /* Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
 * Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
 * Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
 * Mostrar en consola la cantidad de etiquetas guardadas en el array*/
let etiquetasHtml = ["Body","Header","Section","Div","Footer"];
etiquetasHtml[1].toUpperCase();
etiquetasHtml[4].toLowerCase();
etiquetasHtml.length;


/////////////////////////////////////////////////////////////////////

/*03 *Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando shift y unshift.
let frutas = ['Manzana', 'Banana'];*/

let frutas = ["Manzana", "Banana"];
frutas.shift();
frutas.unshift("Mandarina"); 
console.log(frutas);
(2) ["Mandarina", "Banana"]
////////////////////////////////////////////////////////////////////////

/*04 Declarar una variable llamada concreteAndGold y asignarle un array vacio []
 * Agregar al array las siguientes canciones:
 * T-Shirt
 * Run
 * Make It Right
 * The Sky Is a Neighborhood
 * La Dee Da
 * Dirty Water
 * Arrows
 * Happy Ever After (Zero Hour)
 * Sunday Rain
 * The Line
 * Concrete and Gold
 * 
 * Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
 * Los elementos tienen que guardarse en el mismo orden que se van ingresando
 * Mostrar en consola la primera y última canción
 * Mostrar en consola el contenido del array
 * Resultado esperado:
 */
"T-Shirt"
"Concrete and Gold"
[
    "T-Shirt",
    "Run",
    "Make It Right",
    "The Sky Is a Neighborhood",
    "La Dee Da",
    "Dirty Water",
    "Arrows",
    "Happy Ever After (Zero Hour)",
    "Sunday Rain",
    "The Line",
    "Concrete and Gold"
]

let concreteAndGold = [];
concreteAndGold.push("T-Shirt");
concreteAndGold.push("Run");
concreteAndGold.push("Make It Right");
concreteAndGold.push("The Sky Is a Neighborhood");
concreteAndGold.push("La Dee Da");
concreteAndGold.push("Dirty Water");
concreteAndGold.push("Arrows");
concreteAndGold.push("Happy Ever After (Zero Hour)");
concreteAndGold.push("Sunday Rain");
concreteAndGold.push("The Line");
concreteAndGold.push("Concrete and Gold");

console.log(concreteAndGold);
concreteAndGold [0]
"T-Shirt"
concreteAndGold [10]
"Concrete and Gold"

///////////////////////////////////////////////////////////////////////////////////////

// 05
/**
 * Crear un documento con el nombre arr_014.js
 * Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
 * Eliminar el primer elemento, y agregarlo al final del array.
 * Mostrar el resultado final.
 * Resultado esperado
 */
/*[1, 2, 3, 4, 5, 6] */

let numeros = [6, 1, 2, 3, 4, 5];
numeros.shift();

console.log(numeros);
[1, 2, 3, 4, 5]

numeros.push(6);
console.log(numeros)
[1, 2, 3, 4, 5, 6]

/////////////////////////////////////////////////////////////////////////////////////////

//06
// Ordernar el siguiente array de menor a mayor *google*
/*[3,2,5,7,4,1,6]*/
let Array = [3,2,5,7,4,1,6];
Array.sort();
(7) [1, 2, 3, 4, 5, 6, 7];
