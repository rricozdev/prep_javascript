const { sumar, esPositivo, unirNombres, areaCuadrado, esMayorEdad } = require("../04-JSI/Practicas/00-JSI");

// sumar.test.js

test('Suma 2 + 3 igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});


// positivo.test.js

test('5 es positivo', () => {
  expect(esPositivo(5)).toBe(true);
});

test('-2 no es positivo', () => {
  expect(esPositivo(-2)).toBe(false);
});

// nombres.test.js

test('Une "Ana" y "Pérez" correctamente', () => {
  expect(unirNombres("Ana", "Pérez")).toBe("Ana Pérez");
});

// area.test.js

test('Área de cuadrado lado 4 es 16', () => {
  expect(areaCuadrado(4)).toBe(16);
});




// edad.test.js

test('20 años es mayor de edad', () => {
  expect(esMayorEdad(20)).toBe(true);
});

test('15 años no es mayor de edad', () => {
  expect(esMayorEdad(15)).toBe(false);
});