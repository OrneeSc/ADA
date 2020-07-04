/*************************************
  * Crear una funcion que me devuelva un objeto
  * Este objeto va a permitirme guardar 
  * peliculas que quiera ver, haya visto, o este viendo
  * O  sea, tengo un objeto con una lista de peliculas,
  * cada pelicula tiene su nombre, su director, su año, 
  * su genero, y un estado que puede ser (pendiente, viendo, vista).
  * Lo que tengo que poder hacer es
  * 1. Agregar peliculas
  * 2. Cambiar el estado
  * 3. Remover peliculas
  * 4. Obtener una lista legible con console.log de peliculas 
  * por estado. O sea, le pido un estado y me deuvelve las peliculas
  * correspondientes. (`nombre del año tanto, dirigida por quien`)
  */

 const misPeliculas = {
  lista: [],
  camposValidos: ["nombre", "director", "año", "genero", "estado"],
  buscarPorNombre: function(nombre) {
   return this.lista.findIndex(pelicula => nombre === pelicula.nombre);   
  },
  agregar: function(nombre, director, año, genero, estado) {
      const pelicula = {
          nombre, 
          director, 
          año, 
          genero, 
          estado
      };
      this.lista.push(pelicula);
  },
  //misPeliculas.agregar();

  modificarEstado: function(nombre, estado) {
      const pepe = this.buscarPorNombre(nombre);
      this.lista[pepe].estado = estado;
  },
  //misPeliculas.modificarEstado(nombre,estado);

  removerPelicula: function(nombre) {
    const removerPelicula = this.buscarPorNombre(nombre); 
    if(removerPelicula === -1) throw new Error("La pelicula no esta en la lista.");
    this.lista.splice(removerPelicula, 1);
},
 //misPeliculas.removerPelicula(nombre de la pelicula);
  buscarPorEstado: function(estado) {
    const filtroPorEstado = this.lista.filter(pelicula => pelicula.estado === estado) // me hace un nuevo array con lo que le pido (en este caso estado)
    if (filtroPorEstado === -1) throw new Error("Pruebe con las opciones 'pendiente', 'viendo' o 'vista' ");
    console.log(filtroPorEstado) 
},
}
