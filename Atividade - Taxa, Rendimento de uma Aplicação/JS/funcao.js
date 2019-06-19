function rend(){
	
			var depos = parseFloat(document.getElementById("txtDepos").value);
			var taxa_rend = parseFloat(document.getElementById("txtTaxa").value);
			
			/* Crie um algoritimo que leia um valor de um deposito e o valor da taxa de rendimento ao mes em uma aplicacao. calcule
				e imprima o valor do rendimento e o valor total após o rendimento, após um mê. */
	
			var valor_rend = depos * (taxa_rend/100) ;
			var rend_men = depos * (1 + (taxa_rend/100)); 
			
		
			alert("O valor do rendimento é:  "+"R$"+valor_rend+" \nAinda, o valor do rendimento mensal é: "+rend_men);
			
			
			
			
		}