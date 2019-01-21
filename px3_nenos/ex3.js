// /*/* 
// 	Código en JavaScript
// 	Nome do ficheiro: ex3.js
// 	Usado: function
// */

// /*	
// 	Función sen parámetros
// */
// function saudar () {
// 	var dato='todos';
// 	alert('Moi boas a '+ dato);
// }


// /*	
// 	Función á que lle pasamos un parámetro e fai o que lle pedimos
// */
// function cotillear(algo) {
// 	document.write('<br> Que tal estás '+ algo);
// }

// /*	
// 	Función á que lle pasamos dous parámetros e devolve un valor
// */
// function calcularMedia(n1,n2) {
// 	final=(n1+n2)/2;
// 	return final
// }


// document.write('<img src="../logo.png" alt="Algo falla no logo">');
// document.write('<h1>Traballamos con funcións</h1>');

// document.write('Algunhas veñen predefinidas: <code>alert(), prompt(), parseInt()</code> <br>');
// document.write('Outras están na biblioteca <i>Math</i> como <code>Math.random(), Math.round()</code> <br>');
// document.write('<hr>Podemos definir nós mesmos funcións: <code>saudar(), cotillear(), calcularMedia()</code><br>');
// document.write('O resultado das chamadas será:  <hr>');


// //chamada á función saudar()
// saudar();

// document.write('Chamada á función <code>cotillear()</code><br>');
// cotillear('Mari');
// cotillear('Toni');
// cotillear('Xan');

// document.write('<hr>Chamada á función <code>calcularMedia()</code>');
// var nota=calcularMedia(5,4);
// document.write('<br> A túa nota final é... '+ nota);*/









// function despedir(){
// 	alert('adeus')
// }

// despedir();


var boton=1;

while(boton){

	var n1= parseInt(prompt('¿Número 1?'))
	var n2= parseInt(prompt('¿Número 2?'))

	function suma (n1, n2){
		resposta = ((n1+n2));
		return resposta;
		
	}

	function resta (n1, n2){
		resposta = ((n1-n2));
		return resposta;
		
	}

	function multiplicacion (n1, n2){
		resposta = ((n1*n2));
		return resposta;
		
	}

	suma=suma(n1, n2);
	alert(suma);
	document.write('La suma de '+n1+' y '+n2+' es: '+suma+'<br>');

	resta=resta(n1, n2);
	alert(resta);
	document.write('La resta de '+n1+' y '+n2+' es: '+resta+'<br>');

	multiplicacion=multiplicacion(n1, n2);
	alert(multiplicacion);
	document.write('La multiplicacion de '+n1+' y '+n2+' es: '+multiplicacion+'<br>'+'<br>'+'<br>');

	boton = confirm('¿Quieres probar otros números?')

}