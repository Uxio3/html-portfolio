const checkbox = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const suscripcion = document.getElementById("texto");
const metodo = document.getElementById("metodo");

document.getElementById("submit").onclick = function(){
    if(checkbox.checked){
        suscripcion.textContent = "Estás suscrito";
    }
    else {
        suscripcion.textContent = "No estás suscrito";
    }

    if(visa.checked){
        metodo.textContent = "Estás pagando con Visa";
    }
    else if(mastercard.checked){
        metodo.textContent = "Estás pagando con Mastercard";
    }
    else if(paypal.checked){
        metodo.textContent = "Estás pagando con Paypal";
    }
    else{
        metodo.textContent = "No tienes ningún método de pago selecionado";
    }
}