function Mostrar()
{
	var num;
	var resp;
	num = prompt("Ingrese un numero");
	resp ="El numero " + num + " es primo";
	for (i = 2; i < num; i++)
	{
		if ( num % i == 0 )
		{
			resp ="El numero " + num + " no es primo";
			break;
		}
	
	}
	alert(resp);
	
}//FIN DE LA FUNCIÓN