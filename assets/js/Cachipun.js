// Solicitar al usuario las veces que desea que se repita el juego consecutivamente.
const NumerodeVeces = parseInt(prompt("¿Cuántas veces deseas jugar?"));


var contadorUsuario = 0; // variable Contador para el usuario
var contadorMaquina = 0; // variable Contador para la maquina
var contadorEmpates = 0; // variable Contador para los empates


// Función para obtener la jugada del usuario
function obtenerJugadaUsuario() {
    jugadaUsuario = prompt("Ingresa tu jugada Piedra, Papel o Tijera:").toLowerCase();

    while (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijera") {
        jugadaUsuario = prompt("Jugada inválida. Ingresa una jugada valida: Piedra, Papel o Tijera:").toLowerCase();
    }
    return jugadaUsuario; // Devuelve la jugada del usuario 

}
// Función para obtener la jugada de la maquina
function obtenerJugadaMaquina() {
    // Obtener la jugada de la maquina
    const jugadaMaquina = Math.floor(Math.random() * 3); // Genera un numero aleatorio
    const jugadas = ["piedra", "papel", "tijera"]; //se usa el "[]" para crear un arreglo.
    alert("La maquina jugó: " + jugadas[jugadaMaquina]);

    return jugadas[jugadaMaquina]; // Devuelve la jugada de la maquina y el uso de el "[jugadaMaquina]" para mostrar la jugada
}
// Función para determinar el ganador
function determinarGanador(jugadaUsuario, jugadaMaquina) {
    if (jugadaUsuario === jugadaMaquina) {
        return "empate";
    }
    else if ((jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijera" && jugadaMaquina === "papel")) {
        return "usuario";
    }
    else {
        return "maquina";
    }
}

//ciclo for para Repetir el juego "numeroDeVeces"
for (let i = 0; i < NumerodeVeces; i++) {
    // Obtener la jugada del usuario y la jugada de la maquina 
    const jugadaUsuario = obtenerJugadaUsuario();
    const jugadaMaquina = obtenerJugadaMaquina();

    // Determinar el ganador
    const ganador = determinarGanador(jugadaUsuario, jugadaMaquina);

    // Mostrar y registrar el resultado de cada ronda
    if (ganador === "usuario") {
        alert(`Ganaste esta ronda! Tú: ${jugadaUsuario} vs Máquina: ${jugadaMaquina}`);
        contadorUsuario++;
    }
    else if (ganador === "maquina") {
        alert(`Perdiste esta ronda! Tú: ${jugadaUsuario} vs Máquina: ${jugadaMaquina}`);
        contadorMaquina++;
    }
    else {
        alert(`Empate! Tú: ${jugadaUsuario} vs Máquina: ${jugadaMaquina}`);
        contadorEmpates++;
    }
}

// Mostrar resultados finales, "\n" es un salto de linea
alert(`Resultados finales:\nUsuario: ${contadorUsuario}\nMaquina: ${contadorMaquina}\nEmpates: ${contadorEmpates}`);

