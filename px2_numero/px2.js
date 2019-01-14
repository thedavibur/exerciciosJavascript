
// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio)

var escolle = prompt('Cal é  o número misterioso menor ca 10? ')
while (escolle != misterio)
{
	if (escolle > misterio)
	{
		document.write('O número misterioso é menor ca o teu'+'<br>');
	}
	else (escolle < misterio)
	{
		document.write('O número misterioso é maior ca o teu'+'<br>')
	}
	
	escolle = prompt('Cal é  o número misterioso menor ca 10? ')
}

	document.write('Felicidades! acertaches.'+'<br>')

document.write('<br>'+'<br>'+'O número misterioso era: '+misterio);
