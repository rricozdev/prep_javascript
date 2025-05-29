// getElementById()
const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

const cambiarTitulo = () => {
  if (titulo) titulo.textContent = "Bienvenidos a Hola DOM";
  else alert("Uppss ocurrió un error!");
};

if (boton) boton.addEventListener("click", cambiarTitulo);

// getElementByClassName();
const parrafos = document.getElementsByClassName("parrafo");
console.log("parrafos: ", parrafos);

const botonParrafos = document.getElementById("cambiar-parrafos");

// const cambiarParrafos = () => {
//     for(let parrafo of parrafos ) {
//         parrafo.textContent = "Este texto ha sido cambiado con javascript."
//     }
// };
// const parrafos =  [p.parrafo, p.parrafo, p.parrafo]
const cambiarParrafos = () => {
  for (let parrafo of parrafos) {
    if (parrafo.textContent === "Primer párrafo") {
      parrafo.textContent = "Primer párrafo modificado con JS";
      parrafo.style.color = "red";
    }

    if (parrafo.textContent === "Segundo párrafo") {
      parrafo.textContent = "Segundo párrafo modificado con JS";
      parrafo.style.color = "green";
    }
    if (parrafo.textContent === "Tercer párrafo") {
      parrafo.textContent = "Tercer párrafo modificado con JS";
    }
  }
};

if (botonParrafos) botonParrafos.addEventListener("click", cambiarParrafos);

// getElementByTagName();
const items = document.getElementsByTagName("li");
const botonItems = document.getElementById("cambiar-elementos");

const cambiarElementos = () => {
  for (let item of items) {
    item.textContent = "Elemento Modificado";
    item.style.color = "#ff6666";
    item.style.fontWeight = "bold";
  }
};

if (botonItems) botonItems.addEventListener("click", cambiarElementos);
