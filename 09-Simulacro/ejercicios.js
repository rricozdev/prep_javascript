// ## ✅ **Ejercicio 1: Suma de números pares**

// ### 📌 Enunciado:

// Crea una función que reciba un arreglo de números y retorne la suma de todos los números pares. Si no hay pares, debe retornar 0.

function sumarPares(arr) {
  //lógica
  const resultado = arr.filter((numero) => numero % 2 === 0);
  let acc = 0;
  for (let idx = 0; idx < resultado.length; idx++) {
    acc += resultado[idx];
  }
  return acc;
}

// utilizar el método reduce()
// console.log(sumarPares([1, 2, 3, 4, 5, 6]))

// ## ✅ **Ejercicio 2: Capitalizar palabras**

// ### 📌 Enunciado:

// Crea una función que reciba una cadena de texto y retorne la misma cadena pero con la primera letra de cada palabra en mayúscula.

function capitalizarPalabras(frase) {
  // lógica
}

// code review

// No tocar nada debajo de esta línea

module.exports = {
  sumarPares,
  capitalizarPalabras,
};
