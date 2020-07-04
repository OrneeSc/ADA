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

///TEST
beforeEach(() =>{
    catalogo.lista = [];
    catalogo.siguienteId = 1;
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
    //expect(catalogo.lista.length).toEqual(2);
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