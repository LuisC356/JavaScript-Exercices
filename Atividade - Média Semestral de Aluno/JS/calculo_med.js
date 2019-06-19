function calculo_media(){
    
	var notaI = parseFloat(document.getElementById("txtNota1").value);
	var notaII = parseFloat(document.getElementById("txtNota2").value);
	var notaIII = parseFloat(document.getElementById("txtNota3").value);
    
	var nome = document.getElementById("txtNome").value;

	// Cálculos
	var media = (notaI + notaII + notaIII)/3;
	
	//Condição

	
	if(media > 7){

		alert(nome+",\n\nSua média é: "+media+"\nParabéns você está Aprovado!");

	} else if(media >= 4 && media < 7 ){

		alert(nome+",\n\nSua média é: "+media+"\nCudiado, você está em recuperação!");
        
	} else if(media < 4 ){
        
		alert(nome+",\n\nSua média é: "+media+"\nVocê está reprovado!");
		

	}else{

		alert(nome+",\nOcorreu algum erro!");
	}
	
	
}