/*
    Desafío de programación #27: Crear una función que reciba un array de números como argumento y 
    retorne un array con los elementos distintos
    Ejemplo:
    [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/

// Ordenar el vector de manera ascendente
// Eliminar repetidos

let arregloOriginal = [-1,3,-3,-1,0,4];
arregloOriginal.sort((a,b) => {return a - b})
console.log(arregloOriginal);

// ordenar(arregloOriginal);

// function ordenar(vector) {
//     let aux = 0;
//     for (let i = 0; i < vector.length-1; i++) {
//         for (let j = 0; j < vector.length-i; j++) {
//             if (vector[j] > vector[j+1]) {
//                 aux = vector[j];
//                 vector[j] = vector[j+1];
//                 vector[j+1] = aux;
//             }
            
//         }
//     }
//     return vector;
// }


function eliminaRepetidos(vector) {
    
}
