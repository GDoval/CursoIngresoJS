/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
 brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var proveedor;
 	var resultado;
 	var descuento;
 	var impuesto;
 	cantidad = document.getElementById('Cantidad').value;
 	proveedor = document.getElementById("Marca").value;
 	cantidad = parseInt(cantidad);
 	if (cantidad >= 6)
 	{
 		resultado = (cantidad * 35) * 0.50 ;
 		if (resultado > 120)
 		{
 			impuesto = resultado * 0.10;
 			resultado = resultado + impuesto;
 			alert ("Usted pagó $" + impuesto + " de impuestoss");
 		}
 		document.getElementById("precioDescuento").value =  resultado;

 	}
 	else
 	{
 		if (cantidad == 5 && proveedor == "ArgentinaLuz")
 		{
 			resultado = cantidad * 35;
 			descuento = resultado - (resultado * 0.4);
 			if (descuento > 120)
 			{
 				impuesto = descuento * 0.10;
 				descuento = descuento + impuesto;
 				alert ("Usted pagó $" + impuesto + " de impuestos");
 			}
 			document.getElementById ("precioDescuento").value = descuento;
 		}
 		else
 		{
 			if (cantidad == 5 && proveedor != "ArgentinaLuz") //redundante poner si no es ArgLuz, ya que entró en el else de la primer condición
 			{
 				resultado = cantidad * 35;
 				descuento = resultado - (resultado * 0.3);
 				if (descuento > 120)
 				{
 					impuesto = descuento * 0.10;
 					descuento = descuento + impuesto;
 					alert ("Usted pagó $" + impuesto + " de impuestos");
 				}
 				document.getElementById("precioDescuento").value = descuento;
 			}
 		
 			else
 			{
 				if ((cantidad == 4) && ((proveedor == "ArgentinaLuz") || (proveedor == "FelipeLamparas")))
 				{
 					resultado = cantidad * 35;
 					descuento = resultado - (resultado * 0.25);
 					if (descuento > 120)
 					{
 						impuesto = descuento * 0.10;
 						descuento = descuento + impuesto;
 						alert ("Usted pagó $" + impuesto + " de impuestos");
 					} 
 					document.getElementById("precioDescuento").value = descuento;
 				}
 				else
 				{
 					if ((cantidad == 4) && ((proveedor != "ArgentinaLuz") && (proveedor != "FelipeLamparas"))) //redundante aca tmb, ya se pregunto en el if anterior
 					{
 						resultado = cantidad * 35;
 						descuento = resultado - (resultado * 0.20);
 						if (descuento > 120)
 						{
 							impuesto = descuento * 0.10;
 							descuento = descuento + impuesto;
 							alert ("Usted pagó $" + impuesto + " de impuestos");
 						}
 						document.getElementById("precioDescuento").value = descuento;
 					}
 					else
 					{
 						if ((cantidad == 3) && proveedor == "ArgentinaLuz")
 						{
 							resultado = cantidad * 35;
 							descuento = resultado - (resultado * 0.15);
 							if (descuento > 120)
 							{
 								impuesto = descuento * 0.10;
 								descuento = descuento + impuesto;
 								alert ("Usted pagó $" + impuesto + " de impuestos");
 							}
 							document.getElementById("precioDescuento").value = descuento;
 						}
 						else
 						{
 							if ((cantidad == 3) && proveedor == "FelipeLamparas")
 							{
 								resultado = cantidad * 35;
 								descuento = resultado - (resultado * 0.10);
 								if (descuento > 120)
 									{
 										impuesto = descuento * 0.10;
 										descuento = descuento + impuesto;
 										alert ("Usted pagó $" + impuesto + " de impuestos");
 									}
 								document.getElementById("precioDescuento").value = descuento;
 							}
 							else
 							{
 								if ((cantidad == 3))
 								{
 									resultado = cantidad * 35;
 									descuento = resultado - (resultado * 0.05);
 									document.getElementById('precioDescuento').value = descuento;
 								}
 								else
 								{
 									if (cantidad < 3 && cantidad > 0)
 									{
 									resultado = cantidad * 35;
 									document.getElementById("precioDescuento").value = resultado;	
 									}
 									
 								}
 							}
 									
 							}
 						}
 					}
 				}
 		
 			}
 		}
 	}

