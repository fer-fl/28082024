let num1 = parseInt(prompt("Ingresa el primer numero:"));
let num2 = parseInt(prompt("Ingresa el segundo numero:"));

function sum(num1, num2){
    return num1 + num2;
}

console.log("La suma de " + num1 + " y " + num2 + " es igual a: " + sum(num1, num2));