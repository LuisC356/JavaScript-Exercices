function calculoIdade(){
	var ano_atual = parseInt(document.getElementById("txtAnoAtual").value);
	var ano_nascimento = parseInt(document.getElementById("txtNascimento").value);
	var nome = document.getElementById("txtNome").value;

	// Cálculos
	var idade = ano_atual - ano_nascimento;
	var idade2050 = 2050 - ano_nascimento;
	
	//Mensagens
	alert(nome+",\nVocê tem "+idade+" anos.\nEm 2050 você terá "+idade2050+" anos.")
}