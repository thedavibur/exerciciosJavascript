/* 
	Código en JavaScript
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
var dato; //declaramos unha variable para gardar a resposta
dato = prompt('Cal es tu Nombre?');
alert('pues la verdad que es una puta mierda, '+ dato);


// o navegador sabe HTML:
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h4>Bienvenidos a la página del ex1.js</h4>'); // podemos inserir HTML
document.write('Iremos aprendiendo. <br> '); //non fai caso dos saltos de liña
document.write('Para un salto de linea usamos la etiqueta HTML: <br> ');
document.write('Funciona? Recordemos la ralla: <hr> ');

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('¿te gusta la pizza con piña? ');

if(marchamos)
{
	document.write('<br> Saludos.... '+ dato);
} 
else 
{
	document.write('<br> Entonces seguimos jugando, '+ dato);
}



(document).ready(function() {
  ('#btn').on('click', function () {
    myApp.confirm('Are you sure?', 'Title', function () {
      ('.btn-no').text("No");
      ('.btn-yes').text("Yes");
  });
});