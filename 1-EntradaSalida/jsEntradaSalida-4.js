/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato;
	var dato2;
	dato = prompt ("Ingresame un dato, porfi");
	dato2 = document.getElementById(dato).value;
	alert (dato2);
}

