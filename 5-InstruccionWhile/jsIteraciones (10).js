function Mostrar()
{
	var num;
	var sumamax = 0;
	var sumamin = 0;
	var cantmax = 0;
	var cantmin = 0; 
	var cantcero = 0;
	var cantpar = 0;
	var promediomax = 0;
	var promediomin = 0;
	var diferencia = 0;
	var respuesta = "si";
	while (respuesta == "si")
	{
		num = prompt("Ingrese un numero");
		num = parseInt(num); //SIEMPRE PARSEAR EL NUMERO SINO ENTRA COMO STRING!!!!
		if (num > 0 )
		{
			sumamax = sumamax + num ;
			cantmax ++;
		}
		else
		{
			if (num < 0)
			{
				sumamin = sumamin + num;
				cantmin++; 
			}
			else
			{
				cantcero++;
			}
		}
		if (num % 2 == 0)
		{
			cantpar++;
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");

	}
	if (cantmax > 0 )
		{
			promediomax = sumamax / cantmax;
		}
		else
		{
			promediomax = "No se ingresaron numeros positivos";
		}
	if (cantmin > 0)
		{
			promediomin = sumamin / cantmin;
		}
		else
		{
			promediomin = "No se ingresaron numeros negativos";
		}	
	diferencia = cantmin - cantmax; // siempre tiene que dar positivo (diferencia entre cantidad numeros positivos y negativos ingresados)
	if (diferencia < 0) 
		{
			diferencia = diferencia * -1; //si es negativo lo pasa a positivo.
		}
	document.write("La suma de los positivos es " + sumamax + ", la suma de los negativos es " + sumamin + ", la cantidad de ceros es " + cantcero + ", la cantidad de numeros pares es " + cantpar + ", el promedio de los positivos es " + promediomax + ", el promedio de los negativos es " + promediomin + ", la diferencia entre positivos y negativos es " + diferencia);

		
		


}