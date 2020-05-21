/*let es para ejecutar mi variable*/
/*prompt string es el texto*/

let variableNumber = prompt("¿Como te llamas?");
typeof variableNumber
/*prompt number te tira el cartel y podes poner un numero y  te lo ejecuta*/
variableNumber = parseInt(prompt("¿Cuantos años tenes?"));
typeof variableNumber

let const miConstante1 = "primera const";
let const miConstante2 = "segunda const";
let variable1 = "variable";

miConstante1 = prompt("como te llamas");
miConstante2 = prompt("como es tu apellido"));
variable1 = prompt("como te llamas", "como es tu apellido")

miConstante1 = prompt("como te llamas");
"Ornella"
miConstante2 = prompt("como es tu apellido");
"sciarrillo"
variable1 = miConstante1 + miConstante2;
"Ornellasciarrillo"
 


/*Ejercicio clase 32*
Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. 
Una vez elegida la marca debe ofrecer elegir entre dos modelos distintos de la marca. 
Finalmente debe mostrar el producto elegido. Cada marca debe tener modelos distintos a los de otras marcas 
(no pueden tener el mismo nombre). P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.
*/

let eleccion1 = prompt("Hola! Tenes que elegir el producto entre estas 3 marcas: \nAdidas \nPuma \nNike");
let modelo;
if(eleccion1 === "Adidas"){
    modelo = prompt("Escoge entre Running o Tennis")

}else if (eleccion1 === "Puma") {
    modelo = prompt("Escoge entre Yoga o Streching")
}else {
    modelo = prompt("Escoge entre Basquet o fútbol")
}
    alert("Elegiste " +eleccion1+ " modelo " +modelo);


