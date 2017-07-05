/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
	var largo;
	var ancho;

function Rectangulo () 
{
	
	var resultado;
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById("Ancho").value;
	resultado = 3 * [(2 * largo) + (2 * ancho)];
	alert("Se necesitan " + resultado + " metros de alambre para cercar el terreno")

}
function Circulo () 
{
	
}
function Materiales () 
{
	var cemento;
	var cal;
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById("Ancho").value;
	cemento = (largo * ancho) * 2;
	cal = (largo * ancho) * 3;
	alert("Se necesitan " + cemento + " bolsas de cemento, y " + cal + " bolsas de cal");


}