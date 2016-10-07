window.addEventListener("load", main);

function main (){
  var opcionTexto = document.getElementById("opcionTexto");
  var opcionCita = document.getElementById("opcionCita");
  var opcionMeme = document.getElementById("opcionMeme");
  var opcionPastilla = document.getElementById("opcionPastilla");
  opcionTexto.addEventListener("click",bloqueTexto);
  opcionCita.addEventListener("click",bloqueCita);
  opcionMeme.addEventListener("click",bloqueMeme);
  opcionPastilla.addEventListener("click",bloquePastilla);  
}

function Post(textArea, hora, titulo){
  this.textArea = textArea;
  this.hora = hora;
  this.titulo = titulo;
};

function bloqueTexto(e){
  e.preventDefault();
  var taskContainer = document.getElementById("tasks-container");
  var divContenedor = document.createElement("div");
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
  var divTexto = document.createElement("div");
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
  var titulo = document.createElement("input");
    titulo.placeholder= "Título de la publicación";
    divTexto.insertBefore(titulo, divTexto.childNodes[1]);
  var textArea = document.createElement("textarea");
    textArea.setAttribute("rows", 3);
    textArea.setAttribute("cols", 1);
    textArea.placeholder="Escribe un comentario"; 
    divTexto.insertBefore(textArea, divTexto.childNodes[2]);    
  var btnCerrar = document.createElement("button");
    btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[3]); 
  var btnPublicar = document.createElement("button");
    btnPublicar.innerHTML= "Publicar";
    divTexto.insertBefore(btnPublicar, divTexto.childNodes[3]);        
 }

function bloqueCita(e){
  e.preventDefault();
  var taskContainer = document.getElementById("tasks-container");
  var divContenedor = document.createElement("div");
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
  var divTexto = document.createElement("div");
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
  var textArea = document.createElement("textarea");
    textArea.setAttribute("rows", 3);
    textArea.setAttribute("cols", 1);
    textArea.placeholder="Escribe una frase"; 
    divTexto.insertBefore(textArea, divTexto.childNodes[1]);  
  var titulo = document.createElement("input");
    titulo.placeholder= "Autor de la Cita";
    divTexto.insertBefore(titulo, divTexto.childNodes[2]);
  var btnCerrar = document.createElement("button");
    btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[3]); 
  var btnPublicar = document.createElement("button");
    btnPublicar.innerHTML= "Publicar";
    divTexto.insertBefore(btnPublicar, divTexto.childNodes[3]);        
 }

function bloqueMeme(e){
  e.preventDefault();
  var taskContainer = document.getElementById("tasks-container");
  var divContenedor = document.createElement("div");
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
  var divTexto = document.createElement("div");
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
  var textArea = document.createElement("textarea");
    textArea.setAttribute("rows", 3);
    textArea.setAttribute("cols", 1);
    textArea.placeholder="Pega la URL de tu Meme"; 
    divTexto.insertBefore(textArea, divTexto.childNodes[1]);  
  var btnCerrar = document.createElement("button");
    btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[2]); 
  var btnPublicar = document.createElement("button");
    btnPublicar.innerHTML= "Publicar";
    divTexto.insertBefore(btnPublicar, divTexto.childNodes[2]);        
 }

function bloquePastilla(e){
  e.preventDefault();
  var taskContainer = document.getElementById("tasks-container");
  var divContenedor = document.createElement("div");
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
  var divTexto = document.createElement("div");
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
  var textArea = document.createElement("textarea");
    textArea.setAttribute("rows", 3);
    textArea.setAttribute("cols", 1);
    textArea.placeholder="Go!"; 
    divTexto.insertBefore(textArea, divTexto.childNodes[1]);  
  var btnCerrar = document.createElement("button");
    btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[2]); 
  var btnPublicar = document.createElement("button");
    btnPublicar.innerHTML= "Pastilla";
    divTexto.insertBefore(btnPublicar, divTexto.childNodes[2]);        
 }

