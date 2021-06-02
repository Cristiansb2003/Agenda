$(document).ready(function(){
    var entrar = $("#entrar");
    var url = "paginas/tareas.html";

    function guardarNombre(dato){
      let arrayD = [dato];
        localStorage.setItem("nombre", JSON.stringify(arrayD));
    }
    function revisar(){
      if (!(localStorage.getItem("nombre")==null)){
           $(location).attr('href', url);
      }else{
        alert("re")
      }
    }
    entrar.click(function(){
        var nombre = $("#nombre").val();
        console.log(nombre)
        guardarNombre(nombre);
        $(location).attr('href', url);
    });
    revisar();
});
