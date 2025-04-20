let libros ;
console.log(libros);
console.log(typeof libros)

libros = "Poesia";
console.log(libros);
console.log(typeof libros)

let autores = ["Gabo", "Fernando Soto Aparicio", "Jorge Isaacs", "Ernest Heminway", "Daniel Defoe", "Julio Verne"];

let numeroTelefono = null;


function valores (number) {
    // if(number){
    //     console.log("verdadero");        
    // } else {
    //     console.log("falso")
    // }
    if(number) return "verdadero";
    else return "false";
};

console.log(valores([]));

let edad;
console.log(edad);

edad = 25;
console.log(edad);

// console.log(altura);


function imprimirLista(lista){
    if(lista && lista.length){
        return lista;
    } else {
        return "Lista no válida"
    }
};

const lista = [0];
console.log(lista.length);

console.log(imprimirLista(lista))



let num = 2;
let num_1 = "2";
console.log(num_1 == num);

// == lost equal
// === strict equal
console.log(num_1 === num)  ;


function validarEdad(edad){
    const resultado = typeof edad === "number" && edad >= 18;
    if(resultado){
        return typeof edad;
    } else {
        return typeof edad;
    }
};

console.log(validarEdad(parseInt("21")));



let age = 12;
let age_1 = "12";
console.log(typeof age);
console.log(typeof age_1)