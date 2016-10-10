function horaPost (){
    var date = new Date().toLocaleTimeString(navigator.language, {hour:"2-digit", minute:"2-digit"});
	var dateBox = document.createElement("div");
	dateBox.innerText = date;  
	boxpost.appendChild(dateBox);
}


// $(function () {
//   $('select').material_select();
// });