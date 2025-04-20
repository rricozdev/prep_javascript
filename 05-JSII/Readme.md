# JavaScript II: Control de Flujo y Estructuras de Repetición 🚀

#### Domina los flujos de control, operadores lógicos y bucles `for`

---

## 🔍 `undefined` y `null`: Los valores especiales

En JavaScript tenemos dos valores únicos que merecen atención especial:

```javascript
// Undefined - asignado automáticamente por JavaScript
let nombre;
console.log(nombre); // undefined (variable declarada pero no definida)

// Null - asignado intencionalmente por desarrolladores
let usuarioActivo = null; // Indica que existe pero no tiene valor
console.log(usuarioActivo); // null
```

**Dato clave**: 
- `undefined` significa "no definido"
- `null` significa "definidamente vacío"

**Ejemplo práctico**:
```javascript
function buscarUsuario(id) {
  const usuarios = {1: "Ana", 2: "Carlos"};
  return usuarios[id] || null; // Retorna null si no encuentra el usuario
}

console.log(buscarUsuario(3)); // null
```   

## 🆚 Declarar vs. Definir vs. Undefined   

| Acción       | Código                 | Estado      | Explicación                                  |
|--------------|------------------------|-------------|---------------------------------------------|
| **Declarar** | `let edad;`            | `undefined` | "Reservé espacio en memoria pero no puse valor" |
| **Definir**  | `edad = 25;`           | `25`        | "Ahora tiene un valor concreto"             |
| **No declarar** | `console.log(altura)` | **Error**   | "Esta variable no existe"                   |

---   



## 🎭 Truthy y Falsy: La magia de los valores booleanos

JavaScript convierte cualquier valor a booleano en contextos lógicos:

**Valores Falsy** (se comportan como `false`):
```javascript
if (0) { /* No se ejecuta */ }
if ('') { /* No se ejecuta */ }
if (null) { /* No se ejecuta */ }
```

**Valores Truthy** (se comportan como `true`):
```javascript
if ('Hola') { /* Se ejecuta */ }
if ([]) { /* Se ejecuta */ }
if ({}) { /* Se ejecuta */ }
```

**Ejemplo útil**:
```javascript
function imprimirLista(lista) {
  if (lista && lista.length) { // Verifica que lista existe y no está vacía
    lista.forEach(item => console.log(item));
  } else {
    console.log('Lista no válida');
  }
}
```

---

## 🔄 Operadores de Comparación: Más allá del igual

**Comparación estricta (===) vs abstracta (==)**:
```javascript
1 == '1';  // true (coerción de tipos)
1 === '1'; // false (compara tipo y valor)

0 == false; // true
0 === false; // false
```

**Operadores de desigualdad**:
```javascript
5 != '5';   // false
5 !== '5';  // true

3 > 2;      // true
3 <= 3;     // true
```

**Ejemplo real**:
```javascript
function validarEdad(edad) {
  return typeof edad === 'number' && edad >= 18;
}
```

---

## 🚦 Flujos de Control: Toma decisiones en tu código

**Estructura if/else if/else**:
```javascript
const hora = new Date().getHours();

if (hora < 12) {
  console.log('Buenos días ☀️');
} else if (hora < 19) {
  console.log('Buenas tardes 🌤');
} else {
  console.log('Buenas noches 🌙');
}
```

**Operador ternario (if/else abreviado)**:
```javascript
const edad = 20;
const puedeVotar = edad >= 18 ? 'Sí' : 'No';
console.log(puedeVotar); // 'Sí'
```

---

## 🧩 Operadores Lógicos: Combinando condiciones

**AND (&&) - Todas deben ser verdaderas**:
```javascript
const tieneEntrada = true;
const esMayor = edad >= 18;

if (tieneEntrada && esMayor) {
  console.log('Puede ingresar al evento');
}
```

**OR (||) - Al menos una debe ser verdadera**:
```javascript
const esAdmin = true;
const tienePermiso = false;

if (esAdmin || tienePermiso) {
  console.log('Acceso concedido');
}
```

**NOT (!) - Invierte el valor**:
```javascript
const llueve = true;

if (!llueve) {
  console.log('Podemos ir al parque');
} else {
  console.log('Mejor quedarse en casa');
}
```

---

## 🔁 Bucles `for`: Repetición poderosa

**Estructura básica**:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteración número ${i}`);
}
```

**Ejemplo práctico - Sumar números**:
```javascript
let suma = 0;
for (let num = 1; num <= 10; num++) {
  suma += num;
}
console.log(suma); // 55
```

**Bucle infinito (¡Cuidado!)**:
```javascript
// Esto colgará tu navegador
// for (let i = 0; i >= 0; i++) {
//   console.log(i);
// }
```

---

## 🛠️ Arguments: Flexibilidad en funciones

**Parámetros nombrados**:
```javascript
function saludar(nombre, mensaje = 'Hola') {
  console.log(`${mensaje}, ${nombre}!`);
}
```

**Acceso a todos los argumentos**:
```javascript
function sumarTodo() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumarTodo(1, 2, 3, 4)); // 10
```

---

## 🔍 Búsqueda Efectiva en Google

Para temas avanzados como `switch` y `do...while`:

1. Usa términos en inglés: "javascript switch statement"
2. Agrega "MDN" para documentación oficial
3. Prueba con "ejemplos prácticos"

Ejemplo de búsqueda recomendada:  
"MDN javascript switch examples"

---

## 🏆 Tu Turno: Homework

Practica con ejercicios diseñados para reforzar estos conceptos. ¡La práctica hace al maestro!

**Tip profesional**:  
Usa `console.log()` frecuentemente para entender cómo se comporta tu código.

```javascript
// Ejemplo de debugging
for (let i = 0; i < 3; i++) {
  console.log(`Valor de i: ${i}`);
  // Aquí iría tu lógica
}
```

¡Ahora tienes las herramientas para controlar el flujo de tus programas JavaScript! 🎉