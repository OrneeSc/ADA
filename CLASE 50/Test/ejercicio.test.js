// Desarrollar una función que convierta de minutos a segundos. Pasar minutos por parámetro y devolver los segundos. 
//Hacer tests con numeros fijos (Siempre el mismo numero deberia dar el mismo resultado). Recordar tirar errores y testearlos.

const minutosASegundos = (number) => {
    if (typeof number !== "number") throw new Error ("No es un Number");
    return number * 60;
};

test('convierte minutos a segundos', () =>{
    expect(minutosASegundos(1)).toBe(60);
});

test('convierte minutos a segundos', () =>{
    expect(minutosASegundos(2)).toBe(120);
});

test('Tira error si esta mal convertido', ()=>{
    expect(() => minutosASegundos("hola")).toThrow("No es un Number"); //funciona con una funcion a ejecutar
});