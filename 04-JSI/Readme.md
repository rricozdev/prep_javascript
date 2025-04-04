![logo](../_src/assets/logo.png)

# Fundamentos de JavaScript

#### Introducción a JavaScript

En esta lección cubriremos los conceptos esenciales:

* Fundamentos de JavaScript  
* Variables y tipos de datos  
* Strings, números y booleanos  
* Operadores matemáticos  
* Introducción a funciones  
* Control de flujo y comparaciones  
* Introducción a Node.js y NPM  



JavaScript es un lenguaje de programación creado originalmente para desarrollo web front-end, diseñado para añadir interactividad a páginas web estáticas. Con la introducción del motor V8 de Google, JavaScript experimentó mejoras significativas en rendimiento, consolidándose como el lenguaje principal para desarrollo web, incluyendo backend mediante Node.js.

## Variables

Las variables son contenedores para almacenar valores que pueden ser utilizados posteriormente. JavaScript utiliza tipado dinámico, lo que significa que una variable puede contener cualquier tipo de dato sin necesidad de declarar su tipo explícitamente.

Para declarar una variable usamos alguna de estas tres formas:

### var (ES5)
```javascript
var nombre = 'Juan'; // Forma tradicional
```

### let (ES6)
```javascript
let apellido = 'Perez'; // Variable con scope de bloque
```

### const (ES6)
```javascript
const PI = 3.14; // Constante no reasignable
```

> **Nota**: En Software Labs recomendamos usar `const` por defecto y `let` cuando sea necesario reasignar valores, evitando `var` en código moderno.

## Tipos de Datos Básicos

### Strings
Representan texto y se definen entre comillas:
```javascript
let mascota = 'Firulais';
```

### Numbers
Valores numéricos (enteros o decimales):
```javascript
let entero = 42;
let decimal = 3.14;
```

### Booleans
Valores lógicos `true` o `false`:
```javascript
let esValido = true;
```

## Operadores

JavaScript incluye operadores para realizar operaciones:

### Aritméticos
```javascript
let suma = 5 + 3; // 8
let modulo = 10 % 3; // 1 (resto de división)
```

### Comparación
```javascript
let mayorQue = 5 > 3; // true
let igualdad = 5 === '5'; // false (comparación estricta)
```

## Funciones Matemáticas

El objeto `Math` proporciona métodos matemáticos:

```javascript
Math.pow(2, 3); // 8 (potencia)
Math.round(4.7); // 5 (redondeo)
Math.random(); // Número aleatorio entre 0 y 1
```

## Funciones

Las funciones son bloques de código reutilizables:

### Declaración
```javascript
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```

### Expresión
```javascript
const sumar = function(a, b) {
  return a + b;
};
```

### Arrow Function (ES6)
```javascript
const multiplicar = (a, b) => a * b;
```

## Control de Flujo

### Condicionales
```javascript
if (edad >= 18) {
  console.log('Mayor de edad');
} else {
  console.log('Menor de edad');
}
```

### Operador Ternario
```javascript
let resultado = nota >= 6 ? 'Aprobado' : 'Reprobado';
```

## Buenas Prácticas

1. Usar nombres descriptivos para variables y funciones
2. Preferir `const` sobre `let` cuando sea posible
3. Usar comparación estricta (`===`) en lugar de igualdad débil (`==`)
4. Mantener las funciones pequeñas y con un solo propósito

--- 

# Control de Flujo y Comparaciones en JavaScript

## Estructuras de Control Básicas

### Condicional if-else
```javascript
if (condición) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

Ejemplo práctico:
```javascript
const edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

### Operadores de Comparación

| Operador | Descripción                  | Ejemplo       |
|----------|------------------------------|---------------|
| `==`     | Igualdad (sin tipo)          | `5 == '5'` → true |
| `===`    | Igualdad estricta (con tipo) | `5 === '5'` → false |
| `!=`     | Desigualdad (sin tipo)       | `5 != '5'` → false |
| `!==`    | Desigualdad estricta         | `5 !== '5'` → true |
| `>`      | Mayor que                    | `10 > 5` → true |
| `<`      | Menor que                    | `10 < 5` → false |
| `>=`     | Mayor o igual que            | `10 >= 10` → true |
| `<=`     | Menor o igual que            | `10 <= 5` → false |

## Introducción a Node.js y NPM

### ¿Qué es Node.js?
Node.js es un entorno de ejecución de JavaScript fuera del navegador, construido sobre el motor V8 de Chrome. Permite ejecutar JavaScript en el servidor.

Principales características:
- Ejecución de JavaScript del lado del servidor
- Modelo de E/S sin bloqueo y orientado a eventos
- Rico ecosistema de paquetes a través de NPM

### ¿Qué es NPM?
NPM (Node Package Manager) es:
1. El gestor de paquetes por defecto para Node.js
2. El repositorio más grande de librerías JavaScript
3. Una herramienta CLI para gestionar dependencias

### Comandos básicos de NPM

1. Inicializar un proyecto:
```bash
npm init
```

2. Instalar un paquete:
```bash
npm install nombre-del-paquete
```

3. Instalar como dependencia de desarrollo:
```bash
npm install nombre-del-paquete --save-dev
```

4. Ejecutar scripts definidos en package.json:
```bash
npm run nombre-del-script
```

### Estructura básica de un proyecto Node.js

```
mi-proyecto/
├── node_modules/  # Dependencias instaladas
├── package.json   # Configuración del proyecto y dependencias
├── index.js       # Archivo principal de la aplicación
└── .gitignore     # Archivos a ignorar por Git
```
--- 

Software Labs recomienda comenzar con estos conceptos fundamentales antes de adentrarse en frameworks como Express.js o aplicaciones más complejas.

### **Cómo ejecutar los test:**

1. Ejecuta los tests con:  

   ```bash
   npm test
   ```
   

**Conceptos aplicados en estos ejercicios:**  
✔ Variables y operadores básicos  
✔ Funciones simples  
✔ Return de valores  
✔ Condicionales básicos (`>` `>=`)  
✔ Strings y concatenación  
✔ Módulos de Node.js (export/require)  

