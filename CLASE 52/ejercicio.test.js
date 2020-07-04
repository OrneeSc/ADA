/* Hacer una serie de funciones para un TO DO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.*/


function Tarea (titulo, descripcion) {   //otra opcion de pasarle el default es: (titulo, descripcion, estado = "pendiente")
    this.titulo = titulo,
    this.descripcion = descripcion,
    this.estado = "Pendiente"
}

function ToDoList () {
   this.lista = [],
   this.agregar = (titulo, descripcion) => {
       let tarea = new Tarea(titulo, descripcion);
       this.lista.push(tarea);
       } 
   this.buscarIndexTarea = (tit) => {
       let index = this.lista.findIndex(tarea => tarea.titulo = tit);
       if(index === -1) throw new Error("La tarea no existe");
       return index;
   }
   this.editarEstado = (titulo) => {
        let index = this.buscarIndexTarea(titulo);
        this.lista[index].estado = "Ok";
   }

   this.eliminarTarea = (titulo) => {

   }
   this.filtarTarea = ()
}  
//test
beforeEach(() => orneLista = new ToDoList());

test("Deberia agregar una tarea correctamente a la lista", () => {
    orneLista.agregar("supermercado", "compra del mes");
    expect(orneLista.lista[0].titulo).toBe("supermercado");
  });
  
test("Deberia dar un error si la tarea no existe", () => {
    expect(() => orneLista.buscarIndexTarea("banco")).toThrow("La tarea no existe");
  });

test("Debería editar estado", () => {
    orneLista.agregar("supermercado", "compra del mes");
    orneLista.editarEstado("supermercado");
    expect(orneLista.lista[0].estado).toBe("Ok");
});


  

