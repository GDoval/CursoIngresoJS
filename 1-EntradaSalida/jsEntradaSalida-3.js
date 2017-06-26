/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
    var nombre;
	nombre = document.getElementById("elNombre").value; 
    /* el document.algo inspecciona el codigo html
    buscando el string que se le pasa como argumento. El .value trae el valor asociado o guardado en el codigo html y puede ser alojado en una variable, previamente declarada */
    alert (nombre);

}


