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
console.log(typeof age_1);

// "21 de abril" clase flujos de control
const hora = new Date().getHours();

console.log(hora);

function hours(hora) {
    if(hora < 12) {
        return "Buenos días ☀"
    } else if(hora < 18){
        return "Buenas tardes 🌥"
    } else {
        return "Buenas noches 🌙";
    }        
};

console.log(hours());


// operador ternario
const times = new Date().getHours();

function horario(times){
    return times < 12 ? "Buenos días ☀" : times < 18 ? "Buenas tardes 🌥" : "Buenas noches 🌙";
};

console.log(horario());



let nombre = null; 
let edad_ = null;
let year = 2025

function saludar(nombre, edad_){
    if(nombre) console.log("Hola " + nombre);
    if(edad_ == null) console.log("En que año naciste?");
    let evaluar = year - edad_;
    if(evaluar < 18) console.log("No puedes votar")
        return "Eres mayor de edad y puedes ejercer el voto"
};

console.log(saludar("Andrés", 2003));