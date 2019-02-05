/* 
	Código en JavaScript
	Nome do ficheiro: ex9.js
	Usado: getElementById(), innerHTML
	*/

/*	
	Este ficheiro só contén as funcións. Todo o demáis está no .html
	*/


//https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
function cambiarCor(colorin) {
	var letras = document.getElementById('textito');
	letras.style.color = colorin;
}





function linea_arriba() {
  var linea_up = document.getElementById("textito");
  linea_up.style.textDecoration = "overline";
}

function linea_baixo() {
  var linea_down = document.getElementById("textito");
  linea_down.style.textDecoration = "underline";
}

function linea_ambas() {
  var lineas = document.getElementById("textito");
  lineas.style.textDecoration = "underline overline";
}

function de_cero() {
  var cero = document.getElementById("textito");
  cero.style.textDecoration = "initial";
}




function procesarDatos(){
	var aa;
	var nn;
	aa = document.getElementById('apelido').value;
	nn = document.getElementById('nome').value;
	alert('Vostede é ' + nn +' '+ aa);
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
function cambiarTexto() {
	document.getElementById("parrafada").innerHTML = "Xa cho dicía eu...";
}

function consultarHora() {
	var agora=Date();
	document.getElementById("hora").innerHTML = agora;
}