/*1. Hacer una función que guarde una persona
*    en una lista de listas de datos de personas.
*    Es decir, una lista con varias listas adentro.
*    Deberia guardar por cada persona, una lista de datos
*    que incluyan el nombre completo, la edad y 
*    la dirección de email.
* 1b. Al ingresar nueva persona, validar que no 
*     exista en la lista. Si existe, tirar
*     un error. (Usar funcion distinta para validar
*     y llamar dentro de la funcion de guardar persona).
* 2. Hacer una función que me devuelva la lista
*    completa de personas.*/

const lista = [
    /*1lista */ ['Orne Sc', 25, 'violeta'],
  /*2lista*/  ['Agus AD', 24, 'amarillo'],
    /*3 lista */['Valeria Q', 37, 'morado'],
   /*4 lista*/ ['Niko G', 31, 'rojo'],
];

/*1*/
const agregar = (nombre, edad, color) => {
  validar(nombre);
  lista.push([nombre, edad, color]); 
}
agregar('Aylen B', 29, 'rosa');

console.log(lista);

const validar = (nombre) => {
  const nueva = lista.find(persona => {
       if (nombre === persona[0]){
           return true
       }     
      })
       if (nueva) {
           throw new Error ("Usuario ya ingresado")
       }
}

/*3. Hacer una función que me permita encontrar
 *    una persona por email.*/

 let encontrarEmail = () => { 
    let emailBuscado = prompt("Ingrese el email que quiere buscar");
    let emailRequerido = listado.find(datos => datos[2] === emailBuscado);
    alert(`Los datos de la persona que buscas son ${emailRequerido}`);
}
encontrarEmail();*/
/*
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.*/
const listado = [
  ["Ana", "12", "email"],
  ["Lucía", "24", "lapuntadeunsauceverde"]
];


let buscarPorNombre = () => { 
  let nombreBuscado = prompt("Ingrese el nombre que quiere buscar");
  let persona = listado.find(datos => datos[0].indexOf(nombreBuscado) !== -1);
  if (persona) {
      alert(`Encontramos a  ${persona}`)
      return persona;
  } 
  else{
      throw new Error("La persona no essssiste mamu");        
  }
 
}
try{
  buscarPorNombre();
} catch(err){
  alert(`Se produjo un error de tipo ${err}`)
}


 /*
 * 5. Hacer una función para borrar personas por mail.*/
const listado = [
  ["Ana", "12", "email"],
  ["Lucía", "24", "otro"],
  ["Jorge", "12", "tercero"],
  ["Javier", "12", "dejame"]
];

let borrarPorEmail = () =>{
  let emailBuscado = prompt("Ingrese el email que quiere buscar");
  let emailRequerido = listado.find(datos => datos[2] === emailBuscado);
  let indexDeLaPersona = listado.indexOf(emailRequerido);
  console.log(indexDeLaPersona);
  alert(indexDeLaPersona);
  listado.splice(indexDeLaPersona, 1);
  console.log(listado);
  return(emailRequerido);
  
}
borrarPorEmail();

/*6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.*/
const listado = [
  ["Ana", "12", "email"],
  ["Lucía", "24", "otro"],
  ["Jorge", "12", "tercero"],
  ["Javier", "12", "dejame"]
];
let cambiarNombre = () =>{
  let emailBuscado = prompt("Ingrese el email que quiere buscar");
  let nombreNuevo = prompt("INgrese el nuevo nombre");
  let i = listado.findIndex(datos => datos[2] === emailBuscado);
  if (i !== -1){
      listado[i][0] = nombreNuevo;
      alert(`Nombre cambiado. Nuevos datos ${listado[i]}`)    }
  else{
      throw new Error ("No lo encontramos che");
  }
  
}
try{
  cambiarNombre();
} catch(err){
  alert(`Se produjo un error de tipo ${err}`);
}

/** 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.*/
const listado = [
  ["Ana", "12", "email"],
  ["Lucía", "24", "otro"],
  ["Jorge", "12", "tercero"],
  ["Javier", "12", "dejame"]
];

let cambiarEdad = () =>{
  let emailBuscado = prompt("Ingrese el email que quiere buscar");
  let edadNueva = prompt("Ingrese su nueva edad");
  let i = listado.findIndex(datos => datos[2] === emailBuscado);
  if (i !== -1){
      listado[i][1] = edadNueva;
      alert(`Edad cambiada. Nuevos datos ${listado[i]}`)    }
  else{
      throw new Error ("No lo encontramos che");
  }
  
}
try{
  cambiarEdad();
} catch(err){
  alert(`Se produjo un error de tipo ${err}`);
}
