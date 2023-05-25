function invertirString() {
    var texto = document.getElementById("textoInput").value;
  
    var resultado = "";
  
    var palabras = texto.split(" ");
  
    for (var i = palabras.length - 1; i >= 0; i--) {
      var palabraInvertida = "";
      for (var j = palabras[i].length - 1; j >= 0; j--) {
        palabraInvertida += palabras[i][j];
      }
      resultado += palabraInvertida + " ";
    }
  
    return resultado;
  }
  
  function mostrarResultado() {
    var resultado = invertirString();
  
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = resultado;
  }
  
  
   