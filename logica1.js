// Practica de Logica de Programacion
// Para organizar de mayor a menor no voy a emplear el algoritmo de sort
const prompt = require('prompt-sync')();
let numbers = [];
let mayor = 0, pos;
// Ingresa los numeros al array numbers
for (let i=0; i<3; i++){
    numbers [i] = Number(prompt(`Escribe el numero ${i+1}: `));
}
// Verifica si hay numeros iguales 
for (let i=0; i<3; i++){
    let j = i+1;
    if(numbers[i]==numbers[j]){
        console.log(`El numero ${numbers[i]} es el mismo en la posicion ${i+1} y ${j+1}.`);
        
    }
    else if (j==1 && numbers[i]==numbers[j+1]){
        console.log(`El numero ${numbers[i]} es el mismo en la posicion ${j} y ${j+2}.`);
    }
}
// Verifica el numero mayor y su posicion en el arreglo
for (let i=0; i<3; i++){
    if(numbers[i]>mayor){
        mayor = numbers[i];
        pos = i;
    }
}
// Se posiciona el numero mayor en la posicion 0 del array
numbers.splice(pos,1);
numbers.unshift(mayor)
let i = 1;
let j = i+1;
// Ordena los dos elementos restantes del array
if (numbers[i]<numbers[j]){
    let temp = numbers[i]
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

console.log(`Arreglo ordenado de mayor a menor:\n  ${numbers}`);
numbers.reverse();
console.log(`Arreglo ordenado de menor a mayor:\n  ${numbers}`);