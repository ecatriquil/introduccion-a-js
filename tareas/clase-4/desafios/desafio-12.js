// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
let vectorNumeros = [-1, 3, 10, -5, 8, 5];

function filtraPositivos(vectorNumeros) {
    let vectorPositivos = [];
    for (let i = 0; i < vectorNumeros.length; i++) {
        if (vectorNumeros[i] > 0) {
            vectorPositivos.push(vectorNumeros[i]);
        }
    }
    return vectorPositivos;
}

console.log(filtraPositivos(vectorNumeros));
