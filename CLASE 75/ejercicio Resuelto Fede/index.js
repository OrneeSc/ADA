let todos = [];
let users = [];
const onload = () => {
    const lista = document.querySelector("#todo-list");


    const p1 = axios.get("https://jsonplaceholder.typicode.com/todos");
    const p2 = axios.get("https://jsonplaceholder.typicode.com/users");

    const crearTodo = (todo) =>{
            const li = document.createElement('li');
            const title = document.createTextNode(todo.title);
            const u = users.find(user => user.id === todo.userId);
            const user = document.createTextNode(u.name);
            const separator = document.createTextNode(" - ");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            //checkbox.id = "checkboxId"; 
            checkbox.addEventListener("click", () => {
                axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                    completed: checkbox.checked
                    
                }).then(res => {
                    console.log(res.data)
                    if(res.data.completed)
                    li.style.textDecoration  = "line-through";
                })
                .catch(err => {throw err;});
            });

            const btnBorrar = document.createElement("button");
            btnBorrar.innerText = "Eliminar";
            btnBorrar.id = "btn-borrar";

            btnBorrar.addEventListener("click", (event) => {
                //sacamos del html:

                const elemento = event.target;
                elemento.parentElement.remove();

                //sacamos de la api:
                axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err)); //esto es una TRAMPAA
            });
            
            li.appendChild(title);
            li.appendChild(separator);
            li.appendChild(user);
            li.appendChild(checkbox);
            li.appendChild(btnBorrar);

            if(todo.completed) li.classList.add("completed");
            
            lista.appendChild(li);
    }
    

    Promise.all([p1, p2]).then(res => {
        // res es un array [{data:}, {data:}]\
        todos = res[0].data;
        users = res[1].data;

        todos.forEach(todo => {
            crearTodo(todo); // por cada to do se ejecuta esta funcion
        });

        // users.forEach(user => {
        //     const select = document.querySelector("#user-select");
        //     const option = document.createElement("option");
        //     option.value = user.id;
        //     option.innerHTML =user.name;

        //     select.appendChild(option);
        // });
    })

    const agregarTodo = async () =>{
        try{
            const newTodo = document.querySelector("#input-todo");
            // const options = document.querySelectorAll("option"); [array de options]
            // let optionUser = options.forEach(option =>{
            //     if(option.selected){
            //         return option.value
            //     }
            // })

            //mandamos a la api
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos",{
                userId:2,
                title: newTodo.value,
                completed: false
            })

            console.log(res.data);
            crearTodo(res.data);
        }catch(err){
            console.log(err);
        }
    }

    document.querySelector('#btn-todo').addEventListener("click", agregarTodo);


}