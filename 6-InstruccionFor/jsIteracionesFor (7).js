function Mostrar()
{
	var num;
	var cont;
	var divi;
	cont = 0;
	num = prompt("Ingrese un numero");
	for (i = 1; i <= num; i++)
	{
		divi = num % i;
		if (divi == 0)
		{
			cont++;
			alert ("Divisor encontrado " + i);
		}
	}
	alert("Cantidad de divisores " + cont);


}//FIN DE LA FUNCIÓN