/*CLASE 30*/

// 01 ejercicio */

if(1 !== 2) {
    console.log("Debe entrar");
}
// === o !==
if(2 !== 2) {
    console.log("NO debe entrar");
}
// >, >= o <
if(1 >= 1) {
    console.log("Debe entrar");
}

if(
    1 !== 2 // >, >=, !==
    && 
    5 <= 5 // <, <=, >, >=
) {
    console.log("Debe entrar");
}
// 02 ejercicio */

const largoPelo = prompt("Te cortas largo o corto?");
const barba = prompt("Tienes barba?");

if(largoPelo === "largo" && barba === "si"){
     alert("Te ofrecemos corte y afeitada");

} else if (largoPelo === "largo" && barba === "no"){
     alert("Te ofrecemos corte");    

} else if (largoPelo === "corto" && barba === "si"){
     alert("Te ofrecemos afeitada");    

} else {   
     alert("Vaya al psicologo");}

/*TAREA CLASE 30*/
/*ejerecicio 1*/
/*como pongo el resto de los mes*/
let varNum = parseInt(prompt("Introduzca un número"));

if(varNum === 1 || varNum === 3 || varNum === 5 || varNum === 7 || varNum === 9){
      alert("Tu número es impar")

}else if(varNum === 2 || varNum === 4 || varNum === 6 || varNum === 8 || varNum === 10){
      alert("Tu número es par")} 

/* con operaciones matematicas*/
let numero = prompt("Introduce un número");
let resultado = parImpar(numero);

function parImpar(numero) {
  if(numero % 2 == 0) {
    alert("Tu numero es par") }
  else {
    alert("Tu numero es impar")}
}

/*ejercicio 2*/
const kg = prompt("Bienvenidos a Animalaya ¿Cuantos kg desea llevar? 1/4 kg -  1/2kg - 3/4kg - 1kg"); 

if(kg == "1/4kg") {
       
    alert ("2 sabores");
}else if(kg == "1/2kg") {
    alert("3 sabores");

}else if(kg == "3/4kg") {
    alert("4 sabores");

}else if (kg == "1kg") {
    alert("5 sabores"); }

/*ejercicio 3*/
const meses = prompt("Introduzca un mes");

if(meses == "Enero" || meses == "Marzo" || meses == "Mayo" || meses == "Julio" || meses == "Agosto" || meses == "Octubre" || meses == "Diciembre") {
    alert("Este mes tiene 31 días") 
}else if (meses == "Febrero") {
    alert("Febrero tiene 28 días")
}else {
    alert ("Este mes tiene 30 días")}
