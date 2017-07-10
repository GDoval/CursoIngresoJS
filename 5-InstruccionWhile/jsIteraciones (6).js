function Mostrar()
{

	var numero;
	var cont;
	cont = 0;
	var  resultado;
	resultado = 0; //se inicializa en 0 asi no toma el valor undefined (undefined + 6 = undefined)
	while (cont < 5 )
		{
			cont ++;
			numero = prompt("Ingrese un número: ");
			numero = parseInt(numero);
			console.log(numero);
			while (isNaN(numero)) // se valida que se haya ingresado un numero. NaN  == NaN SIEMPRE da False, por lo que se usa la funcionn isNaN() que devuelve True cuando la variable es NaN
			{
				numero = prompt("Ingrese un numero valido: ");
				numero = parseInt(numero);
			}
			resultado = resultado + numero;
		}
		document.getElementById('suma').value = resultado;
		resultado = resultado / cont; 
		document.getElementById('promedio').value = resultado;


}