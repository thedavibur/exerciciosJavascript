/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> TICKET DE COMPRA </h1>')

// as variables decláranse
var num1; 
var num2;
var num3;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('Cuánto vale el primer producto? ');
num2 = prompt('Cuánto vale el segundo producto? ');
num3 = prompt('Cuánto vale el tercer producto? ');
// convertimos a números
document.write('Producto1......................'+num1+'<br>');
document.write('Producto2......................'+num2+'<br>');
document.write('Producto3......................'+num3+'<br>');
document.write('<br>');

var solucionado = parseInt(num1)+parseInt(num2)+parseInt(num3);
document.write('TOTAL...........................'+ solucionado+'<br>');


var iva = solucionado/(1.21)
document.write('TOTAL SIN IVA.................................'+ iva +'<br>');
document.write('IVA.................................' + (solucionado-iva));
