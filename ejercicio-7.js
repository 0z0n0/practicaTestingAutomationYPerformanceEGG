// Seleccionar todos los botones "subir" y "bajar"
var subirBotones = document.querySelectorAll('.subir');
var bajarBotones = document.querySelectorAll('.bajar');

// Asignar funciones a los botones "subir"
subirBotones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    var li = this.parentNode;
    var lista = li.parentNode;

    if (li.previousElementSibling) {
      lista.insertBefore(li, li.previousElementSibling);
    }
  });
});

// Asignar funciones a los botones "bajar"
bajarBotones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    var li = this.parentNode;
    var lista = li.parentNode;

    if (li.nextElementSibling) {
      lista.insertBefore(li.nextElementSibling, li);
    }
  });
});
