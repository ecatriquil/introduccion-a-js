// Desafío de programación #6: Calcula 10! (10 factorial)
function factorial(n) {
    let total = 1;
    while (n > 0) {
        total *= n;
        n--;
    }
    return total;
}

console.log(factorial(10));
