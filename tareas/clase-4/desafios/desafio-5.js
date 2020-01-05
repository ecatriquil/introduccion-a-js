// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
const vector = [1,2,3,4,5,6,7,8,9,10];
let total = 0;

for (let i = 0; i < vector.length; i++) {
    total += vector[i];
}

console.log(total);
