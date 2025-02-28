const valor = document.getElementById("textoEntrada");
const toFa = document.getElementById("toFa");
const toCe = document.getElementById("toCe");
const resultado = document.getElementById("resultado");
const submit = document.getElementById("submit");

let temp;


function convertir(){
    if(toFa.checked){
        temp = Math.round(((valor.value * (9 / 5)) + 32)* 10) / 10;
        resultado.textContent = temp + "ºF";
    }
    else if(toCe.checked){
        temp = Math.round((valor.value - 32) * (5 / 9)* 10) / 10;
        resultado.textContent = temp + "ºC";
    }
    else{
        resultado.textContent = "Elija una opción";
    }
}
