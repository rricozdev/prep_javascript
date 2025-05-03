// Este ejercicio demuestra cómo usar el método .forEach() para recorrer un array e imprimir cada uno de sus elementos por consola. Se utiliza una función flecha mostrarFrutas() que ejecuta la acción sobre cada fruta.


// Definimos un array con nombres de frutas
const frutas = ["Manzana", "Peras", "Naranjas", "Bananos", "Patilla"];

// Función que recorre el array y muestra cada fruta en la consola
const mostrarFrutas = () => {
    // Usamos el método forEach() para ejecutar una acción por cada elemento del array
    frutas.forEach(fruta => {
        console.log(fruta); // Imprime la fruta actual
    });
};

// Llamamos a la función para que se ejecuten los console.log
mostrarFrutas();

// Nota: forEach() no retorna ningún valor, por eso la función mostrarFrutas() tampoco retorna nada.
// Si hacemos console.log(mostrarFrutas()), imprimirá 'undefined' después de mostrar las frutas.
