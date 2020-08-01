// 01
/**
 * Dado el siguiente HTML
 */
<ul>
        <li>elemento 1</li>
        <li>elemento 2</li>
        <li>elemento 3</li>
        <li>elemento 4</li>
        <li>elemento 5</li>
        <li>elemento 6</li>
    </ul>

/**
 * Imprimir en consola el texto de cada <li>
 */
document.querySelector("li").innerText;
"elemento 1"

const elementLi = document.querySelectorAll("li");

elementLi.forEach(element => console.log(element.innerText));
"elemento 1"
"elemento 2"
"elemento 3"
"elemento 4"
"elemento 5"
"elemento 6"


// 02
 /**
  * Dado el siguiente html
  */
 <div>
    <span></span>
    <span></span>
    <ul>
        <li>element 1</li>
        <li>element 2</li>
    </ul>
    <span id="spanId"></span>
    <span></span>
 </div>
 /**
  * Obtener el lista de todos los elementos dentro del <div>
  * usando unicamente selector por ID
  */
 const Divs = document.querySelector("#spanId")
 
 Divs.parentElement.children;

 //como lo resolvio FEDE:
 // Forma 1
const ul = document.querySelector("ul");
const lis = ul.children;

for(let li of lis) { //[1,2,3,4,5]
  console.log(li.innerText);
} 

/*
// Forma 2
const lis = document.querySelectorAll("li");
lis.forEach(li => console.log(li.innerText));
*/

//EJERCICIO2

 /* 
 HTMLCollection(5) [span, span, ul, span#spanId, span, spanId: span#spanId]
0: span
1: span
2: ul
3: span#spanId
4: span
length: 5
*/

//como lo resolvio FEDE:
const spanId = document.querySelector("#spanId");
const parent = spanId.parentElement;
const ulContainer = parent.children[2];
const ulChildren = ulContainer.children;
for(let li of ulChildren){
  console.log(li.innerText);
}

// const arrayBasadoEnNodeList = [...document.querySelectorAll("li")];