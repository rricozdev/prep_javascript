# Homework: Git

### Pre-requisitos

* Crear una cuenta en [Github.com](https://www.github.com/).
* Si usas una computadora con Windows, puedes instalar la terminal de comandos _git-bash_ haciendo click [acá](https://git-for-windows.github.io/).
* Si usas Mac, `git` viene pre-instalado y puedes acceder desde la terminal pulsando ⌘+Espacio y escribiendo "terminal". Puedes asegurarte de que git está instalado escribiendo `which git` en la terminal y pulsando Enter, si aparece la ruta de un archivo está todo correcto. En algunas ocasiones, podrías ser redireccionado a la descarga de la línea de comandos de Xcode, sigue las instrucciones.
* Si usas Linux, tal vez necesites instalar git accediendo a tu terminal e ingresado `apt-get install git`
* Si tienes problemas instalando Git, este recurso puede servir de ayuda: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Comandos básicos de terminal

> Usaremos la "terminal" o "línea de comandos" durante tu tiempo en Software Labs. Si estás en una computadora con Mac o Linux, deberías tener la terminal y git ya instalados. Si estás en una máquina con Windows, te recomendamos instalar ["git-bash"](https://git-for-windows.github.io/). Otra opción muy buena es instalar ["powershell"](https://learn.microsoft.com/es-es/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.5).

Dentro de nuestra terminal podemos: revisar nuestra estructura de archivos, añadir, eliminar y modificar archivos, y muchas cosas más. La terminal es una herramienta muy poderosa para los desarrolladores y vas a usarla mucho en tu carrera profesional. Al principio puede parecer aterrador, pero con el tiempo terminarás disfrutando su uso, así que es mejor acostumbrarse ahora. Para comenzar, aprenderemos los comandos "básicos":

"List": Nos permite ver el contenido de la carpeta donde nos encontramos.
```bash
  $ ls
```

"Change Directory": Nos permite movernos a una nueva carpeta o "directorio"
```bash
  $ cd [carpeta]
```

"Make Directory": Crea una nueva carpeta en el directorio donde nos encontramos actualmente.
```bash
  $ mkdir [nombre de la carpeta]
```

"Touch" creará un nuevo archivo.
```bash
  $ touch [nombre del archivo]
```

"Remove": Elimina permanentemente un archivo. ¡CUIDADO! Esto traspasa cualquier "papelera de reciclaje" que exista en el sistema y elimina los archivos PERMANENTEMENTE. Como nota, esto no eliminará carpetas, necesitamos un comando especial para eso que aprenderemos más adelante.

```bash
  $ rm [nombre del archivo]
```

## Ejercicio

En este ejercicio crearemos un nuevo repositorio en Github y a partir de la línea de comandos crearemos un nuevo archivo y lo agregaremos a nuestro nuevo repositorio.

Iniciaremos creando una carpeta desde la consola llamada: "CarpetaSoftwareLabs"

Para ello primero iremos a la carpeta de nivel superior, escribe en la consola:

```bash
  cd ~
```

y presiona Enter. Una vez estés en el nivel superior, escribe:

```bash
  mkdir CarpetaSoftwareLabs
```

y presiona Enter. ¡Felicitaciones, has creado un directorio!

### Crear un Repositorio

Entra a github.com y logueate con tu usuario. Luego en la parte de arriba a la derecha busca el signo '+' y elige 'new repository'.

En la nueva pantalla, vas a tener que seleccionar el nombre de tu nuevo repo. Crea un repo que se llame: `repositorio-softwarelabs`. Puedes agregarle una descripción también, pero no es obligatoria.

Luego elige la visibilidad del proyecto como público (para tener repos privados tienes que pagar el premium de github).

Por último, haz clic en **Crear repositorio**.

Listo, ya tienes tu propio repo. Ahora vas a poder clonarlo con las instrucciones de más abajo.

### Clonar

Para poder trabajar en un proyecto debes clonarlo (descargarlo) a tu máquina local. Para ello, accede al repositorio que creaste en tu cuenta, y haz clic en el botón de la esquina superior derecha que dice "Clonar o descargar". Un dropdown aparecerá y podemos hacer clic en el icono del portapapeles para copiar la dirección del repo. O, si el repo está vacío, verás en el medio de la pantalla la URL con la dirección de tu repositorio.

Una vez tengas la dirección copiada, abre una terminal nueva y escribe lo siguiente:

```bash
  $ cd ~

  $ cd CarpetaSoftwareLabs

  $ git clone [dirección copiada]
```

Esto descargará el repositorio y tendrás disponible una copia local guardada en tu máquina.

### Comandos de git:

Durante estas lecciones interactuaremos con git a través de la terminal. En el futuro, podrías estar interesado en usar una interfaz visual/gráfica, pero durante estas lecciones necesitaremos usar la terminal para acceder a todas las funciones de git.

En este ejercicio, añadiremos un archivo a nuestro proyecto y crearemos un commit para cambiar la "memoria" de git.

A continuación, escribe lo siguiente en tu terminal:

```bash
  $ cd repositorio-softwarelabs
  
  $ touch archivo-ejemplo.js
```

Esto añadirá un nuevo archivo llamado "archivo-ejemplo.js" a tu proyecto.

En este momento, podemos usar el comando de git "status", esto nos mostrará los cambios hechos en el repositorio local. Usa "status" si no estás seguro de que algo haya funcionado y necesitas saber qué pasó.

```bash
  $ git status
```

Deberías ver algo parecido a estas líneas:

```bash
  Changes not staged for commit:
    (use "git add <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   README.md

  Untracked files:
    (use "git add <file>..." to include in what will be committed)

    archivo-ejemplo.js

  no changes added to commit (use "git add" and/or "git commit -a")
```

Esto nos dice que tenemos un archivo que ha cambiado, pero todavía no ha sido guardado en el historial de git.

Para hacer esto, usaremos el comando "add":

```bash
  git add archivo-ejemplo.js
```

Esto agregó nuestros cambios al historial. Ahora, para guardar el historial, usaremos el comando "commit".

```bash
  git commit -m 'Agregado nuevo archivo, archivo-ejemplo.js'
```

Ahora que guardamos nuestros cambios localmente, vamos a querer compartir esos cambios en Github. Para ello, usaremos "push":

```bash
  git push
```

¡Felicitaciones, acabas de subir tu primer git commit!

