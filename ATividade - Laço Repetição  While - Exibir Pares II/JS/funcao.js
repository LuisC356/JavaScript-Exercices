function quadrado(){
	
    var ValorInicial = parseInt(document.getElementById('txtValorI').value);
    
	
	a = 2
    var txt = " "
	
	while(ValorInicial >= a){
		
		if(ValorInicial % 2 == 0){
			
			txt = txt + '\nO número Par: '+ValorInicial+' Ao quadrado resulta em: '+ValorInicial**2;
			
			ValorInicial -= 2;
			
		}
		else{
			txt = txt + '\nEsse número é impar!';
			
			break
			
		}
		
		
		
		
		
	}				
	alert(txt);		
}			
				
			
			
			
			
			
			
			
			
			
		
		
		
		
		
		
	
			
	

	
    
    
        
    
    
   
    
    

