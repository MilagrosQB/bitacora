//Intente armar con objetos, no me salió aún!

window.addEventListener("load", main);

function main(){
  var opcionTexto = document.getElementById("opcionTexto");
  var opcionCita = document.getElementById("opcionCita");
  var opcionMeme = document.getElementById("opcionMeme");
  var opcionPastilla = document.getElementById("opcionPastilla");
      opcionTexto.addEventListener("click",bloqueTexto);
      opcionCita.addEventListener("click",bloqueCita);
      opcionMeme.addEventListener("click",bloqueMeme);
      opcionPastilla.addEventListener("click",bloquePastilla);
}

function Opciones(contenedor, texto, hora,){
    this.contenedor = contenedor;
    this.texto = texto;
    this.hora = hora;
    this.publicar = function(
     var divContenedor = document.createElement("div");
     boxpost.appendChild(divContenedor);
     divContenedor.innerHTML = contenedor + texto + hora;
}

function BloqueTexto(contenedor,texto,hora){
   this.titulo = titulo;
   Opciones.call(this, contenedor, texto, hora);
}


function PostCita(contenedor,titulo,texto,horaPub,autor){
  this.autor = autor;
  Post.call(this, contenedor,titulo,texto, horaPub);
  this.publicar = function(){
    var divPublicar = document.createElement("div");
      divPublicar.classList.add("center-block", "div-post");
      contenedor.appendChild(divPublicar);
      divPublicar.innerHTML =  texto + autor + horaPub;
      console.log(divPublicar); 
  }
}

function BloqueCita(contenedor,titulo,texto,hora,autor){
  this.autor = autor;
  Opciones.call(this, contenedor,titulo,texto,hora,autor);
  this.publicar = function(){

    
  }

}


  var taskContainer = document.getElementById("tasks-container");  
  var boxpost = document.getElementById("boxpost");  
  var divTexto = document.createElement("div");
  var textArea = document.createElement("textarea");
  var btnCerrar = document.createElement("button");
  var btnPublicar = document.createElement("button");
  var BoxDate = document.createElement("div");  