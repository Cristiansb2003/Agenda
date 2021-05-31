$(document).ready(function() {
  var nombre = localStorage.getItem("nombre");
  var contenedorTarjetas = $(".tarjetas");
  var agregarTarjeta = $("#guardarTarea");

  var contenedor1 = $("<div>");
  contenedor1.addClass("card tarjetaD");
  var titulo = $("<h5>");
  titulo.text("Titulo");
  titulo.addClass("card-header");
  var contenedor2 = $("<div>");
  contenedor2.addClass("card-body");
  var descripcion = $("<p>");
  descripcion.text("Descripcion");
  descripcion.addClass("card-text");
  contenedor1.prepend(titulo);
  contenedor2.append(descripcion);
  contenedor1.append(contenedor2);
  var nuevaFila = $("<li>");


function crearFila(){
    nuevaFila.append(contenedor1);
      $("#lista").append(nuevaFila);
}
  $("#bienvenida").text("Bienvenido " + nombre);

  agregarTarjeta.click(function() {
    console.log("hola");
    crearFila();
    crearFila();

  });
});
