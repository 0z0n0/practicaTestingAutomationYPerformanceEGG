function realizarOperaciones(event) {
    event.preventDefault(); // Evita que se envíe el formulario
  
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
  
    var resultados = {};
  
    resultados.suma = parseFloat(num1) + parseFloat(num2);
    resultados.resta = parseFloat(num1) - parseFloat(num2);
    resultados.multiplicacion = parseFloat(num1) * parseFloat(num2);
    resultados.division = parseFloat(num1) / parseFloat(num2);
  
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h2>Resultados:</h2>" +
      "<p>Suma: " + resultados.suma + "</p>" +
      "<p>Resta: " + resultados.resta + "</p>" +
      "<p>Multiplicación: " + resultados.multiplicacion + "</p>" +
      "<p>División: " + resultados.division + "</p>";
  }
  
  