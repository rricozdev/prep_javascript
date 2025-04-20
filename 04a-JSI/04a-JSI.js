// Ejercicio 1: Sumar con prioridad de operadores
// Declara una función que reciba dos números y retorne el resultado de a + b * 2.

function operar() {
  // Tu código aquí
}

// Ejercicio 2: Saludar con nombre
// Declara una función que reciba un nombre y retorne el saludo "Hola " más el nombre recibido.
function saludar() {
  // Tu código aquí
}

// Ejercicio 3: Verificar mayoría de edad
// Declara una función que reciba una edad. Si es mayor o igual a 18, retorna "Mayor de edad", si no, retorna "Menor de edad".
function verificarEdad(edad) {
    // Tu código aquí
    if (edad >= 18) {
      return "Mayor de edad"
    } else {
      return "Menor de edad"
    }
    // if(edad >=18) return "Mayor de edad"
    // else return "Menor de edad"

    // return edad >= 18 ? "Mayor de edad" : "Menor de edad";
}

console.log(verificarEdad(18));

// Ejercicio 4: Calcular edad
// Declara una función que reciba el año de nacimiento y retorne la edad actual (usa 2025 como año actual).
function calcularEdad() {
    // Tu código aquí
}

// Ejercicio 5: Calcular doble
// Declara una función que reciba un número y retorne su doble.
function doble(numero) {
  // Tu código aquí

}

// Ejercicio 6: Verificar si un número es par
// Declara una función que reciba un número. Si es par, retorna "Es par", si no, retorna "No es par".
function esPar(numero) {
  // Tu código aquí

}

// Ejercicio 7: Calcular el cuadrado
// Declara una función que reciba un número y retorne su cuadrado.
function cuadrado(numero) {
  // Tu código aquí

}

// Ejercicio 8: Sumar los dos mayores
// Declara una función que reciba tres números y retorne la suma de los dos mayores.
function sumarDosMayores(a, b, c) {
  // Tu código aquí

}

// Ejercicio 9: Obtener el número mayor
// Declara una función que reciba dos números y retorne el mayor.
function obtenerMayor(a, b) {
  // Tu código aquí

}

// Ejercicio 10: Sumar solo si son positivos
// Declara una función que reciba dos números. Si ambos son mayores que 0, retorna su suma. Si no, retorna "Números inválidos".
function sumarSiPositivos(a, b) {
  // Tu código aquí

}

// Ejercicio 11: Calcular promedio de dos notas
// Declara una función que reciba dos notas y retorne su promedio.
function promedio(nota1, nota2) {
  // Tu código aquí

}

// Ejercicio 12: Determinar si una persona puede votar
// Declara una función que reciba una edad. Si es mayor o igual a 18, retorna "Puede votar", si no, retorna "No puede votar".
function puedeVotar(edad) {
  // Tu código aquí

}

// Ejercicio 13: Verificar si una palabra es "javascript"
// Declara una función que reciba una palabra. Si es "javascript", retorna "Correcto", si no, retorna "Incorrecto".
function verificarPalabra(palabra) {
  // Tu código aquí

}

// Ejercicio 14: Convertir grados Celsius a Fahrenheit
// Declara una función que reciba grados Celsius y retorne su equivalente en Fahrenheit.
function convertirACelsius(grados) {
  // Tu código aquí

}

// Ejercicio 15: Calcular área de un triángulo
// Declara una función que reciba base y altura, y retorne el área del triángulo.
function areaTriangulo(base, altura) {
  // Tu código aquí

}

// Ejercicio 16: Verificar si un número es negativo
// Declara una función que reciba un número. Si es negativo, retorna "Negativo", si no, retorna "No es negativo".
function esNegativo(numero) {
  // Tu código aquí

}

// Ejercicio 17: Calcular el IVA del 19%
// Declara una función que reciba un valor y retorne el IVA correspondiente (19%).
function calcularIVA(valor) {
  // Tu código aquí

}

// Ejercicio 18: Verificar si un número es múltiplo de 5
// Declara una función que reciba un número. Si es múltiplo de 5, retorna "Sí", si no, retorna "No".
function esMultiploDeCinco(numero) {
  // Tu código aquí

}

// Ejercicio 19: Concatenar nombre y apellido
// Declara una función que reciba un nombre y un apellido, y retorne el nombre completo.
function nombreCompleto(nombre, apellido) {
  // Tu código aquí

}

// Ejercicio 20: Calcular descuento del 10%
// Declara una función que reciba un precio y retorne el precio con 10% de descuento.
function aplicarDescuento(precio) {
  // Tu código aquí
  
}

// No modificar nada debajo de esta línea.

module.exports = {
  operar,
  saludar,
  verificarEdad,
  calcularEdad,
  doble,
  esPar,
  cuadrado,
  sumarDosMayores,
  obtenerMayor,
  sumarSiPositivos,
  promedio,
  puedeVotar,
  verificarPalabra,
  convertirACelsius,
  areaTriangulo,
  esNegativo,
  calcularIVA,
  esMultiploDeCinco,
  nombreCompleto,
  aplicarDescuento,
};
