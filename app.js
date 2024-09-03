//Arreglos

let frutas = ['mango', 'fresa', 'sandía', 'mandarina'];

console.log(frutas);
console.log(frutas.length);

/*
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
*/

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for(let fruta of frutas){
    console.log(fruta + "mejorado");
}