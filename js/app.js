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

  var taskContainer = document.getElementById("tasks-container");
  var boxpost = document.getElementById("boxpost");
  var divContenedor = document.createElement("div");
  var divTexto = document.createElement("div");
//  var titulo = document.createElement("input");
  var textArea = document.createElement("textarea");
  var btnCerrar = document.createElement("button");
  var btnPublicar = document.createElement("button");
  var horaPost = horaPost();

function bloqueTexto(){
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
/*      titulo.placeholder= "Título de la publicación";
        divTexto.insertBefore(titulo, divTexto.childNodes[1]); */
        textArea.setAttribute("rows", 3);
        textArea.setAttribute("cols", 1);
        textArea.placeholder="Escribe un comentario";
    divTexto.insertBefore(textArea, divTexto.childNodes[2]);    
    btnCerrar.innerHTML= "Cerrar";
        divTexto.insertBefore(btnCerrar, divTexto.childNodes[3]);
        btnCerrar.addEventListener("click", function(){
          divContenedor.parentNode.removeChild(divContenedor);
        })
    btnPublicar.innerHTML= "Publicar";
        divTexto.insertBefore(btnPublicar, divTexto.childNodes[3]);
        btnPublicar.addEventListener("click", function(e){
            e.preventDefault();
/*          var inputTitulo = document.createElement("div");
            inputTitulo.innerHTML = titulo.value;
            boxpost.appendChild(inputTitulo);   */        
          var inputTexto = document.createElement("div");
            inputTexto.innerHTML = textArea.value;
            boxpost.appendChild(inputTexto);
          //inputTexto.setAttribute("id","inputTexto");
          var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
          var dateBox = document.createElement("div");
            dateBox.innerText = date;  
            boxpost.appendChild(dateBox);          
        })
    }        


function bloqueCita(){
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
        textArea.setAttribute("rows", 3);
        textArea.setAttribute("cols", 1);
        textArea.placeholder="Escribe una frase"; 
/*    divTexto.insertBefore(textArea, divTexto.childNodes[1]);  
        titulo.placeholder= "Autor de la Cita";*/
    divTexto.insertBefore(titulo, divTexto.childNodes[2]);
        btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[3]);
        btnCerrar.addEventListener("click", function(){
          divContenedor.parentNode.removeChild(divContenedor);
        })     
    btnPublicar.innerHTML= "Publicar";
        divTexto.insertBefore(btnPublicar, divTexto.childNodes[3]);        
        btnPublicar.addEventListener("click", function(e){
          e.preventDefault();         
          var inputCita = document.createElement("div");
            inputCita.innerHTML = textArea.value;
            boxpost.appendChild(inputCita);
          var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
          var dateBox = document.createElement("div");
            dateBox.innerText = date;  
            boxpost.appendChild(dateBox);             
        })
    }      

function bloqueMeme(){
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
        textArea.setAttribute("rows", 3);
        textArea.setAttribute("cols", 1);
        textArea.placeholder="Pega la URL de tu Meme"; 
    divTexto.insertBefore(textArea, divTexto.childNodes[1]);  
        btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[2]);
        btnCerrar.addEventListener("click", function(){
          divContenedor.parentNode.removeChild(divContenedor);
        })     
        btnPublicar.innerHTML= "Publicar";
    divTexto.insertBefore(btnPublicar, divTexto.childNodes[3]);        
    btnPublicar.addEventListener("click", function(e){
      e.preventDefault();
          var inputUrl = document.createElement("div");
          url.innerHTML = titulo.value;
          boxpost.appendChild(inputUrl);
          var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
          var dateBox = document.createElement("div");
            dateBox.innerText = date;  
            boxpost.appendChild(dateBox); 

        })
    }      

function bloquePastilla(){
    taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
    divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
        textArea.setAttribute("rows", 3);
        textArea.setAttribute("cols", 1);
        textArea.placeholder="What's up?"; 
    divTexto.insertBefore(textArea, divTexto.childNodes[1]);  
        btnCerrar.innerHTML= "Cerrar";
    divTexto.insertBefore(btnCerrar, divTexto.childNodes[2]);
        btnCerrar.addEventListener("click", function(){
          divContenedor.parentNode.removeChild(divContenedor);
        })    
        btnPublicar.innerHTML= "Publicar";
    divTexto.insertBefore(btnPublicar, divTexto.childNodes[3]);
        btnPublicar.addEventListener("click", function(e){
          e.preventDefault();       
          var inputPastilla = document.createElement("div");
            inputPastilla.innerHTML = textArea.value;
            boxpost.appendChild(inputPastilla);
          var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
          var dateBox = document.createElement("div");
            dateBox.innerText = date;  
            boxpost.appendChild(dateBox);             
        })
    }    

/*function Post(textArea, hora, titulo){
  this.textArea = textArea;
  this.hora = hora;
  this.titulo = titulo;
  this.imprimir
}; */