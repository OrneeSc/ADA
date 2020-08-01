// PASAR EL SIGUIENTE CODIGO YA RESUELTO A TEST
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

///TEST///////////////////////

//1
describe("Testeando catalogo", () => {
    beforeEach(() =>{
        catalogo.lista = []; //cada vez que hace una nueva iteracion en cada test vuelve a recetearse
        catalogo.siguienteId = 1; // vuelve a el id 1.
        catalogo.agregar("jabon", "cremoso", "50"); 
        catalogo.agregar("shampoo", "control caida", "125");
    });
    
    test("Probar si funciona agregar producto", () => {
        expect(catalogo.lista[0]).toEqual({
            id: 1,
            titulo: "jabon",
            descripcion: "cremoso",
            precio: "50"
        });
    });
    
    test("Probando si funciona borrar", () => {
        catalogo.borrar(1);
        expect(catalogo.lista.length).toBe(1);
    });
    
    test("Probando modificar por id", () => {
        catalogo.modificar(2, "precio", "25");
        expect(catalogo.lista[1]).toEqual({
            id: 2,
            titulo: "shampoo",
            descripcion: "control caida",
            precio: "25"
            });
        });
    }); 
//2
describe("Probando si borra del carrito", ()=> {
    beforeEach (() => {
        carrito.lista = [];
        carrito.nextId = 1;
        carrito.agregar(1, 1);
        carrito.agregar(2, 1);
    });
    
    test("Probando si funciona borrar del carrito", () => {
        carrito.borrar(1);
        expect(carrito.lista.length).toBe(1);
    });
    });
    
    describe("Testeamos funcion agregar", () => {
        beforeEach (() => {
            catalogo.lista = []; 
            catalogo.siguienteId = 1;
            catalogo.agregar("jabon", "cremoso", "50");
            catalogo.agregar("shampoo", "control caida", "125");
            carrito.lista = [];
            carrito.nextId = 1;
            carrito.agregar(1, 1);
            carrito.agregar(2, 1);
        });
        test("agrego productos 1 y 2 y lista tiene que dar dos, me devuelve dos elementos", () => {
            expect(carrito.lista.length).toBe(2);
        });
        test("pruebo si funciona nextId", () => {
            catalogo.agregar("aceitunas", "negras", "80");
            carrito.agregar(3, 2);
            expect(carrito.nextId).toBe(4);
        })
        test("pruebo si me agrega bien el producto", () => {
            expect(carrito.lista[1]).toEqual({
                titulo: "shampoo", 
                descripcion: "control caida",
                precio: "125",
                id: 2, // es el nuevo Id del carrito
                catalogoId: 2,
                cantidad: 1
            })
        })
    }); 
    

//////////////////////////////
