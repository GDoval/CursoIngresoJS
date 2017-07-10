function Mostrar()
{
	var num;
	var respuesta;
	var max;
	var min;
	var primera;
	primera = true;
	respuesta = "si";
	while (respuesta == "si")
		{
			num = prompt("Ingrese un numero");
			if (primera == true) //Se hace para validar si es la primera vez que se corre el programa. Asi, el mismo numero es el mayot y el menor (si es que el usuario no sigue ingresando numeros)
			{
				max = num;
				min = num;
				primera = false;
			}
			else
			{
				if (num < min)
				{
					min = num;
									}
				else
				{
					if (num > max)
					{
						max = num;
						
					}
				}
			}

			respuesta = prompt("Quiere seguir cargando numeros? ");
			
		}
		
		document.getElementById("maximo").value = max;
		document.getElementById('minimo').value = min;

}