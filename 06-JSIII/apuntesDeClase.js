const array = [];
const numbers = [-2, 0, 1,2,3,4,5,6];
const names = "Jupiter", apellido = "Lopez";
console.log(names)

const data = [
    [0,1,2,3,4],
    "Natalia", 
    "Oscar", 
    true, 
    false, 
    {name:"Paola", edad: 23}
];


const data_2 = {name:"Paola", edad: 23}
// programación imperativa
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] != 0 && numbers[i] % 2 == 0){
        array.push(numbers[i])
    }
}

console.log(array);
console.log(apellido);


console.log(array.length);
console.log(names.length);

console.log(names);
console.log(names[2])

// dot notation --> .
// bracket notation [0]

console.log(data_2.name);

const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13, -89];
console.log(numeros[numeros.length -2]);


// Clase 29 abr 2025
// Búsqueda en array

function buscarNombre(names, target){
    for (let i = 0; i < names.length; i++){
        if(names[i] === target) {
            return `Econtrado en la posición número ${i}` 
        }
    }
    return "Target no encontrado."
};

console.log(buscarNombre(["Ana", "Juan", "Sofía"], "Sofi"))


// Modificación de elementos

const descuentos = (prices) => {
    const arr = [];
    //Aplicar 10% de descuento
    for(let idx=0; idx < prices.length; idx++){
        arr.push(prices[idx] *= 0.9);
    } 
    return arr;
};

console.log(descuentos([100, 200, 300]));

function discount(precios){
    // usando map()
    return precios.map(precio => precio *=  0.9); // x +=  1
}

console.log(discount([100, 200, 300]))


