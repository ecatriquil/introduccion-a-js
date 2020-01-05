/*
    Desafío de programación #26: Crear una función que reciba dos arrays de números y 
    retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
    Nota; Esto se llama "resta" entre conjuntos
    Ejemplo:
    [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

let arreglo1 = [5,1,2,3,4];
let arreglo2 = [3,4];

console.log(restaDeConjuntos(arreglo1,arreglo2));


function restaDeConjuntos(a1,a2) {
    let arregloFinal = [];
    for (let e of a1) {
        if (!a2.includes(e)) {
            arregloFinal.push(e);
        }
    }

    return arregloFinal;
}