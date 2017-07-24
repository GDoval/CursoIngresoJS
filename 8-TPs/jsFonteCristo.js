/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo 
 nos está pidiendo una aplicación que verifique 
las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta
 el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado
 hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este
 número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el 
número ingresado hasta el cero.
*/
function NumerosPares()
{
	var num;
	var cont;
	cont = 0;
	num = prompt("Ingrese un numero positivo: ");
	while (num < 0)
	{
		num = prompt("Dije un numero positivo: ")
	}
	for (i = 1; i <= num; i++)
	{
		if (i % 2 == 0)
		{
			cont++;
		}
	}
	alert("Cantidad de numeros pares: " + cont);

}// Funciona

			
 
function NumerosImpares ()
{
	var num;
	var cont;
	cont = 0;
	num = prompt("Ingrese un numero positivo: ");
	while (num < 0)
	{
		num = prompt("Dije un numero positivo: ")
	}
	for (i = 1; i <= num; i++)
	{
		if (!(i % 2 == 0))
		{
			cont++;
		}
	}
	alert("Cantidad de numeros impares: " + cont);

}// Funciona
 	
function NumerosDivisibles()
{
	var num;
	var cont;
	cont = 0;
	var canti;
	canti = [];
	num = prompt("Ingrese un numero positivo: ");
	while (num < 0)
	{
		num = prompt("Dije un numero positivo: ")
	}
	for (i = 1; i <= 100; i++)
	{
		if (num % i == 0)
		{
			cont++;
			canti.push(i);
		}
	}
	alert("Cantidad de divisores: " + cont + " divisores encontrados: " + canti);
}// Funciona

function  VerificarPrimo()
{
	var num;
	var resp;
	num = prompt("Ingrese un numero positivo: ");
	resp = "El numero " + num + " es primo";
	while (num < 0)
	{
		num = prompt("Dije un numero positivo: ")
	}
	for (i = 2; i < num; i++)
	{
		if ( num % i == 0 )
		{
			resp ="El numero " + num + " no es primo";
			break;
		}
	
	}
	alert(resp);
} // Funciona

function NumerosPrimos()
{
	var num;
	var cont;
	var primo;
	var f;
	cont = 0;
	f = 2;
	num = prompt("Ingrese un numero positivo: ");
	while (num < 0)
	{
		num = prompt("Dije un numero positivo: ")
	}
	for (i = 1; i <= num; i++)
	{
		while( f != num)
		{
			if ((i % f == 0) && (i != 1))
			{
				cont++
			} 
			f++;
		}
		f = 2;
	}
	alert("Cantidad de numeros primos: " + cont);
}
