$(document).ready(function() {
  var nombre = localStorage.getItem("nombre");
  var contenedorTarjetas = $(".tarjetas");
  var agregarTarjeta = $("#guardarTarea");
  var Titulo;
  var Descripcion;


  function crearFila() {
    Titulo = $("#titulo").val();
    Descripcion = $("#descripcion").val();
    var contenedor1 = $("<div>");
    contenedor1.addClass("card tarjetaD");
    var titulo = $("<h5>");
    titulo.text(Titulo);
    titulo.addClass("card-header");
    var contenedor2 = $("<div>");
    contenedor2.addClass("card-body");
    var descripcion = $("<p>");
    descripcion.text(Descripcion);
    descripcion.addClass("card-text");
    contenedor1.prepend(titulo);
    contenedor2.append(descripcion);
    contenedor1.append(contenedor2);
    var descripcion2 = $("<li>");
    descripcion2.append(contenedor1);
    $("#lista").after(descripcion2);
  }
  $("#bienvenida").text("Bienvenido " + nombre);

  agregarTarjeta.click(function() {
    console.log("hola");
    crearFila();
    var vacio = "";
   $('input[type="text"]').val('');
  });
});
