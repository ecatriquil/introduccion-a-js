// Desafío de programación #13: Find the maximum number in an array of numbers
let vectorNumeros = [-10,-5,6,10,6,1,0];

function maximoNumero(vector) {
    let maximo = vector[0];
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > maximo) {
            maximo = vector[i];
        }
    }

    return maximo;
}

console.log(maximoNumero(vectorNumeros));
