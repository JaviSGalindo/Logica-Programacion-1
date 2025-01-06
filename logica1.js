// Practica de Logica de Programacion

const prompt = require('prompt-sync')();
let numbers = [];

// Ingresa los numeros al array numbers
for (let i=0; i<3; i++){
    numbers [i] = Number(prompt(`Escribe el numero ${i+1}: `));
    if(isNaN(numbers[i])){
        console.log(`No es numero valido. Intentalo nuevamente.`);
        i--;
    }
}
// Verifica si hay numeros iguales
if (numbers[0] == numbers[1] && numbers[0] == numbers[2]){
    console.log(`Los tres numeros son iguales. Tu numero es el ${numbers[0]}`);
}
else{
    for (let i=0; i<numbers.length; i++){
        for (let j = i+1; j<numbers.length; j++){
            if (numbers[i] == numbers[j]) {
                console.log(`El número ${numbers[i]} es el mismo en la posición ${i + 1} y ${j + 1}.`);
            }
        }
    }
    // Ordena numeros de mayor a menor
    let mayorAMenor = numbers.sort(function(a, b){return b - a});
    console.log(`Arreglo ordenado de mayor a menor:\n  ${mayorAMenor}`);
    
    let menorAMayor = numbers.sort(function(a, b){return a - b});
    console.log(`Arreglo ordenado de menor a mayor:\n  ${menorAMayor}`);
}
