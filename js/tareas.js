$(document).ready(function () {
  var nombre = localStorage.getItem("nombre");
  nombre = JSON.parse(nombre);
  var nombreV = nombre[0];
  var agregarTarjeta = $("#guardarTarea");
  var salir = $("#Salir");
  var url = "../index.html";

  function crearFila(Titulo, DescripcionD) {
    var contenedor1 = $("<div>");
    contenedor1.addClass("card tarjetaD");
    var titulo = $("<h5>");
    titulo.text(Titulo);
    titulo.addClass("card-header");
    var contenedor2 = $("<div>");
    contenedor2.addClass("card-body");
    var descripcion = $("<p>");
    descripcion.text(DescripcionD);
    descripcion.addClass("card-text");
    contenedor1.prepend(titulo);
    contenedor2.append(descripcion);
    contenedor1.append(contenedor2);
    var descripcion2 = $("<li>");
    descripcion2.append(contenedor1);
    $("#lista").after(descripcion2);
  }

  function agregarTarea() {
    var Titulo = $("#titulo").val();
    var Descripcion = $("#descripcion").val();
    let arrayD = localStorage.getItem("nombre");

    arrayD = JSON.parse(arrayD);
    arrayD.push(Titulo);
    arrayD.push(Descripcion);
    arrayD[1] = arrayD[1] + 2;
    localStorage.setItem("nombre", JSON.stringify(arrayD));
    crearFila(arrayD[arrayD[1]], arrayD[arrayD[1] + 1]);
  }

  function mostrarDatos() {
    let arrayD = localStorage.getItem("nombre");
    arrayD = JSON.parse(arrayD);
    if (arrayD.length >= 3) {
      var cantidad = (arrayD.length - 2) / 2;
      var x = 2;
      var y = 3;
      var pase = false;
      for (let i = 1; i <= cantidad; i++) {
        if (pase) {
          x = x + 2;
          y = y + 2;
          crearFila(arrayD[x], arrayD[y]);
        } else {
          pase = true;
          crearFila(arrayD[x], arrayD[y]);
        }
      }
    }
  }
  mostrarDatos();

  $("#bienvenida").text("Bienvenido " + nombreV);

  function validar() {
    var Titulo = $("#titulo").val();
    var Descripcion = $("#descripcion").val();
    if (Titulo != "" && Descripcion != "") {
      agregarTarea();
    }else{
      alert("Completa los campos");
    }
  }
  agregarTarjeta.click(function () {
    var posicion = nombre[2];
    validar();
    $('input[type="text"]').val("");
  });
  salir.click(function(){
    localStorage.clear();
    $(location).attr('href', url);
  });
});
