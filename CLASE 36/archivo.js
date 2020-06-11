//firebase //

/**ejercicio en grupo::
 *  Crear un programa que pida ingresar nombres separados por espacios y
 * devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
 * 
 * Ingrese nombres: Ada Greta Grace
 * ¡Hola Ada!
 * ¡Hola Greta!
 * ¡Hola Grace!
 * */
//1//

let nombres = prompt("ingrese los nombres");
const miArray = nombres.split(' '); 
console.log(miArray);
for (let i = 0; i <=2; i++){
    alert("hola "+ miArray[i]+ "!");
}

//2//
let numeros = prompt("ingrese los 5 numeros"); // 57 5 78 34 77
const miArray = numeros.split(' '); // .split lo convierte en un array con el parámetro separador que le paso en 
//ahora tenemos que ver como recorrerlo y compararlo

let menor = miArray[0]; 

for(let i = 0; i<=5; i++){
    if(miArray[i]< menor){
        menor = miArray[i];
    }
}
alert("el menor número ingresado fue " + menor);
console.log(miArray);

//3//

let suma = 0; 
let numeros = prompt("ingrese los 5 numeros"); 
const miArray = numeros.split(' ');
for(let i=0; i<5; i++){
    suma += Number(miArray[i]);
}
alert(suma);

//4//
let numeros = prompt("ingrese los 5 numeros"); 
const miArray = numeros.split(' ');
let consulta = prompt("¿Qué valor desea saber si existe?");

if(miArray.indexOf(consulta) !== -1){
    alert("El número " + consulta + " se encuentra donde usté lo busca");
}
else{
    alert("El número buscado no está acá");
}

//5//
let numeros = prompt("Ingrese los valores que se le cante");
const miArray = numeros.split(' ');
let consulta = prompt("¿Qué valor desea chequear?");
if(miArray.indexOf(consulta) === -1){
    alert("Su valor no está acá");
}
else{
    alert ("Su valor se encuentra en el indice " + miArray.indexOf(consulta));
}

//6//
let nombres = prompt("Ingrese todos los participantes");
 const miArray = nombres.split(' ');
 let positionSam = miArray.indexOf("Sam");
 let positionFrodo = miArray.indexOf("Frodo");
 if(positionFrodo == (positionSam + 1) || positionFrodo == (positionSam - 1)){
     alert("Frodo y Sam están juntos");
 }
 else{
     alert("Sam y Frodo están separados");
}

//7//
let pera = 0;
let manzana = 0;
let durazno = 0;
let frutas = prompt("Ingrese todas las frutas que tiene");
const miArray = frutas.split(' ');
for(let i=0; i < miArray.length; i++){
    if(miArray[i] == "pera"){
        pera = pera + 1;
    }
    else if (miArray[i] == "manzana"){
        manzana = manzana + 1;
    }
    else {
        durazno += 1;

    }
}
alert(" Hay " + durazno + "duraznos " + pera + "peras " + manzana + "manzanas");

// 08
 /**
  * Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas come cada mono. 
  * Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:
  * Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
  * Cuántas bananas come un mono?: 2
  * * ¡Oh no!¡No hay suficientes bananas para los monos! 😭
  */
let banana = 0;
let mono = 0;
let lista = prompt("Lista de monos y bananas");
const miArray1 = lista.split(' ');
for (let i=0; i< miArray1.length; i++){
    if(miArray1[i] == "monos"){
        mono += 1;
    }
    else if (miArray1[i] == "banana"){
        banana += 1;
    }
}
   
let cantidad = Number(prompt("cuantas bananas come cada mono?"));
let resultado = (banana / cantidad);
if (mono <= resultado){
    alert("Hay suficientes bananas para los monos");
} else {
    alert("No hay suficientes bananas");
}

// 09
 /**
  * Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y 
  * los gatos por otro. Ejemplo:
  * Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
  * Resultado: 🐶🐶🐶🐶🐱🐱🐱
  */

 let perros = 0;
 let gatos = 0;
 let lista = prompt("Ingresa perros y gatos");
 const miArray = lista.split(' ').sort();
 console.log(miArray.join(' '));

 

 // 10
 /**
  * Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
  * 
  * Para una usuaria, debe mostrar: nombre usuaria + está conectada
  *
  * Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
  *
  * Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas
  *
  * Ejemplo:
  *
  * Ingrese nombres de usuarias: Ada
  * Ada está conectada
  *
  * Ingrese nombres de usuarias: Ada Grace
  * Ada y Grace están conectadas
  *
  * Ingrese nombres de usuarias: Ada Grace Marie
  * Ada, Grace y 1 persona(s) más están conectadas
  */

let usuarios = prompt("Ingrese nombres de usuarios");
const miArray = usuarios.split(' '); 
console.log(miArray);

if (miArray.length === 1) {
    alert(miArray[0]+" esta conectada!");
}else if (miArray.length === 2 ){
    alert(`${miArray[0]} y ${miArray[1]} están conectas`);
}else {
    let personas = miArray.length - 2;
    alert(`${miArray[0]} , ${miArray[1]} y ${personas} persona(s) más están conectadas`);

}
// 11
  /**
   * Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, 
   * si no lo hace debe mostrar un mensaje de error. El programa debe convertir los plantines en flores, tomando como referencia 
   * la primera flor que encuentre a su izquierda. Ejemplo:
   * Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
   * ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸
   */
  
let lista = prompt("Ingrese flores y plantines");
const miArray = lista.split(' ');




