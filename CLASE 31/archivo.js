/* EJERCICIO EN CLASE 31*/

const saludo = prompt("Bienvenida a la tienda, ¿cómo es tu nombre?")
        alert("Hola!" +saludo+ ",aprovecha estos productos con un 50% off: Alcohol en gel a $200 y Lavandina a $150. ")
const producto1 = prompt ("Desea comprar alcohol en gel?")
if(producto1 === "si") {
    prompt("¿Cuántas unidades desea comprar?")
}

const producto2 = prompt("¿Desea aprovechar entonces la promo de la lavandina?");
if(producto2 == "si") {
    prompt("¿Cuántas unidades desea comprar?")}
if(producto2 == "no"){
    alert("Esperamos que vuelva")}
else if("producto1" + "producto2"){
    alert("Resumen de compra")
}



///TERMINAR O PREGUNTAR A FEDE///



/* TAREA CLASE 31*/
let mes = prompt("Digame por favor que día es");
let mes = prompt("Digame por favor el mes");
let hemisferio = prompt("Digame por favor en qué hemisferio se encuentra");

if(
    (mes >= 21 && mes === "marzo") ||
    mes === "abril" ||
    mes === "mayo" ||
    (mes < 21 && mes === "junio")
) {
    if(hemisferio == "norte") {
        alert("Es primavera!");    
    } else {
        alert("Es otoño!");
    }
} else if (
    (mes >= 21 && mes === "junio") ||
    mes === "julio" ||
    mes === "agosto" ||
    (mes < 21 && mes === "septiembre")
) {
    if (hemisferio == "norte") {
        alert("Es verano");
    } else {
        alert("Es invierno!");
    }
} else if (
    (mes >= 21 && mes === "septiembre") ||
    mes === "octubre" ||
    mes === "noviembre" ||
    (mes < 21 && mes === "diciembre")
) {
    if (hemisferio == "norte") {
        alert("Es otoño");
    } else {
        alert("Es primavera");
    }
} else {
    if(hemisferio == "norte") {
        alert("Es invierno");
    } else {
        alert("Es verano");
    }
}


