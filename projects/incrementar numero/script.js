let contador = document.querySelector(".contador");
contador.textContent = 0;

const decremento = document.querySelector(".decremento");
const reset = document.querySelector(".reset");
const incremento = document.querySelector(".incremento");

decremento.onclick = function(){
    contador.textContent--;
}

reset.onclick = function(){
    contador.textContent = 0;
}

incremento.onclick = function(){
    contador.textContent++;
}