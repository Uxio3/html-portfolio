document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor");
    const puntuacionPorPantalla = document.getElementById("puntuacion");
    let puntuacion = 0;
    let acabaJuego = false;
    let intervaloGlobo = 5000;

    function getRandomColor() {
        const colores = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
        return colores[Math.floor(Math.random() * colores.length)];
    }

    function creaGlobo() {
        if (acabaJuego) return;

        const globo = document.createElement("div");
        globo.classList.add("globo");
        const tamanioGlobo = 70;
        globo.style.left = Math.random() * (window.innerWidth - tamanioGlobo) + "px";
        globo.style.bottom = "-70px";
        globo.style.backgroundColor = getRandomColor();
        contenedor.appendChild(globo);

        let velocidad = Math.random() * 3 + 2;
        let sube = setInterval(() => {
            let botonActual = parseInt(globo.style.bottom);
            
            if (botonActual >= window.innerHeight - tamanioGlobo) {
                clearInterval(sube);  
                globo.remove(); 
                finalizarJuego();
            } else {
                globo.style.bottom = botonActual + velocidad + "px";
            }
        }, 20);

        globo.addEventListener("click", () => {
            clearInterval(sube);
            globo.remove();
            puntuacion += 1;
            puntuacionPorPantalla.textContent = "puntuacion: " + puntuacion;
        });
    }

    function finalizarJuego() {
        acabaJuego = true;
        alert("Juego terminado, su puntuación es: " + puntuacion);
        location.reload();
    }

    function primerGlobo() {
        creaGlobo();
        let interval = 4000;

        function siguienteGlobo() {
            if (acabaJuego) return;
            setTimeout(() => {
                creaGlobo();
                if (intervaloGlobo > 1000) {
                    intervaloGlobo -= 1000;
                }
                siguienteGlobo();
            }, intervaloGlobo);
        }

        siguienteGlobo();
    }

    primerGlobo();
});
