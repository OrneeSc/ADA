//01
/**
 * Crear un input de tipo checkbox.
 * Escribir una funcion "toggleChecked" que 
 * cambie el estado de clickeado a sin 
 * clickear o viceversa.
 */

const toggleChecked = () => {
    const input = document.querySelector("#ej-1 > input");
    input.checked = !input.checked;
};


//------------------------------------------------------

// 02
 /**
  * Dado el siguiente HTML
  */
 <input type="text" id="miInput" name="miInput"></input>
/**
 * cambiar el atributo name a miExInput
 */
const elInput = document.querySelector("input");
elInput.name = "miExInput";

//resuelto por FEDE:
const changeMiInputName = () => {
    const input = document.querySelector("#miInput");
    //input.name = "miExInput";
    input.setAttribute("name", "miExInput");
};

//------------------------------------------------------

// 03
 /**
  * Escribir un HTML con un div.
  * Luego, por ID, modificar el contenido del DIV
  * agregando una lista de 5 elementos.
  * Una vez agregada la lista, agregar 
  * programaticamente un numero a cada elemento
  * 
  * por ejemplo, si son 5 elementos deberia verse:
  * 1
  * 2
  * 3
  * 4
  * 5
  */
 const addList = () => {
    const ej3Container = document.querySelector("#ej3-container");
    ej3Container.innerHTML = `
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    `;

    const lis = document.querySelectorAll("#ej3-container li");

    for(let i = 0; i < lis.length; i++) {
        lis[i].innerText = i+1;
    }
};

//------------------------------------------------------



 //04
  /**
   * Escribir una funcion que se llame changeTitle.
   * Para esto deberemos tener dos elementos,
   * un input, y un h1. 
   * Debemos tomar el valor del input y ponerlo como 
   * el title. Si ya existe texto, reemplazarlo.
   */
  

const changeTitle = () => {
    const title = document.querySelector("#ej4-title");
    const input = document.querySelector("#ej4-input");

    title.textContent = input.value;

    input.value = "";
};