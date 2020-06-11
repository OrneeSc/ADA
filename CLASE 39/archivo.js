// 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * array.reverse
 * 
 ***********************************************/

const myFuntion = (numero) => {
    let myArray = String(numero).split('');
    let print = myArray.reverse();
    console.log(Number(print.join('')));
 }
myFuntion(3455);
//2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 * Split y join + sort
 *  
 ***********************************************/
const myFuntion = (word) => {
    let myArray = String(word).split('');
    let print = myArray.sort();
    console.log(String(print.join('')));
}

myFuntion("hola");

// 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 * Join y split
 *  
 ***********************************************/
const myFuntion = (phrase) => {
    let myArray = phrase.split(' ');
    for (let i= 0; i < myArray.length; i++) {
        myArray[i] = myArray[i][0].toUpperCase() + myArray[i].slice(1);
    }
    console.log(myArray);
 }
