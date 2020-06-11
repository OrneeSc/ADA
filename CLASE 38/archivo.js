///////////EJERCICIOS EN CLASE///////// https://github.com/fedm4/js-course/blob/master/04%20-%20Functions/ejercicios-functions.js///
//1// Hacer una funcion llamada "saludo" 
/* Cada vez llamo la funcion me  pide un nombre
 * Toma ese nombre y me dice 
 * "Hola <nombre>" en un alert. */

const saludo = () => { 
    let nombre = prompt("Ingrese su nombre");
    alert(`Hola ${nombre}`);
}

saludo();
saludo();

//2 // Hacer una funcion para elevar un 
 /* número al cuadrado, pidiendo el valor
 /* por prompt y mostrnadolo por alert.*/

const cuad = () => {
    let num = Number(prompt(`Ingrese el valor a elevar:`));
    //num = 6
    //num = num*num;
    alert(`El resultado es ${num*num}`);
 }

 cuad();

 //3 // Crear un array vacío
 /*  Hacer una funcion para llenar
 /*    el array, pidiendo por prompt. Cada vez
 /*    que invoco la función, me muestra UN prompt y
 /*    lo carga en el array.
 /*  Hacer una función que muestre en un alert
 /*    el último valor agregado al array.
 /*  Hacer una función para imprimir la lista
 /*    de valores del array en un console.log. */


let array = [];
 
//Definicion de funciones
const agregaValores = () => {
        let valorArray = prompt (`Ingrese un valor de array:`);
        array.push(valorArray);
}

/* Opcion 1----------
const imprimeUltimo = () => {
   let b = array.pop();
   alert (`El ultimo valor del arreglo es: ${b}`);
   array.push(b);
} */

//Opcion 2-----------
const imprimeUltimo2 = () => {
    tamañoArray = array.length;
    alert(`El ultimo valor es ${array[tamañoArray-1]}`);
} 


const imprimirArray = () => {
   alert (`El arreglo es: ${array}`);
}

//Asigno valores al array
let resp;
do {
   agregaValores();
   resp = prompt ("Desea ingresar mas valores?");
} while (resp === "si")

//Imprimo el ultimo
//imprimeUltimo();
imprimeUltimo2();


//Imprimo el array
imprimirArray();

/////////////////////////////////////////