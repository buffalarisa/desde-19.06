
	/* setear la fecha para la cuenta regresiva */
	var fechaCuentaReg = new date("Aug 1, 2019 00:00:00").getTime(); 
	/* actualizar la cuenta regresiva cada segundo */
	var x = setInterval(function () 
		/* capturar la fecha y hora de hoy */{  
			var ahora = new date () .getTime();  /* encontrar la distancia entre ahora y la fecha limite de esta cuenta regresiva */
			var distancia = fechaCuentaReg-ahora; 
			/* calculo de tiempo para dias, horas, minutos y segundos */
			var dias = Math.floor(distancia / (1000*60*60*24));
			var horas= Math.floor((distancia % (1000*60*60*24))/(1000*60*60)); 
			var minutos= Math.floor((distancia % (1000*60*60)) / (1000*60)); 
			var segundos= Math.floor((distancia % (1000*60)) /1000); 
			/* motrar el resultado en un elemento con la id demo */
	
	document.getElementById('demo').InnerHTML = dias + "d " + horas + "h " + minutos + "m " + segundo + "s "; 
/* si la cuenta regresiva termino escribimos algun ttexto  */
if (distancia<0) {clearinterval (x);
document.getElementById("demo").InnerHTML = "expirado"; 
	}	
}  
