/* CLASE 33 ejercicio en grupo*/
/*EJERCICIO 03
* 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE */

let mes = Number(prompt("Dime un mes del año en número"));

switch (mes) {
  case 1:
        mes = "enero";
        break;
  case 2: "b"
        mes = "febrero";
        break;
  case 3:
        mes = "marzo";
        break;
  case 4:
        mes = "abril";
        break;
  case 5:
        mes = "mayo";
        break;
  case 6:
        mes = "junio";
        break;  
  case 7:
        mes = "julio";
        break;
  case 8:
        mes = "agosto";
        break; 
  case 9:
        mes = "septiembre";
        break;   
  case 10:
        mes = "octubre";
        break;
  case 11:
        mes = "noviembre";
        break;
  case 12:
        mes = "diciembre";
        break;
  default: 
        mes = "mes inválido";
}

     alert(`Corresponde al mes ${mes}`);


const mes = Number(prompt("Dime un mes del año en número"));

if (mes === 1){
    alert("Enero");
}else if(mes === 2){
    alert("Febrero");
}else if(mes === 3){
    alert("Marzo");
}else if(mes === 4){
    alert("Abril");
}else if(mes === 5){
    alert("Mayo");
}else if(mes === 6){
    alert("Junio");
}else if(mes === 7){
    alert("Julio");
}else if(mes === 8){
    alert("Agosto");
}else if(mes === 9){
    alert("Septiembre");
}else if(mes === 10){
    alert("Octubre");
}else if(mes === 11){
    alert("Noviembre");
}else if(mes === 12){
    alert("Diciembre");
}else {
    alert("mes inválido");}


   /*ejercicio 4
   1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo. */

const mes = prompt("Dime un mes de la semana");


try {

    if (mes === "domingo"){
        alert("1");
    }else if(mes === "lunes"){
        alert("2");
    }else if(mes === "martes"){
        alert("3");
    }else if(mes === "miercoles"){
        alert("4");
    }else if(mes === "jueves"){
        alert("5");
    }else if(mes === "viernes"){
        alert("6");
    }else if(mes === "sábado"){
        alert("7");
    }else {
        throw new Error("Día inválido");
    }
}
catch (err){
    alert(err);
}