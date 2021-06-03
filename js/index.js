$(document).ready(function(){
    var entrar = $("#entrar");
    var url = "paginas/tareas.html";

    function guardarNombre(dato){
      let arrayD = [dato, 0];
        localStorage.setItem("nombre", JSON.stringify(arrayD));
    }
    function revisar(){
      if (!(localStorage.getItem("nombre")==null)){
           $(location).attr('href', url);
      }else{
      }
    }
    function validar() {
      var nombre = $("#nombre").val();
      if (nombre != "") {
        guardarNombre(nombre);
        $(location).attr('href', url);
      }else{
        alert("Completa los campos");
      }
    }
    entrar.click(function(){
        var nombre = $("#nombre").val();
       validar();
        
    });
    revisar();
});
