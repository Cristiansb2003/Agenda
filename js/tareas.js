$(document).ready(function(){
   var nombre = localStorage.getItem("nombre");

   $("#bienvenida").text("Bienvenido "+nombre)
});
