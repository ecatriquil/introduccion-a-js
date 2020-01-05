/*
    Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y
    retorne un array con números que estén en uno u otro array, pero NO en ambos.
    Ejemplo:
    [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
    [5,10,3] y [10,1] debería quedar como [5,3,1]
*/

let arreglo1 = [1,2,3];
let arreglo2 = [1,3,4,5,6];

console.log(mezclaExclusiva(arreglo1,arreglo2));


function mezclaExclusiva(a1,a2) {
    let arregloMezclado = [];

    for (let e of a1) {
        if (!a2.includes(e)) {
          arregloMezclado.push(e)  
        }
    }

    for (let e of a2) {
        if (!a1.includes(e)) {
          arregloMezclado.push(e)  
        }
    }

    return arregloMezclado;
}