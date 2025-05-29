const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

function esPrimo (num) {
    if(num < 2) return false;
    for(let idx = 2; idx < num; idx ++ ){
        if(num % idx === 0) return false;
    }
    return true;    
} // false or true
// pilas y colas --> stack and quee
console.log(esPrimo())

for (let idx = 0; idx < numeros.length; idx++) {
    if(esPrimo(numeros[idx])){
        console.log(`${numeros[idx]} es primo`)
    }
};

// métodos filter() 
const primos = numeros.filter((numero) => {
    return esPrimo(numero)
});

console.log(primos);


// forEach();

// map()
const resultados = numeros.map( number => {
    return esPrimo(number)
});


console.log(resultados)

















// function mostrarNumerosPrimos(numbers){
//     const numerosPrimos = []
//     for(let idx=0; idx < numbers.lenght; idx++){
//         //lógica

//     }
//     return numerosPrimos;
// };


// console.log(mostrarNumerosPrimos([0,1,2,3,4,5,6,7,8,9,10,11,12]));

 

// map(); --> me devuelve un nuevo array

// 1 / 1 --> 1



function numerosMayoresADos(numeros) {
    console.log(numeros)
    const array = [];
    for(let idx=0; idx < numeros.length; idx++){
        console.log(numeros[idx])      
        if(numeros[idx] > 2){            
            array.push(numeros[idx])
        } 
    }
    if(array.length != 0) return array;
    else return "No hay números mayores a 2"
}

// si el numero es > 2 empujalo al array vacío
// false
// sino --> return no hay numeros  mayores a 2

console.log(numerosMayoresADos([0,1,2,4,3]));

// FIFO --> First In First Out --> Primero en entrar es el primero en salir;

// array.pop();

// pop corn