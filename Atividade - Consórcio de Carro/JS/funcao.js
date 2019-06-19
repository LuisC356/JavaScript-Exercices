function Contas(){
    var nome = document.getElementById("txtName").value;
	
    var quantT = parseInt(document.getElementById("txtQuant").value);
	var quantPag = parseInt(document.getElementById("txtQuantPG").value);
	var val = parseInt(document.getElementById("txtVr").value);
    
    var	 pago = val*quantPag ;
    var deved = (quantT*val) - (quantPag*val);
	

	   
        
    alert(nome+" você já pagou "+pago+" R$, resta de sua divida: "+deved+" R$" );       
    
}