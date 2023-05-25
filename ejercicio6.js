// Paso 1: Crear el array de personas
var personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 30, ciudad: "Barcelona" },
    { nombre: "Carlos", edad: 35, ciudad: "Valencia" }
  ];

  // Paso 3: Definir la función "crearMensajesDePresentacion"
  function crearMensajesDePresentacion(personas) {
    // Paso 4: Crear el array de mensajes
    var mensajes = [];

    // Paso 5: Recorrer el array de personas
    personas.forEach(function(persona) {
      // Paso 6: Crear el mensaje de presentación
      var mensaje = "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";

      // Paso 7: Agregar el mensaje al array de mensajes
      mensajes.push(mensaje);
    });

    // Paso 8: Devolver el array de mensajes como resultado
    return mensajes;
  }

  // Paso 9: Obtener el resultado y mostrar los mensajes en el documento
  var mensajesDePresentacion = crearMensajesDePresentacion(personas);
  var resultadoElement = document.getElementById("resultado");
  mensajesDePresentacion.forEach(function(mensaje) {
    var pElement = document.createElement("p");
    pElement.textContent = mensaje;
    resultadoElement.appendChild(pElement);
  });