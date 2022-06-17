
var tablero = document.getElementById('tablero').getContext('2d');
var palabras = ['ALURA', 'AHORCADO', 'ORACLE', 'HTML', 'CSS', 'JAVASCRIPT'];
var letras = [];
var palabraCorrecta = "";
var errores = 10;
var aciertos = 0;

function escojerPalabraSecreta() {
    var palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta;
}

function dibujarLineas() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 600 / palabraSecreta.length
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500 + (ancho * i), 640);
        tablero.lineTo(550 + (ancho * i), 640);
    }
    tablero.stroke();
    tablero.closePath();
} dibujarLineas(escojerPalabraSecreta());

function escribirLetraCorrecta(index) {
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 600 / palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505 + (ancho * index), 620)


}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText(letra, 535 + (40 * (10 - errorsLeft)), 710, 40);
    dibujarAhorcado(errores);
}

function verificarLetraDigitada(tecla) {
    if (letras.lentgh < 1 || letras.indexOf(tecla) < 0) {
        letras.push(tecla);
        return false;
    } else {
        letras.push(tecla);
        return true;
    }
}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase();
    console.log(palabraCorrecta);
    verificarVictoria();
}

function adicionarLetraIncorrecta(letraIncorrecta) {
    if (palabraSecreta.indexOf(letraIncorrecta) <= 0) {
        errores -= 1;
        if (errores == 0) { terminarJuego() }
    }
}

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (charIsLetter(letra)) {
        if (!verificarLetraDigitada(e.key) && !juegoTerminado) {
            if (palabraSecreta.includes(letra)) {
                //console.log(letra);
                adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
                for (let i = 0; i < palabraSecreta.length; i++) {
                    if (palabraSecreta[i] === letra) {
                        escribirLetraCorrecta(i);
                    }
                }
            }
            else {
                if (!verificarLetraDigitada(e.key) && !juegoTerminado) return
                adicionarLetraIncorrecta(letra)
                escribirLetraIncorrecta(letra, errores)
            }
        }
    }
}

function terminarJuego() {
    juegoTerminado = true;
    document.querySelector("#juegoTerminado").innerHTML="GAME OVER";
    document.querySelector("#juegoTerminado").classList.remove("estiloGanador");
    document.querySelector("#juegoTerminado").classList.add("estiloPerdedor");
    
    document.getElementById("pantallaFail").classList.remove("fadeOut");
    document.getElementById("tableroJuego").classList.add("fadeOut2");
    setTimeout(function () {
        document.getElementById("tableroJuego").style.display = "none";
        document.getElementById("pantallaFail").style.display = "unset";
    }, 2000);
}

function iniciarJuego() {
    juegoTerminado = false;
    document.getElementById("principal").classList.add("fadeOut");
    document.getElementById("pantallaFail").classList.add("fadeOut");
    document.getElementById("tableroJuego").classList.remove("fadeOut2");
    setTimeout(function () {
        document.getElementById("principal").style.display = "none";
        document.getElementById("tableroJuego").style.display = "unset";
        document.getElementById("pantallaFail").style.display = "none";
    }, 500);


    //document.getElementById("principal").style.display = "none";
    //document.getElementById("tableroJuego").style.display = "unset";
    //document.getElementById("pantallaFail").style.display = "none";
    escojerPalabraSecreta();
    tablero.clearRect(0, 0, 1200, 800);
    pincel.clearRect(0, 0, 300, 360);
    dibujarLineas();
    errores = 10;
    aciertos = 0;
    letras = [];
    palabraCorrecta = "";
}

function verificarVictoria() {
    for (let x = 0; x < palabraSecreta.length; x++) {


        if (palabraCorrecta.includes(palabraSecreta[x])) {
            aciertos += 1;
        }
    }

    //console.log(aciertos);
    if (aciertos == palabraSecreta.length) {
        terminarJuego();
        document.querySelector("#juegoTerminado").innerHTML="FELICITACIONES";
        document.querySelector("#juegoTerminado").classList.remove("estiloPerdedor");
        document.querySelector("#juegoTerminado").classList.add("estiloGanador");
    }
    aciertos = 0;
};

function charIsLetter(char) {
    if (typeof char !== 'string') {
        return false;
    }

    return char.toLowerCase() !== char.toUpperCase();
}
