function vetor(){
   	
    mes = new Array(12);
	
	var txt = "";
	
	var somador = 0;
	
	//var ref = 0; #Referencia para retirar o maior valor, sendo assim, ref inicial = 0.
	
    
    for(var i = 0; i<12; i++){
		
        mes[i] = +prompt("Informe o "+(i+1)+".º mês");
		
		somador = somador + mes[i];
		
		txt = txt +"\n"+(i+1)+".º Mês = "+mes[i]+"°C";
		
		/*if(mes[i] > ref){
			ref = mes[i]     #Maneira de retirar o maior valor.
		}    */
		
		
		
		
    }
	var max = Math.max.apply(null, mes);    
	
	var min = Math.min.apply(null, mes);
	
	var media = somador / 12;
	
    alert("Relatório Anual\n"+txt+'\n\nA média de todas as temperaturas é: '+media.toFixed(2)+"\nA temperatura mínima registrada foi: "+min+"\nA temperatura máxima registrada foi: "+max);
}

























function mediaTemp(){
    
    mes = new Array(12);
    var somador = 0;
    
    var ref = 0;
    
    var txt = " ";
    
    var resultI = " ";
    
    var resultII = " ";
    
    for( var i = 0; i<12; i++){
        //entrada
        mes[i] = +prompt("Informe a temperatura: "+(i+1));
        //processamento: soma das notas
        somador = somador + mes[i];
        
        txt = txt + "\n"+"Temperatura "+(i+1)+" = "+mes[i];
        
        if( mes[i] > ref ){
            ref = mes[i]
            
            resultI = "A maior temperatura é :"+ref;
           
        }
        if( mes[i] < ref ){
            ref = mes[i]
            
            resultII = "A menor temperatura é :"+ref;
           
        }
           
    }
    
      
    //processamento: calculo da média
    var media = somador / 3;
    //saída
    //alert("Notas: "+notas +"\n Média: "+media);
    alert(txt + "\n\n A média de todas as temperaturas é: "+media+'\n'+resultI+'\n'+resultII);
    
    
    
    
    
    
}




/* var maior = 0;
for (var i = 0; i < meuArray.length; i++) {  # Loop para verificar qual espaço de memória usado pelo vetor tem o maior valor. 
   if ( meuArray[i] > maior ) {
      maior = meuArray[i];  #Vai salvando a maior Array comparando com a anterior, usando a variavel maior = 0, como o início é vazio, inicia sem nada e vai adicionando caso satisfacaça o if ( Meu array posicao x > que o                        #ultimo array visto? ou no caso do exemplo até o ultimo espaco do vetor -> usa-se )
   }
} */ 
                    