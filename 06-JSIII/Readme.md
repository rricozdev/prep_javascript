# JavaScript III: Arrays y Bucles `for`

## Introducción a los Arrays (Arreglos)

Los arrays son estructuras de datos fundamentales en JavaScript que permiten almacenar colecciones de elementos bajo una única variable. A diferencia de los tipos primitivos que contienen un solo valor, los arrays pueden contener múltiples valores de cualquier tipo, incluyendo otros arrays.

### Declaración e Inicialización

Un array se declara usando corchetes `[]` y sus elementos se separan por comas:

```javascript
// Array de strings
const frutas = ['manzana', 'banana', 'naranja'];

// Array de números
const primos = [2, 3, 5, 7, 11];

// Array mixto
const mixto = [true, 'texto', 42, null];
```

### Propiedad `.length`

La propiedad `length` devuelve el número de elementos en un array:

```javascript
const colores = ['rojo', 'verde', 'azul'];
console.log(colores.length); // 3
```

### Acceso a Elementos

Los elementos se acceden mediante su índice (posición), comenzando desde 0:

```javascript
const letras = ['a', 'b', 'c', 'd'];
console.log(letras[0]); // 'a'
console.log(letras[2]); // 'c'
```

Para acceder al último elemento dinámicamente:

```javascript
console.log(letras[letras.length - 1]); // 'd'
```

### Modificación de Arrays

Los arrays son mutables, por lo que sus elementos pueden modificarse:

```javascript
let numeros = [10, 20, 30];
numeros[1] = 25;
console.log(numeros); // [10, 25, 30]
```

### Métodos Básicos

#### `.push()` - Añade elemento(s) al final
```javascript
const paises = ['Argentina', 'Brasil'];
paises.push('Chile');
console.log(paises); // ['Argentina', 'Brasil', 'Chile']
```

#### `.pop()` - Elimina el último elemento
```javascript
paises.pop();
console.log(paises); // ['Argentina', 'Brasil']
```

#### `.unshift()` - Añade elemento(s) al inicio
```javascript
paises.unshift('Uruguay');
console.log(paises); // ['Uruguay', 'Argentina', 'Brasil']
```

#### `.shift()` - Elimina el primer elemento
```javascript
paises.shift();
console.log(paises); // ['Argentina', 'Brasil']
```

### Arrays Multidimensionales

Los arrays pueden contener otros arrays, creando estructuras multidimensionales:

```javascript
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matriz[1][2]); // 6
```

## Bucles `for` con Arrays

Los bucles `for` son ideales para iterar sobre arrays, permitiendo procesar cada elemento.

### Ejemplo Básico:
```javascript
const productos = ['Laptop', 'Mouse', 'Teclado', 'Monitor'];

for (let i = 0; i < productos.length; i++) {
  console.log(`Producto ${i + 1}: ${productos[i]}`);
}
```

### Casos Prácticos:

1. **Suma de elementos numéricos:**
```javascript
const valores = [5, 10, 15, 20];
let total = 0;

for (let i = 0; i < valores.length; i++) {
  total += valores[i];
}
console.log(total); // 50
```

2. **Búsqueda en array:**
```javascript
function buscarNombre(nombres, objetivo) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === objetivo) {
      return `Encontrado en posición ${i}`;
    }
  }
  return 'No encontrado';
}

console.log(buscarNombre(['Ana', 'Juan', 'Sofía'], 'Juan')); // "Encontrado en posición 1"
```

3. **Modificación de elementos:**
```javascript
const precios = [100, 200, 300];

// Aplicar 10% de descuento
for (let i = 0; i < precios.length; i++) {
  precios[i] *= 0.9;
}
console.log(precios); // [90, 180, 270]
```

## Buenas Prácticas

1. **Evitar modificar arrays durante la iteración:** Esto puede causar comportamientos inesperados.
2. **Usar nombres descriptivos para índices:** En bucles complejos, usar `let idx = 0` en lugar de solo `i`.
3. **Considerar métodos funcionales:** En muchos casos, `forEach`, `map` o `filter` pueden ser más claros (se verán más adelante).

## Ejemplo Completo: Sistema de Inventario

```javascript
// Inicializar inventario
const inventario = [
  { nombre: 'Camisa', precio: 25, stock: 10 },
  { nombre: 'Pantalón', precio: 40, stock: 5 },
  { nombre: 'Zapatos', precio: 60, stock: 3 }
];

// Actualizar precios (aumento del 15%)
for (let i = 0; i < inventario.length; i++) {
  inventario[i].precio *= 1.15;
  console.log(`Nuevo precio de ${inventario[i].nombre}: $${inventario[i].precio.toFixed(2)}`);
}

// Calcular valor total del inventario
let valorTotal = 0;
for (let producto of inventario) {
  valorTotal += producto.precio * producto.stock;
}
console.log(`Valor total del inventario: $${valorTotal.toFixed(2)}`);
```

## Recursos Adicionales

- [Documentación MDN sobre Arrays](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Guía de bucles en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript.info - Arrays](https://es.javascript.info/array)