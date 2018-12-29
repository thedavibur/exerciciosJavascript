/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: function
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Páxina do bucle FOR </h1>')

document.write('<h3>☞ Facer algo cinco veces</h3>');
for (var i=0; i<= 5; i++) {
	document.write('quieres que te cuente el cuento de la buena pipa? ');
}


document.write('<h3>☞ Aprender a contar ata 10</h3>');
for (var i=0; i<= 10; i++) {
	document.write(i +', ');
}

document.write('<h3>☞ Aprender a contar ata 44 de cinco en cinco comezando en 10</h3>');
for (var i=10; i<= 44; i=i+5) {
	document.write(i +', ');
}

document.write('<h3>☞ Outra canción infantil</h3>');
for (var i=2; i<= 10; i++) {
	document.write(i +' elefantes se balanceaban sobre la tela... ');
}