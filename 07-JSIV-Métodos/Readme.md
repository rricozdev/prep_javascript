# Métodos en JavaScript

## 🟡 Repaso rápido: ¿Qué es un array y por qué es importante recorrerlo?

### 🔸 ¿Qué es un array?

Un **array** es una **estructura que guarda varios valores en una sola variable**, en forma de lista ordenada.
Es como una fila de casilleros donde cada casillero tiene un valor y un número (índice) que empieza en 0.

```js
const frutas = ['manzana', 'pera', 'plátano'];
```

Ahí tenemos 3 frutas guardadas en un solo array.
Cada fruta tiene una posición:

* `frutas[0]` → 'manzana'
* `frutas[1]` → 'pera'
* `frutas[2]` → 'plátano'

---

### 🔸 ¿Por qué es importante **recorrer arrays**?

Porque muchas veces vas a tener datos en listas (productos, usuarios, mensajes, etc.), y vas a necesitar:

* Mostrar cada dato en pantalla (como en una tabla)
* Buscar algún dato en particular
* Filtrar los que cumplan cierta condición
* Transformarlos (por ejemplo: convertir números en texto)
* Validar si todos cumplen algo (como una edad mínima)

Y para eso **usamos métodos especiales** que nos ayudan a recorrerlos y hacer operaciones sobre cada uno de los elementos.

---

### 🔸 ¿Qué significa "recorrer"?

Recorrer un array significa **ir elemento por elemento**, y hacer algo con ellos.
Esto puede ser simplemente imprimirlos, cambiarlos, filtrarlos, etc.

Antes se hacía con `for`, ahora usamos métodos como `forEach`, `map`, `filter`, etc., que son **más fáciles, más limpios y más potentes**.



---

## 🧭 Transición: de los ciclos `for` a los métodos de array

### 🔸 ¿Por qué usamos `for` para recorrer arrays?

Cuando estamos empezando en programación, usamos `for` para entender **cómo se mueve uno dentro de un array**.

```js
const frutas = ['manzana', 'pera', 'plátano'];

for (let idx = 0; idx < frutas.length; idx++) {
  console.log(frutas[idx]);
}
```

Acá vemos:

* Cómo accedemos a cada elemento con su índice
* Cómo recorremos desde el primero hasta el último

🧠 Es importante saber esto para entender **qué hace un método internamente**. Pero en la práctica, **casi nunca usamos `for` así directamente**.

---

## 🚀 ¿Qué son los métodos de array?

### 🔸 ¿Qué es un método?

Un **método** es como una función especial que **ya viene incluida** en los arrays.
Te permite hacer tareas comunes de forma más fácil, clara y rápida.

Es como una **herramienta ya armada** que te ahorra escribir lógica repetitiva.

📦 En lugar de escribir todo el `for`, usamos algo como esto:

```js
const frutas = ["limón", "manzana", "naranja", "pera", "banano", "patilla", "mango"];

function mostrarFrutas() {
  frutas.forEach(fruta => {
    console.log(fruta);
  });
}

mostrarFrutas();
// limón
// manzana
// pera
// banano
// patilla
// mango
```

Nota : `forEach()` no devuelve nada, y por eso normalmente no se usa con `return`.

### 🔸 ¿Qué hacen los métodos de array?

Permiten:

* Recorrer cada elemento (`forEach`)
* Transformar valores (`map`)
* Filtrar elementos (`filter`)
* Buscar datos (`find`)
* Verificar condiciones (`some`, `every`)
* Y muchos más...

---

### 🔸 ¿Cómo se usan?

La **sintaxis básica** de un método es:

```js
array.metodo(callback);
```

El **callback** es una función que se ejecuta **por cada elemento del array**.

Ejemplo con `map`:

```js
const numeros = [1, 2, 3];
const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6]
```

---

## 🧩 Ejemplos explicados

### 1. `forEach`

```js
const nombres = ['Ana', 'Luis', 'Pedro'];

nombres.forEach((nombre, index) => {
  console.log(`Persona #${index + 1}: ${nombre}`);
});
```

👉 Úsalo para **ejecutar algo** por cada elemento.
🔴 No devuelve un nuevo array.

## 🛠️ ¿Cuándo usamos forEach()?   

🔸 Casos:   
- Cuando queremos recorrer un array solo para hacer algo con cada elemento, como mostrar, contar, imprimir, enviar, etc.

- No lo usás para transformar ni filtrar.

✅ Ejemplos:   

- Mostrar una lista de productos en pantalla.

- Enviar un correo a cada usuario de una lista.

- Guardar en base de datos cada ítem de un array.


```js
emails.forEach(email => enviarCorreo(email));
```

---

### 2. `map`

```js
const precios = [10, 20, 30];
const conIVA = precios.map(precio => precio * 1.21);
console.log(conIVA); // [12.1, 24.2, 36.3]
```

👉 Úsalo para **crear un nuevo array modificado**.

## 🛠️ ¿Cuándo usamos map()?   

🔸 Casos:   

- Cuando necesitás crear un nuevo array basado en otro.

- Se usa mucho para transformar datos, no solo recorrerlos.

✅ Ejemplos:   

- Convertir precios a otra moneda.

- Sacar solo los nombres de un array de objetos.

- Agregar una propiedad a cada objeto (sin modificar los originales).


```js
const preciosUSD = [10, 20, 30];
const preciosCOP = preciosUSD.map(p => p * 4000); // [40000, 80000, 120000]
```

---

### 3. `filter`

```js
const edades = [15, 18, 21, 12];
const mayores = edades.filter(edad => edad >= 18);
console.log(mayores); // [18, 21]
```

👉 Úsalo para **quedarte solo con los que cumplen una condición**.   


## 🛠️ ¿Cuándo usamos filter()?
🔸 Casos:   

- Cuando necesitás quedarte solo con los elementos que cumplen una condición.

- Ideal para limpiar, depurar, buscar subconjuntos de datos.

✅ Ejemplos:   

- Filtrar productos en oferta.

- Mostrar solo usuarios activos.

- Quitar los `null` o `undefined`.

```js
const usuariosActivos = usuarios.filter(u => u.activo === true);
```

---

## 🧪 Ejercicios en clase 


### ✍️ Ejercicio 1: Doblar valores

Dado el array `const nums = [2, 4, 6];`, usar `map` para devolver un nuevo array con los números **doblados**.

**Objetivo**: Practicar `map`.

```js
const nums = [2, 4, 6];
const dobles = nums.map(n => n * 2);
console.log(dobles); // [4, 8, 12]
```

---

### ✍️ Ejercicio 2: Filtrar aprobados

Dado el array `const notas = [3, 7, 4, 10, 2];`, usar `filter` para obtener solo las notas **mayores o iguales a 6**.

**Objetivo**: Practicar `filter`.

```js
const notas = [3, 7, 4, 10, 2];
const aprobadas = notas.filter(nota => nota >= 6);
console.log(aprobadas); // [7, 10]
```

---

### ✍️ Ejercicio 3: Mostrar nombres

Dado el array `const usuarios = ['Laura', 'Pepe', 'Carlos'];`, usar `forEach` para mostrar en consola:
**"Usuario: Laura"**, y así con todos.

**Objetivo**: Practicar `forEach`.

```js
const usuarios = ['Laura', 'Pepe', 'Carlos'];
usuarios.forEach(nombre => {
  console.log(`Usuario: ${nombre}`);
});
```

---   


## 📌 Repaso   

##  Extras útiles para complementar:

### 🧠 1. Comparación rápida: `for` vs. métodos

Mostrar esto en pantalla ayuda muchísimo:

```js
// Con for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Con forEach
frutas.forEach(fruta => console.log(fruta));
```

📍 **Conclusión para ellos**: hacen lo mismo, pero el segundo es más corto, claro y moderno.

---

### 🧪 2. Minidesafío en clase

> "Usen `map` para devolver el largo (cantidad de letras) de cada fruta."

```js
const longitudes = frutas.map(fruta => fruta.length);
console.log(longitudes); // [7, 5, 8, 7, 7]
```

Esto los ayuda a entender que `map()` genera un **nuevo array transformado**.

---

### ⚠️ 3. Malos usos comunes 

"Errores típicos":

```js
// ⚠️ Error: creer que forEach devuelve algo
const resultado = frutas.forEach(fruta => fruta.toUpperCase());
console.log(resultado); // undefined

// ⚠️ Usar map solo para imprimir (innecesario)
frutas.map(fruta => console.log(fruta)); // NO usar map para esto
```

📌 Aclaración: `map` es para **crear un nuevo array**. Si no necesitás ese nuevo array, **usá `forEach`**.

---

### 💬 4. Pregunta de reflexión final

> “Si tengo que transformar datos, ¿qué método uso?”
> “¿Y si solo quiero mostrarlos?”
> “¿Y si quiero buscar solo uno?”

Esto los lleva a pensar antes de elegir un método.

---

### 🎓 5. BONUS de nivel 2

Array de **objetos**, vean que esto no solo aplica con strings o números:

```js
const productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Zapatos", precio: 50 }
];

// Mostrar solo nombres
const nombres = productos.map(p => p.nombre);
console.log(nombres); // ["Camisa", "Pantalón", "Zapatos"]

// Filtrar los productos caros
const caros = productos.filter(p => p.precio > 30);
console.log(caros);
```

---


## 📚 Tarea

> ✔️ Entregar la tarea comentada (explicando qué hace cada línea).

1. Usar `map` para pasar un array de nombres a mayúsculas.
2. Usar `filter` para sacar los números menores a 50 de un array.
3. Usar `find` para encontrar el primer número divisible por 5.
4. Usar `some` para saber si hay algún número negativo.
5. Usar `every` para comprobar si todos los números son pares.

---
