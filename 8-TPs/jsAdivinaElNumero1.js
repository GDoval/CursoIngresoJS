/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 1;

function comenzar()
{
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto);
}

function verificar()
{
	var numero;
	numero = document.getElementById('numero').value;

	while (numero != numeroSecreto)
	{	
		if (numero < numeroSecreto)
		{
			alert("Te falta para llegar!!!");
			contadorIntentos += 1;
			numero = prompt("Volve a ingresar un numero!!!");

		}
		else
		{
			alert("Te pasaste!!!!!!!");
			contadorIntentos += 1;
			numero = prompt("Volve a ingresar un numero!!!");

		}

	}


	alert("Acertaste en " + contadorIntentos + " intentos!!!!");
	document.getElementById('intentos').value = contadorIntentos;
	contadorIntentos = 1;
	
}