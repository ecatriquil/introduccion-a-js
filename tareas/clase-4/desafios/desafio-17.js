// Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
let numero = 3765;

if (esPositivo(numero)) console.log(calcularSuma(numero));

else console.log('El numero ingresado es negativo, ingresar un entero positivo');

function esPositivo(numero) {
    if (numero > 0) return true
    else return false
}

function calcularSuma(numero) {
    let numeroUser = numero.toString();
    let sumaResultado = 0;
    for (let i = 0; i < numeroUser.length; i++) {
       sumaResultado += Number(numeroUser[i]);
    }
     return sumaResultado;
}

