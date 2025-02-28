let entradaActual = "";
let operador = "";
let primerOperador = null;

function agregarNumero(numero){
  entradaActual += numero;
  document.getElementById("resultado").value = entradaActual;
}

function eligeOperador(op){
  if (primerOperador === null){
    primerOperador = parseFloat(entradaActual);
    operador = op;
    entradaActual = "";
  }
  else {
    calculaResultado();
    operador = op;
  }
}

function calculaResultado(){
  if (primerOperador === null || entradaActual === "") return;

  const segundoOperador = parseFloat(entradaActual);
  let resultado = 0;

  switch (operador){
    case "+":
      resultado = primerOperador + segundoOperador;
      break;

    case "-":
      resultado = primerOperador - segundoOperador;
      break;

    case "*":
      resultado = primerOperador * segundoOperador;
      break;

    case "/":
      if (segundoOperador !== 0){
        resultado = primerOperador / segundoOperador;
      }
      else {
        alert("No se puede dividir entre 0");
        limpiar();
        return;
      }
      break;
    default:
      return;
  }
   document.getElementById("resultado").value = resultado;
  primerOperador = resultado;
  entradaActual = "";
}

function limpiar(){
  primerOperador = null;
  operador = "";
  entradaActual = "";
  document.getElementById("resultado").value = "";
}