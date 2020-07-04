/* Hacer un programa que nos permita 
 * cargar/modificar/borrar un catalogo de 
 * productos (deberían tener "id", como identificador 
 * único de número, por ej: 1, 2, 3.; título, descripción
 * de producto y precio (float)).
 */ 
 //EJERCICIO DE LA CLASE 43 PERO QUE SE RESOLVIÓ EN CLASE 44

 //1/CARGAR 
let catalogo = []; //se crea el array para ir metiendo adentro todos los objetos/productos

const agregarProducto = (id, titulo, descripcion, precio) => {  //por parametro le vamos a pasar lo que queremos agregar
    const producto = {
        id,
        titulo,
        descripcion,
        precio
    };

    catalogo.push(producto); //pusheamos al catalogo array vacío el objeto que estamos creando con la funcion
};

agregarProducto(1,"Lenceria","bombacha",250.50); //por ejemplo

/////////////////////////////////////////////////
//2/ BORRAR
const borrarProducto = id => {
const index = catalogo.findIndex(producto => id === producto.id);
catalogo.splice(index, 1);
};
borrarProducto(3);
console.log(catalogo);

/////////////otra opcion de borrar:

const borrarProducto = id => { catalogo = catalogo.filter(producto => producto.id !== id); };
/////////////////////////
//3//MODIFICAR

const modificarProducto = (id, campo, valor) => { //cuando invocamos la funcion, le pasamos el ID del producto que queremos modificar, en campo le pasariamos que propiedad de ese producto, por ejemplo, "título" y a valor le pasamos el nuevo valor que queremos para modificar "titulo".  Y ya está.
    const index = catalogo.findIndex(producto => id === producto.id);
    catalogo[index][campo] = valor; 
};
    //es lo mismo pero más abreviado que hacer esto:
    /*
        // catalogo[index] === producto
        catalogo[index].titulo = titulo;
        catalogo[index].descripcion = descripcion;
        catalogo[index].precio = precio;
    */
   // catalogo[index].campo = valor; // No va porque campo no es una propiedad del objeto


/////////////////////////////////////////////FIN RESUELTO///////////////////////////////

//////PERO TENEMOS OTRAS OPCIONES:
//OTRA FORMA DE NO REPETIR CODIGO ES HACER FUNCIONES y pegarlas las veces que la necesitemos ==>

const buscarPorId = id => catalogo.findIndex(producto => id === producto.id); 
// esta funcion de catalogo.findIndex la pegamos arriba varias veces, entonces en vez de poner todo esto, ponemos buscarPorID y listo se ejecuta esta función.

const validarId = id => { 
    const index = buscarPorId(id);
    if(index !== -1) throw new Error("El ID ya existe en el catalogo.");
}
//validamos si ya existe el producto en alguno de nuestros indices







const validarModificacion = (index, campo) => {
    const camposValidos = ["titulo", "descripcion", "precio"];
    if(index === -1) throw new Error("El ID seleccionado no existe.");
    if(camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    //if(!catalogo[index][campo]) throw new Error("El campo seleccionado no existe.");
}


/////////////////////////////////////////////////////////UN OBJETO CATÁLOGO, HECHO DE OTRA FORMA.

const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    validarId: function(id) {
        const index = this.buscarPorId(id);
        if(index !== -1) throw new Error("El ID ya existe en el catalogo.");
    },
    agregar: function(id, titulo, descripcion, precio) {
        this.validarId(id);
        const producto = {
            id,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
    },
    borrar = function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};

/////////////////////////////////////////////////////////////////////
const catalogo = {
    lista: [],
    camposValidos: ["titulo", "descripcion", "precio"],
    siguienteId: 1,
    buscarPorId: function(id) {
     return this.lista.findIndex(producto => id === producto.id);   
    },
    agregar: function(titulo, descripcion, precio) {
        const producto = {
            id: this.siguienteId,
            titulo,
            descripcion,
            precio
        };
        this.lista.push(producto);
        this.siguienteId++;
    },
    borrar: function(id) {
        this.lista = this.lista.filter(producto => producto.id !== id);
    },
    validarModificacion: function(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    },
    modificar: function(id, campo, valor) {
        const index = this.buscarPorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }
};


