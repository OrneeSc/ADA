/*https://jsonplaceholder.typicode.com/todos
https://jsonplaceholder.typicode.com/users*/


const load = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res2 => {
            const usuarios = res2.data;
            for(let i = 0; i < res.data.length; i++) {
                const li = document.createElement("li") 
                li.id = res.data[i].id;
                li.innerText = res.data[i].title;
                li.style.listStyle = "none";
                li.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
                li.style.textTransform = "uppercase";
                li.style.marginBottom = "10px";
                li.classList.add("card");
                
                const checkbox = document.createElement("input")
                checkbox.type = "checkbox";
                checkbox.classList.add("checkbox-style");

                const user = usuarios.find(user => user.id === res.data[i].userId);
                
                li.innerHTML = li.innerHTML + user.name + user.email;
               
                const tareaCompleta = res.data[i].completed;
                if(tareaCompleta){
                    li.style.color = "blue";
                    checkbox.checked = true;
                } 
    
                li.appendChild(checkbox);
                document.querySelector("ul").appendChild(li);
            };
        })
        
       
    });
    
};





