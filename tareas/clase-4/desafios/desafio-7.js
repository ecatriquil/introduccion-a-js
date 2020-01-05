// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

function esImpar(n) {
    if (n % 2 != 0) return true;
}

function sumaImpares(minimo,maximo) {
    let total = 0;
    minimo++;
    while(minimo < maximo){
        if (esImpar(minimo)) {
            total+= minimo;
        }
        minimo++;
    }
    return total;
}

console.log(sumaImpares(10,30));
