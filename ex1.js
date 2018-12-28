/* 
	Exemplo para ir aclarando o que fixemos nas fichas 
*/

// nunha xanela nova aparece:
alert('Boas');

/*
	Chisco de matemáticas: JavaScript sabe as catro regras
*/
	// as variables decláranse
	var num1; 
	var num2;
	// dámoslle un valor
	num1 = prompt('Canto vale o primeiro número? ');
	num2 = prompt('Canto vale o segundo número? ');
 // convertimos a números
	solucionado = parseInt(num1)+parseInt(num2);
	alert(solucionado);

	var num3 = 0;
	alert(num1/num3); // opsssss

// o navegador sabe HTML:
document.write('<h1>Benvidos á páxina de probas</h1>'); // podemos inserir HTML
document.write('Iremos aprendendo. '); //non fai caso dos saltos de liña
document.write('Para un salto de liña esta etiqueta HTML: <br>');
document.write('Funciona? Agora a raia <br> <hr>');

// varios caracteres entre comiñas forman unha cadea 
var resposta = prompt('que tal persoa é vostede? ');
document.write('Eu son  unha persoa ' + resposta +  '<br>'); // unha cadea detrás da outra co signo +

switch(resposta)
{
	case 'estupenda':
		document.write('POR SUPOSTO');
	break;
	case 'marabillosa':
		document.write('QUE SORTE');
	break;
	case 'guapo':
	case 'guapa':
		document.write('engreída');
	break;
	default:
		document.write('Mágoa!!<hr>');
	break;
};

// outros cadros de diálogo:
var marchamos= confirm('Deixamos este exercio? ');

if(marchamos)
{
	document.write('<br> saúdos....');
} 
else 
{
	document.write('<br> seguimos xogando.');
}