function Mostrar()
{
	var num;
	var cont;
	var resto;
	cont = 0;
	num = prompt("Pasame un numero");
	for (i = 1; i <= num; i++ )
	{
		resto = i % 2;
		if (resto == 0)
		{
			cont++;
			alert("Numero par encontrado: " + i);
		}
	}
	alert("Cantidad de pares: " + cont);


}