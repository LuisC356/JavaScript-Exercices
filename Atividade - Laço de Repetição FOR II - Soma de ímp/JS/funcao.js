function fatorial(){
    var ValorA = parseInt(document.getElementById('txtValorI').value);
    var ValorB = parseInt(document.getElementById('txtValorII').value);
    
    var soma=0;
       
    for(var a = ValorA+1; a <= ValorB; a++){
		
			if(a % 2 !=  0){
				
				soma = soma + a;
				
										
				
			}else{
				
				continue;
				
			}
        } 
		
alert("A soma dos números impares entre "+ValorA+" e "+ValorB+" é igual a "+soma+" !");
		
        
    }

    
   
 

