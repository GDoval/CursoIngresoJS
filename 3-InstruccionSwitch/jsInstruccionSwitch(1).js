function Mostrar()
{

var mesDelAño;
mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
	case "Enero":
		alert("Que comienzes bien el año!!!");
		break;
	case "Marzo":
		alert("A clases!!!!");
		break;
	case "Julio":
		alert("Eeeeeeehh vacaciones!!!!");
		break;
	case "Diciembre":
		alert("Felices Fiestas");
		break;
	default:
		alert("Nada para ti");
		break;
}




}//FIN DE LA FUNCIÓN