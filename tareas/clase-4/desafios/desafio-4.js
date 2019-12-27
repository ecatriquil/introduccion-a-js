// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
function tablasDelUnoAlDiez() {
    let factor = 1;
    while (factor <= 10) {
        for (let i = 0; i <= 10; i++) {
            console.log(`${factor} x ${i} = ${factor * i}`);
        }
        factor++;
    }
}

tablasDelUnoAlDiez();