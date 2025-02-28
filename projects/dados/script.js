const numeroDados = document.getElementById("entrada");
const textResult = document.getElementById("textResult");
const imgResult = document.getElementById("imgResult");


function generaDados(){
    const dadosRandom = [];
    const imagenes = [];

    if(numeroDados.value <= 0){
        textResult.textContent = "dice: Elija un número que no sea 0";
    }
    else {
        for(let i = 0; i < numeroDados.value; i++){
            dadosRandom[i] = Math.floor(Math.random() * 6) + 1;
            imagenes[i] = `<img src="./img/Dice-${dadosRandom[i]}.png">`;
        }
        textResult.textContent = `dice: ${dadosRandom.join(",")}`;
        imgResult.innerHTML = imagenes.join('');
    }
}
