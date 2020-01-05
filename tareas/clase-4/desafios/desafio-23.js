/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/

let cadena = reverseString("bienvenido");
console.log(cadena);

function reverseString(cadena)
{
    let cadena2 = "";
    
    for(let i = cadena.length - 1; i >= 0; i--)
    {
        let letra = cadena[i];
        cadena2 += letra;
    }
    
    return cadena2;
}
