/*EJERCICIO EN GRUPO CLASE 34*/
/1 / /while/
let numero = 100;

while (numero > 0) {
    console.log(numero);
    numero--;
}

/for/
for (let i = 100; i >= 0; i--){
    console.log (i);
}
/do while/

let i = 100;
do {
    console.log (i);
    i--;
} while (i >= 0);


/2/ /while/
let numero = 0;

while (numero < 1000) {
    console.log(numero);
    numero += 2;
}

/for/
for (let i = 0; i <= 1000; i +=2){
    console.log(i);
}

/do while/
let i = 0
do {
    console.log (i);
    i += 2;
} while (i < 1000);


/3/ /while/

let numero = 0;
let suma = 0;

while (numero < 1000) {
    suma = suma + numero
    numero++;
    console.log(suma);
}

/for/

let suma = 0;
for (let i = 0; i < 1000; i++){
    suma = suma + i;
    console.log(suma);
}

/do while/

let suma = 0;
let i = 0;

do {
    suma = suma + i;
    console.log (suma);
    i++;
} while (i < 1000);


/4/ /while/
let numero = 0;
let suma = 0;

while (numero < 1000) {
    if (numero % 2 != 0){ 
        suma = suma + numero;
    }
    numero++;  
}
console.log(suma);

/for/
let suma = 0;
for (let i = 0; i < 1000; i++){
    if (i % 2 != 0){ 
       suma = suma + i;
       console.log(suma);
    }
}

/do while/

let suma = 0;
let i = 0;
do {
    if (i % 2 != 0){ 
        suma = suma + i;
        console.log(suma);
    }
    i++;
} while (i < 1000);


/5/ /while/
let i = 1; 
let dibujo = "*";

 while (i <= 13) {
    console.log(dibujo);
    dibujo = dibujo + "*"; 
    i++;
 }

 /for/
 let dibujo = "*";
 for (let i = 1; i <= 13; i++){
     dibujo = dibujo + "*";
     console.log(dibujo);
 }

/do while/
let dibujo = "*";
let i = 1;
do {
    dibujo = dibujo + "*";
    console.log(dibujo);
    i++;
} while (i <= 13);

/6/
/**
 * Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for
 */

for (let i = 0; i <= 10000; i += 10){
    console.log(i);
}

/ 07/
 /* Mostrar en consola los números desde el 1000 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**/

for (let i = 1000; i >= 0; i --){
    if (i % 10 == 0) {
        console.log(`**${i}**`);
    }else {
    console.log(`${i}`); //comilla francesa es un string//
    }
}


////////////

/////TAREA CLASE 34////
//Hacer un programa que pida al usuario un numero del 1 al 9 
//Luego imprimir la tabla de multiplicar de ese numero. Utilizar while /

let numero = Number(prompt("introduzca un numero"));
let i = 0; 

while (i <= 10) {
 console.log(numero+"*"+i+"="+(numero*i));
 i++;
}

//Definir un nombre de usuario y una contraseña.　Pedir al usuario que ingrese ambos campos por prompt, y 
//repetir mientras el usuario NO escriba correctamente. Utilizar operadores lógicos && u  en la condición si es necesario.
//Sumar al ejercicio anterior la opción de que al tercer intento, el programa se cierra. Utilizar operadores lógicos && u 
//en la condición si es necesario.//

let usuario = "ornella";
let contraseña = 1234;


while (usuario !== "ornella" || contraseña !== 1234){
    alert("intente nuevamente");
    }
