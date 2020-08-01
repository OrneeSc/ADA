class Producto {    
    constructor(id, titulo, descripcion, precio) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Catalogo {
    lista = [];
    camposValidos = ["titulo", "descripcion", "precio"];
    siguienteId = 1;

    constructor(nombre) {
        this.nombre = nombre;
    }
    
    agregar(titulo,descripcion,precio) {
        const nuevo_producto  =  new Producto(this.siguienteId,titulo,descripcion,precio); 
        this.lista.push(nuevo_producto);
        this.siguienteId++;
    }  
    
    buscarIndicePorId(id) { 
        return this.lista.findIndex(producto => id === producto.id);
    } 

    buscarProductoPorId(id) {
        return this.lista.find(producto => id === producto.id); // Funciona, me devuelve el producto
        //return this.lista.filter(producto => id === producto.id); // Filter me devuelve una array
    }
    borrarProducto(id){
        this.lista = this.lista.filter(producto => id !== producto.id);
    }

    validarModificacion(index, campo) {
        if(index === -1) throw new Error("El ID seleccionado no existe.");
        if(this.camposValidos.indexOf(campo) === -1) throw new Error("El campo seleccionado no es valido."); 
    }

    modificarProducto(id, campo, valor) {
        const index = this.buscarIndicePorId(id);
        this.validarModificacion(index, campo);
        this.lista[index][campo] = valor; 
    }

}
//catalogo --> lista [prod1, prod2, prod3]

class Carrito{
    listaCarrito = [];
    nextId = 1
    buscarIDdeCatalogo(catalogoId) {
        return this.listaCarrito.findIndex(producto => producto.catalogoId === catalogoId);
    }
    agregar(catalogo, catalogoId, cantidad) {
        if(!(catalogo instanceof Catalogo)) throw new Error (`El catalogo no es un Catalogo`);
        const catalogoIndex = catalogo.buscarIndicePorId(catalogoId);
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe en el catálogo.");
        const carritoIndex = this.buscarIDdeCatalogo(catalogoId)
        if (carritoIndex === -1) {
            const producto = {
                ...catalogo.lista[catalogoIndex],
                id: this.nextId,
                catalogoId,
                cantidad
            }
            this.listaCarrito.push(producto);
            this.nextId++;
        } else {
            this.listaCarrito[carritoIndex].cantidad += cantidad;
        }
    }
}
