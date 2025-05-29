const { sumarPares, capitalizarPalabras } = require('../09-Simulacro/ejercicios');


test('Suma los números pares del arreglo', () => {
  expect(sumarPares([1, 2, 3, 4, 5, 6])).toBe(12);
  expect(sumarPares([1, 3, 5])).toBe(0);
  expect(sumarPares([])).toBe(0);
  expect(sumarPares([2, 4, 6, 8])).toBe(20);
});


test('Capitaliza las palabras en la frase', () => {
  expect(capitalizarPalabras("hola mundo")).toBe("Hola Mundo");
  expect(capitalizarPalabras("javascript es genial")).toBe("Javascript Es Genial");
  expect(capitalizarPalabras("")).toBe("");
  expect(capitalizarPalabras("una prueba más")).toBe("Una Prueba Más");
});