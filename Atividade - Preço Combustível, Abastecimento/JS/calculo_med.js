function calculo_combus(){
	var preço = parseFloat(document.getElementById("txtValorC").value);
	var valor_pago = parseFloat(document.getElementById("txtValorA").value);
	
	// Cálculos
	var conta = valor_pago/preço;
	
			alert("Você consegue abastecer: "+conta.toFixed(2)+" litros de gasolina a "+preço+"/litro.");
	
	
	
}