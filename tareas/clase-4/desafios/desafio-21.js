/*Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
  */

let arrayUser = [2, 3, 4, 1];

function rotarArrayDerecha(arrayUser) {
    let ultimoElemento = 0;
    ultimoElemento = arrayUser.pop();
    arrayUser.unshift(ultimoElemento);

    return arrayUser
}

console.log(rotarArrayDerecha(arrayUser));

