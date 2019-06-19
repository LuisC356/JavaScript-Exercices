function Contas(){
    var nome = document.getElementById("txtName").value;
	
	var horast = parseInt(document.getElementById("txtHT").value);
	var valorH = parseInt(document.getElementById("txtVH").value);
	var quantPD = parseInt(document.getElementById("txtPD").value);
	
	var salBruto = (horast*valorH)+(50 * quantPD);
	var descINI = (0.085 * salBruto);
	var descINII = (0.09 * salBruto);
	var descIRI = (0);
	var descIRII = (0.05 * salBruto);
	var descIRIII = (0.07 * salBruto);
	var salLM = (salBruto - descINI - descIRI);
	var salLMe = (salBruto - descINII - descIRII);
	var salLMa = (salBruto - descINII - descIRIII);
			
				
	
	if( salBruto <= 1000 ){
				
		alert("Folha Salárial: "+nome+"\nHoras Trabalhadas: "+horast+" hora(s)\nSalário Hora: R$ "+valorH+"\nNumero de dependentes: "+quantPD+" pessoas"+"\nAdicional de dependentes: R$ 50,00 \nSalário Bruto: R$ "+salBruto+"\nDesconto INSS: R$ "+descINII.toFixed(2)+"\nDesconto IR: R$ "+descIRI.toFixed(2)+"\nSalário Líquido: R$ "+salLM.toFixed(2));
		
		
	}else if( salBruto > 1000 && salBruto <= 1500 ){
		
		alert("Folha Salárial: "+nome+"\nHoras Trabalhadas: "+horast+" hora(s)\nSalário Hora: R$ "+valorH+"\nNumero de dependentes: "+quantPD+" pessoas"+"\nAdicional de dependentes: R$ 50,00 \nSalário Bruto: R$ "+salBruto+"\nDesconto INSS: R$ "+descINI.toFixed(2)+"\nDesconto IR: R$ "+descIRII.toFixed(2)+"\nSalário Líquido: R$ "+salLMe.toFixed(2));
		
	}else{
	
	alert("Folha Salárial: "+nome+"\nHoras Trabalhadas: "+horast+" hora(s)\nSalário Hora: R$ "+valorH+"\nNumero de dependentes: "+quantPD+" pessoas"+"\nAdicional de dependentes: R$ 50,00 \nSalário Bruto: R$ "+salBruto+"\nDesconto INSS: R$ "+descINII.toFixed(2)+"\nDesconto IR: R$ "+descIRIII.toFixed(2)+"\nSalário Líquido: R$ "+salLMa.toFixed(2));
}
	
  
    
}