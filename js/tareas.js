$(document).ready(function () {
  var nombre = localStorage.getItem("nombre");
  nombre = JSON.parse(nombre);
  var nombreV = nombre[0];
  var agregarTarjeta = $("#guardarTarea");

  function agregarTarea() {
    //tarea = [Titulo, Descripcion];

    var Titulo = $("#titulo").val();
    var Descripcion = $("#descripcion").val();
    let arrayD = localStorage.getItem("nombre");
    arrayD = JSON.parse(arrayD);
    console.log("Datos "+arrayD);
    arrayD.push(Titulo);
    arrayD.push(Descripcion);
    console.log("Datos pero nuevos: "+arrayD);
    localStorage.setItem("nombre", JSON.stringify(arrayD));
    var cantidad = (arrayD.length-1)/2;
    console.log(cantidad);
   // for (var i = 1; i <= cantidad; i++) {
    //  if (i % 2 == 0) {
     //   crearFila(arrayD[i + 1], arrayD[i + 2]);
     // } else {
     //   crearFila(arrayD[i], arrayD[i + 1]);
     // }
   // }
   
   var x = 1;
   var y = 2;
   var pase = false;
   
   for(let i =1; i<=cantidad; i++){
    console.log("no entre")
     if(pase){
      x = x+2;
      y = y+2;
      crearFila(arrayD[x], arrayD[y]);
      console.log("hola");
     }else{
       pase = true;
       crearFila(arrayD[x], arrayD[y]);
       console.log("primero");
     }
     
     
   }
  }

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

  $("#bienvenida").text("Bienvenido " + nombreV);

  agregarTarjeta.click(function () {
    agregarTarea();
    $('input[type="text"]').val("");
  });
});
