function Quilom(){
    
	
    var distan = parseInt(document.getElementById("txtDisnt").value);
	var quantCombus = parseInt(document.getElementById("txtQuantCB").value);
	
    var kil = distan/quantCombus;
	
					   
        
    alert("O consumo médio do veículo é: "+kil+" Km/l");       
    
}