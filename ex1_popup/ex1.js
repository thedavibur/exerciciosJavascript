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

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('¿te gusta la pizza con piña? ');

if(marchamos)
{
	document.write('<br> ERES PUTO RETRASADO, '+ dato);
} 
else 
{
	document.write('<br> Al menos sabes comer, '+ dato);
}
