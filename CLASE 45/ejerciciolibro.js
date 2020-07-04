/*************************************************
 * Crear un objeto que sea un libro, con todos 
 * sus detalles (nombre, autor, año, isbn). Ademas
 * de esto, deberá tener una lista de reviews, y cada
 * review deberá tener un formato de 
 * {nombre, review, valoracion(entre 1 y 5)}.
 * 
 * Deberemos crear una funcion para promediar esta 
 * valoracion. 
 * Tambien, tendremos que crear un getter para 
 * obtener el nombre, el autor y el isbn juntos 
 * en un formato legible (libro [por] autor - isbn).
 * Por último tendremos que crear una funcion que nos
 * permita agregar nuevas reviews al libro.
 */


const libro = {
    nombre: "100 años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    isbn: 333444555,
    reviews: [
        {
            nombre: "Pato" ,
            review: "Este libro es una porquería me perdi con los personajes",
            valoracion: 3,
        },
        {
           nombre: "Mery",
           review: "Por favor por que tenía que repetir los nombres así, manga de endogámicos",
           valoracion: 1,
       },
       {
           nombre: "Aylu",
           review: "No lo leí y por las reviews no lo pienso leer",
           valoracion: 2,
       }
    ],

    promediar: function() {
            const sumaDeValoraciones = this.reviews.reduce((acumulador, review) => acumulador + review.valoracion, 0);
            const promedio = sumaDeValoraciones / this.reviews.length;
            return(promedio);
   },
 
    get datosLibro() {
        return `Esta obra es ${this.nombre}, su autor es ${this.autor}, fue editado en el año ${this.anio}, y su ISBN es ${this.isbn}
        `;
    },
    addReview: function(nombre, review, valoracion) {
        const newReview = {
            nombre,
            review,
            valoracion
        };
        this.reviews.push(newReview);
    }
}    
