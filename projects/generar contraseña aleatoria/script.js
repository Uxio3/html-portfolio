const salida = document.getElementById("salida");
const boton = document.getElementById("boton");


    const tamaño = 12;
    const hayMayusculas = true;
    const hayMinusculas = true;
    const hayNumeros = true;
    const haySimbolos = true;

function generarContraseña(){
    let valores = "";
    let password = "";
    if(tamaño <= 0){
        salida.textContent = "Tamaño de contraseña incorrecta";
    }
    else{
        if (hayMayusculas){
            valores += "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        }
        if (hayMinusculas){
            valores += "abcdefghijklmnñopqrstuvwxyz";
        }
        if (hayNumeros){
            valores += "0123456789";
        }
        if (haySimbolos){
            valores += "!|@#~€¬·$%&/()=?¿ç,.-:_";
        }

        for(let i = 0; i < tamaño; i++){
            let index = Math.floor(Math.random() * valores.length);
            password += valores[index];
        }
        salida.textContent = `Contraseña: ${password}`;
    }
    
}
    


