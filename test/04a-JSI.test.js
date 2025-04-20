// No modificar nada en este archivo

const {
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
} = require("../04a-JSI/04a-JSI");

// Ejercicio 1
test("operar: suma con prioridad de operadores", () => {
  expect(operar(2, 3)).toBe(8); // 2 + (3*2)
});

// Ejercicio 2
test("saludar: saludo con nombre", () => {
  expect(saludar("Rick")).toBe("Hola Rick");
});

// Ejercicio 3
test("verificarEdad: mayor o menor de edad", () => {
  expect(verificarEdad(20)).toBe("Mayor de edad");
  expect(verificarEdad(17)).toBe("Menor de edad");
});

// Ejercicio 4
test("calcularEdad: edad en 2025", () => {
  expect(calcularEdad(2000)).toBe(25);
});

// Ejercicio 5
test("doble: calcular doble de un número", () => {
  expect(doble(4)).toBe(8);
});

// Ejercicio 6
test("esPar: verificar si un número es par", () => {
  expect(esPar(6)).toBe("Es par");
  expect(esPar(3)).toBe("No es par");
});

test("cuadrado: calcular cuadrado de un número", () => {
  expect(cuadrado(5)).toBe(25);
});

test("sumarDosMayores: suma de los dos mayores", () => {
  expect(sumarDosMayores(1, 5, 3)).toBe(8);
});

test("obtenerMayor: retornar el mayor", () => {
  expect(obtenerMayor(9, 4)).toBe(9);
});

test("sumarSiPositivos: suma si ambos positivos", () => {
  expect(sumarSiPositivos(2, 3)).toBe(5);
  expect(sumarSiPositivos(-1, 3)).toBe("Números inválidos");
});

test("promedio: calcular promedio", () => {
  expect(promedio(3, 5)).toBe(4);
});

test("puedeVotar: verificar si puede votar", () => {
  expect(puedeVotar(18)).toBe("Puede votar");
  expect(puedeVotar(16)).toBe("No puede votar");
});

test("verificarPalabra: validar si es javascript", () => {
  expect(verificarPalabra("javascript")).toBe("Correcto");
  expect(verificarPalabra("java")).toBe("Incorrecto");
});

test("convertirACelsius: convertir a Fahrenheit", () => {
  expect(convertirACelsius(0)).toBe(32);
});

test("areaTriangulo: calcular área de un triángulo", () => {
  expect(areaTriangulo(10, 4)).toBe(20);
});

test("esNegativo: verificar si un número es negativo", () => {
  expect(esNegativo(-3)).toBe("Negativo");
  expect(esNegativo(2)).toBe("No es negativo");
});

test("calcularIVA: 19% de un valor", () => {
  expect(calcularIVA(1000)).toBe(190);
});

test("esMultiploDeCinco: verificar múltiplo de 5", () => {
  expect(esMultiploDeCinco(15)).toBe("Sí");
  expect(esMultiploDeCinco(7)).toBe("No");
});

test("nombreCompleto: concatenar nombre y apellido", () => {
  expect(nombreCompleto("Rick", "Sánchez")).toBe("Rick Sánchez");
});

test("aplicarDescuento: calcular 10% de descuento", () => {
  expect(aplicarDescuento(100)).toBe(90);
});
