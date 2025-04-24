function votar(name, age) {
  let hora = new Date().getHours();
  let current = 2025;
  const tiempo = () => {
    if (hora < 12) {
      return alert("Buenos días ☕");
    } else if (hora < 18) {
      return alert("Buenas tardes 😎");
    } else {
      return alert("Buenas noches 🌙");
    }
  };
  tiempo();

  name = prompt("Cuál es tu nombre");

  age = prompt("Hola " + name + " en qué año naciste?");
  if (age) {
    let operacion = age - current;
    return alert("Tienes " + operacion + " años");
  }
}

votar();
