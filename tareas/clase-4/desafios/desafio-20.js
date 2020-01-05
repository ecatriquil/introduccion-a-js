/*Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
  */
let arrayPrueba = [5];

function rotarArrayIzquierda(arrayPrueba) {
    let primerElemento = 0;

    primerElemento = arrayPrueba.shift();
    arrayPrueba.push(primerElemento);
    return arrayPrueba
}
console.log(rotarArrayIzquierda(arrayPrueba));
