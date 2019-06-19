function Li(){
         var nome = document.getElementById("txtNo").value;
    var quantidade = parseInt(document.getElementById("txtQuant").value);
    
    
    var Pr1 = (0.25 *  quantidade)+7.50;
	var	Pr2 = (0.50  * quantidade)+2.50;

			
	if(Pr1 > Pr2){
		
		alert(nome+",\n\nA melhor promoção é a PromoçãoII !!\n PromoçãoI = "+Pr1+"\n PromoçãoII = "+Pr2);
		
		
		
	} else if(Pr1 == Pr2){
		
		alert(nome+"\n\nA duas promoções são iguais !!\n PromoçãoI = "+promoI+"\n PromoçãoII = "+promoII);
		
   
    }else{
        
        alert(nome+"\n\nA melhor promoção é a PromoçãoI !!\n PromoçãoI = "+Pr1+"\n PromoçãoII = "+Pr2);
        
    }   

}