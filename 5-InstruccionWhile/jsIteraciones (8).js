function Mostrar()
{
	var num;
	var cont;
	var negativo;
	var resultado;
	var respuesta;
	cont = 0; // no hace falta en este ejercicio :P
	resultado = 0;
	respuesta = "si";
	negativo = 1;
	while (respuesta == "si")
		{
			cont++;
			num = prompt("Ingrese un numero:");
			num = parseInt(num);
			while(isNaN(num))
			{
				num = prompt("Ingrese un numero valido: ");
				num = parseInt(num);
			}
			if (num >= 0) //mayor igual a cero xq sino el cero cae en la multiplicacion de los negativos y rompe la misma (siempre da cero)
			{
				resultado = resultado + num; 
			}
			else
			{
				negativo = negativo * num;
			}
			respuesta = prompt("Quiere seguir ingresando numeros? ");
		}
	document.getElementById('suma').value = resultado;
	document.getElementById('producto').value = negativo;

}