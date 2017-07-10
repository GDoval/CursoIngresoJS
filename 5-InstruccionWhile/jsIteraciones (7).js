function Mostrar()
{
	var num;
	var cont;
	var resultado;
	var respuesta;
	cont = 0;
	resultado = 0;
	respuesta = "si";
	while (respuesta == "si") // se puede poner el confirm() aca tmb: while(confirm())
		{
			cont ++;
			num = prompt("Ingrese un numero:");
			num = parseInt(num);
			while (isNaN(num)) //se valida si se ingreso algo distinto a un numero
			{
				num = prompt("Ingrese un numero valido");
				num = parseInt(num);
			}
			resultado = resultado + num;
			respuesta = prompt("Quiere seguir ingresando numeros? "); //se puede usar tmb el confirm(), que devuelve un boolean
		}
	document.getElementById('suma').value = resultado;
	resultado = resultado / cont;
	document.getElementById('promedio').value = resultado;



}