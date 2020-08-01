// 001
/**
 * Escribir una funcion que nos permita pasarle un elemento --> div, p , h1 
 * y un color, y  le cambie el color de fondo al elemento.
 */

let element = document.querySelector(".ej-1 > button");
const bgChange = (element,color) => {
    element.setAttribute("style", `background-color: ${color}; border: 2px solid ${color};`);
}

//en consola:
//> bgChange(element,"red")

// ------------------------------------------------------------

//002 
/**
 * Modificar la funcion previa para que, si no se recibe
 * un color por parametro, se busque un color de forma
 * azarosamente.
 * (math.random)
 */

const changeElementColor = (element, color) => {
    if(!(element instanceof HTMLElement)) throw new Error("El elemento debe ser instancia de HTMLElement");
    if(!color) color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    element.style.backgroundColor = color; 
};

// ------------------------------------------------------------
// 003
/**
 * Crear una lista con varios elementos.
 * Crear una funcion que asigne la clase
 * "active" a uno de estos elementos seleccionados.
 * Ademas al mismo tiempo tiene que eliminar
 * la clase "active" del resto de los elementos.
 * Asignarle algun estilo para diferenciar la clase
 * "active" de cuando no se encuentra la misma.
 */

let lista = document.querySelectorAll(".ej-3 li");
const activarElemento = (index) => {
    //let lista = document.querySelectorAll(".ej-3 li");
    lista.forEach(li => {
        li.classList.remove("active");
    });
    lista[index].classList.add("active"); 
}

//en consola:
//> activarElemento("0");



// ------------------------------------------------------------

// 004

/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */

let titulo = document.querySelector(".ej-4 > h1");

const growSize = (titulo) => {
    titulo.setAttribute("style", "font-size: 25px");
}
const reduceSize = (titulo) => {
    titulo.setAttribute("style", "font-size: 8px");
}

//en consola: growSize(titulo);



// ------------------------------------------------------------

// 005
/**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */

 let imageIndex = 0;
 const slide = () => {
     const images = document.querySelectorAll("#ej5-lista li");
     images[imageIndex].style.display = "none";
     imageIndex++;
     if(imageIndex === images.length) imageIndex = 0;
     images[imageIndex].style.display = "block";
 };