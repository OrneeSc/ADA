//ejercicio
const lista = [4, 56, 3, 78, 6];
let numeroMayor = lista.reduce((guardar, element) => {
    if (guardar < element) {
    guardar = element}
    return guardar 
} ,0)

//////opcion mas facil

const lista = [4, 56, 3, 78, 6];
const valorMasGrande = (arr) => Math.max(...arr);
valorMasGrande(arr);
////////////////////////////////////////////////////////
//TAREA//
