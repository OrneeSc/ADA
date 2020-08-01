// 4
 class Producto {    
    constructor(id, titulo, marca, precio) {
        this.id = id;
        this.titulo = titulo; 
        this.marca = marca;
        this.precio = precio;
    }
    static get ProductosTypes() {
        return {
            Perfumes: 1,
            Chocolates: 2,
            Auriculares: 3
        };
    };
};
class Perfumes extends Producto {
    constructor(id, marca, precio, genero, tamaño) {
        super(id, "Perfume", marca, precio);
        this.genero = genero;
        this.tamaño = tamaño;
    };
};
class Chocolates extends Producto {
    constructor(id, marca, precio, porcentaje, tipo) {
        super(id, "Chocolate", marca, precio);
        this.porcentaje = porcentaje;
        this.leche = false;
        this.tipo = tipo;
        this.extras = [];
    };
    agregarExtras(ingredienteExtra) {
        this.extras.push(ingredienteExtra);
        console.log("Seguro?.. okay, sobre gustos");
    };
};
class Auriculares extends Producto {
    constructor(id, marca, precio, color) {
        super(id, "Auriculares", marca, precio);
        this.wireless = true; 
        this.color = color;
        this.microfono = false;
    };
    comprarConMic() {
        this.microfono = true;
        console.log("Se le agrego microfono");
    };
    comprarSinWireless() {
    this.wireless = false;
    console.log("Eligió auriculares no-wireless");
    };
};

/* Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.   ??????????'*/

class Catalogo {
    lista = [];
    //camposValidos = ["titulo", "marca", "precio"]; y estoooo
    siguienteId = 1;
    

    constructor(nombre) {
        this.nombre = nombre;
    };
    
    agregar(productoType, marca, precio, genero = null, tamaño = null, porcentaje = null, tipo = null, color = null) { //es raro
        switch(productoType) {
            case Producto.ProductosTypes.Perfumes:
                const perfumito  =  new Perfumes (this.siguienteId, marca, precio, genero, tamaño); 
                this.lista.push(perfumito);
                this.siguienteId++;
                break;

            case Producto.ProductosTypes.Chocolates: 
                const chocolatito  =  new Chocolate(this.siguienteId, marca, precio, porcentaje, tipo); 
                this.lista.push(chocolatito);
                this.siguienteId++;
                break;
            
            case Producto.ProductosTypes.Auriculares:
                const auris  =  new Auriculares(this.siguienteId, marca, precio, color); 
                this.lista.push(auris);
                this.siguienteId++;
                break;
        };
    };
    buscarEnCatalogo(marca) { //grupo de Mari
        return this.lista.findIndex(listaDeProductos => listaDeProductos.marca === marca);
    };
    agregarDescuento(marca, porcentaje) { //grupo de Mari
        const porcent = this.buscarEnCatalogo(marca);
        const porcentajeEnDecimal = porcentaje / 100;
        const descuento = this.listaCatalogo[porcent].precio * porcentajeEnDecimal;
        this.lista[porcent].precio -= descuento;
    };
    mostrar() { //grupo de Mari
        this.lista.forEach(producto => {
            if(producto instanceof Chocolate) {
                console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}. Otras características: ${producto.porcentaje}%, ${producto.tipo}, ${producto.extras}`);
            } else if(producto instanceof Perfume) {
                console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}.`);
            } else if(producto instanceof Auriculares) {
                console.log(`Producto: ${producto.marca}. Precio: $${producto.precio}.`);
            } else {
                console.log("Instancia inválida.")
            };
        });    
    };
};
 /* Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 *
 /* 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */

class Carrito extends Catalogo { // grupo de MARI
    listaCarrito = [];
    nextId = 1;
    buscarEnCarrito(marca) {
        return this.listaCarrito.findIndex(lista => lista.marca === marca);
    }
    agregar(marca, cantidad) {
        const catalogoIndex = super.buscarEnCatalogo(marca)
        if(catalogoIndex === -1) throw new Error("El elemento solicitado no existe.");
        const carritoIndex = this.buscarEnCarrito(marca);
        if(carritoIndex === -1) {
            const obj = {
                ...this.listaCatalogo[catalogoIndex],
                id: this.nextId,
                cantidad,
            };
            this.listaCarrito.push(obj);
            this.nextId++;
        } else {
            this.listaCarrito[carritoIndex].cantidad += cantidad;
        };
    };
};


/*
const carrito = new Carrito();
carrito.crear(Catalogo.tipoProductos.chocolate, "savoy", 100, "50%", "en polvo", "mani");
carrito.crear(Catalogo.tipoProductos.chocolate, "samba", 250, "90%", "en barra", "galleta");
carrito.crear(Catalogo.tipoProductos.perfume, "tommy", 1500);
carrito.crear(Catalogo.tipoProductos.auriculares, "JBL", 650);
carrito.crear(Catalogo.tipoProductos.perfume, "paris", 1800);
carrito.crear(Catalogo.tipoProductos.chocolate, "rikiti", 90, "50%", "en barra", "galleta");
carrito.crear(Catalogo.tipoProductos.auriculares, "apple", 650);
carrito.mostrar();
carrito.agregarDescuento("tommy", 50);
carrito.agregar("JBL", 10);
*/

 