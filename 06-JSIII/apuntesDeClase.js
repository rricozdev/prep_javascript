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
console.log(numeros[numeros.length -2])