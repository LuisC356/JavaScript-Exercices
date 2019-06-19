function calculo(){
	var alt = parseFloat(document.getElementById("txtAltura").value);
	var pes = parseFloat(document.getElementById("txtPeso").value);
	
	var nome = document.getElementById("txtNome").value;

	// Cálculos
	var imc = pes/(alt * alt);
	
	//Condição

	
	if(imc < 18.5){

		alert(nome+", \n\nCuidado, você está abaixo do peso ideal! Seu IMC é: "+imc.toFixed(2));

	} else if(imc >= 18.5 && imc <25 ){

		alert(nome+", \n\nParabéns você está com o peso ideal! Seu IMC é: "+imc.toFixed(2));
	} else if(imc >= 25 && imc <30 ){
		alert(nome+", \n\nCuidado, você está acima do peso ideal! Seu IMC é: "+imc.toFixed(2));
		

	}
	else{

		alert(nome+", \n\nVá a um médico! Você está com obesidade! Seu IMC é: "+imc.toFixed(2));
	}
	
	
}