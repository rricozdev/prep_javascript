// 1. Que salude al usuario de acuerdo a la hora local ✅
// 2. Que solicite el nombre al usuario ✅
// 3. Que salude usando el nombre del usuario y solicite el año de nacimiento ✅
// 4. Que le diga al usuario cuanto años tiene.✅

function saludo(){
    //código aquí
    if(time < 12){
        alert("Buenos días ☀");
    }else if(time >= 12 && time < 19){
        alert("Buenas tardes ⛅");
    } else {
        alert("Buenas noches 🌙");
    }    

    const name = prompt("Cuál es tu nombre?");
    alert("Hola " + name);
    const age = prompt(" en qué año naciste (yyyy)");

    const result = currentYear-age;

    alert("Tienes " + result + " años");
    
    return result;

}

// Obtener la hora del equipo local
const time = new Date().getHours();
const currentYear = 2025;

saludo()