var pantalla = document.getElementById('dibujo');
var pincel = pantalla.getContext('2d');
pincel.fillStyle = "#F3F5FC";
pincel.fillRect(0, 0, 300, 360);
pincel.fillStyle = "#0A3871"


function dibujarAhorcado(errores) {
    switch (errores) {
        case 0:
            //pierna2
            pincel.moveTo(203, 267);
            pincel.lineTo(250, 340);
            pincel.stroke();

            //carucha
            pincel.font = "20px Comic Sans MS";
            pincel.strokeText("X    x", 180, 90);
            pincel.moveTo(190, 105);
            pincel.lineTo(220, 105);
            pincel.arc(210, 105, 7, 0, 3.14);
            pincel.stroke();

        case 1:
            //pierna1
            pincel.moveTo(203, 267);
            pincel.lineTo(150, 340);
            pincel.stroke();
        case 2:
            //brazo2
            pincel.moveTo(203, 130);
            pincel.lineTo(250, 200);
            pincel.stroke();
        case 3:
            //brazo1
            pincel.moveTo(203, 130);
            pincel.lineTo(150, 200);
            pincel.stroke();
        case 4:
            //torso
            pincel.fillRect(200, 120, 5, 150);
        case 5:
            //cabeza
            pincel.beginPath();
            pincel.arc(203, 85, 35, 0, 2 * 3.14);
            pincel.lineWidth = 5;
            pincel.strokeStyle = "#0A3871";
            pincel.stroke();

        case 6:
            //soga
            pincel.fillRect(200, 0, 5, 50);
        case 7:
            //viga
            pincel.fillRect(80, 0, 120, 5);
        case 8:
            //columna
            pincel.fillRect(80, 0, 5, 360);
        case 9:
            //base
            pincel.fillRect(0, 355, 300, 5);
            break;

    }
}

