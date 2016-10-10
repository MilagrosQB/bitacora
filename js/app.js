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
  
  var taskContainer = document.getElementById("tasks-container");
  var divContenedor = document.createElement("div");
  var boxpost = document.getElementById("boxpost");  
  var divTexto = document.createElement("div");
  var textArea = document.createElement("textarea");
  var btnCerrar = document.createElement("button");
  var btnPublicar = document.createElement("button");

  function bloqueTexto(){
      taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
      divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
      var textTitulo = document.createElement("textarea");
          textTitulo.placeholder="Título";
          divTexto.insertBefore(textTitulo, divTexto.childNodes[1]);
          divTexto.insertBefore(textArea, divTexto.childNodes[2]);
          textArea.placeholder="Escribe un comentario";      
      btnCerrar.innerHTML= "Cerrar";
          divTexto.insertBefore(btnCerrar, divTexto.childNodes[3]);
          btnCerrar.addEventListener("click", function(){
            divContenedor.parentNode.removeChild(divContenedor);
          })
      btnPublicar.innerHTML= "Publicar";
          divTexto.insertBefore(btnPublicar, divTexto.childNodes[4]);
          btnPublicar.addEventListener("click", function(e){
              e.preventDefault();       
            var inputTexto = document.createElement("div");
              inputTexto.innerHTML = textArea.value;
            var inputTitulo = document.createElement("div");
              inputTitulo.innerHTML = textTitulo.value;
              boxpost.insertBefore(inputTitulo,boxpost[0]);
              boxpost.insertBefore(inputTexto,boxpost[1]);
            var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
            var BoxDate = document.createElement("div");
              BoxDate.innerText = date;  
              boxpost.appendChild(BoxDate);              
              textArea.value = "";
              textTitulo.value = "";         
          })
      }        

  function bloqueCita(){
      taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
      divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
          textArea.placeholder="Escribe una frase"; 
      var textAutor = document.createElement("textarea");
          textAutor.placeholder = "Autor";
          divTexto.insertBefore(textArea, divTexto.childNodes[1]);
          divTexto.insertBefore(textAutor, divTexto.childNodes[2]);          
          btnCerrar.innerHTML= "Cerrar";
      divTexto.insertBefore(btnCerrar, divTexto.childNodes[3]);
          btnCerrar.addEventListener("click", function(){
            divContenedor.parentNode.removeChild(divContenedor);
          })     
      btnPublicar.innerHTML= "Publicar";
          divTexto.insertBefore(btnPublicar, divTexto.childNodes[4]);        
          btnPublicar.addEventListener("click", function(e){
            e.preventDefault();         
            var inputCita = document.createElement("div");
                inputCita.innerHTML = textArea.value;
            var inputAutor = document.createElement("div");
                inputAutor.innerHTML = textAutor.value;
              boxpost.insertBefore(inputCita,boxpost[0]);
              boxpost.insertBefore(inputAutor,boxpost[1]);         
            var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
            var BoxDate = document.createElement("div");
              BoxDate.innerText = date;  
              boxpost.appendChild(BoxDate);
              textArea.value = "";
              textAutor.value = "";                 
          })
      }      

  function bloqueMeme(){
      taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
      divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
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
            var inputUrl = document.createElement("img");
            inputUrl.setAttribute("src",textArea.value);
            boxpost.appendChild(inputUrl);
            var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
            var BoxDate = document.createElement("div");
              BoxDate.innerText = date;  
              boxpost.appendChild(BoxDate); 
              textArea.value = "";
          })
      }      


  function bloquePastilla(){
      taskContainer.insertBefore(divContenedor,taskContainer.childNodes[0]);
      divContenedor.insertBefore(divTexto, divContenedor.childNodes[0]);
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
            var BoxDate = document.createElement("div");
              BoxDate.innerText = date;  
              boxpost.appendChild(BoxDate); 
              textArea.value = "";                  
          })
      }    

/*function Post(textArea, hora, titulo){
  this.textArea = textArea;
  this.hora = hora;
  this.titulo = titulo;
  this.imprimir
}; */