/* Utilizando esta url: 
(https://jsonplaceholder.typicode.com/users/6) 
hacer un get y mostrar todas las propiedades que puedan cada una en su propio <input>*/

let arrayConData = [];
const load = () => {
   /* axios.get("https://jsonplaceholder.typicode.com/users/6")
    .then(res => arrayConData = res.data.username)
    .catch(err => console.log(err));

    const postsButton = document.querySelector("#posts-button");
    postsButton.addEventListener("click", () => {
        document.querySelector("#posts").value = JSON.stringify(arrayConData);
    });*/
    
    axios.get("https://jsonplaceholder.typicode.com/users/6")
    .then(res => arrayConData = res.data.username)
    .catch(err => console.log(err));

    const postsButton = document.querySelector("#posts-button");
    postsButton.addEventListener("click", () => {
        document.querySelector("#posts").value = JSON.stringify(arrayConData);
    });

    
};