// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
function imprimeImpares() {
    for (let i = 1; i < 100; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

imprimeImpares();