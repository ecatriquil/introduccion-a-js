/*
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/

let arreglo1 = [1,2,3];
let arreglo2 = ['a','b','c'];

function mezclarArreglos (a1,a2) {
    let arregloFinal = [];

    for (const i of a1) {
        arregloFinal.push(i);
    }

    for (const i of a2) {
        arregloFinal.push(i);
    }

    return arregloFinal;
}

console.log(mezclarArreglos(arreglo1,arreglo2));
