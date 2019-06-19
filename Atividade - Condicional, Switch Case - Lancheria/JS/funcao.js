function x(){
    var codigo = parseInt(document.getElementById("txtCod").value);
    var quantidade = parseInt(document.getElementById("txtQuant").value);
    
    switch(codigo){
        case 1:
            result = 4.00*quantidade;
            alert("A conta ficou: "+result+" reais");
            break;
        case 2:
            result = 4.5*quantidade;
            alert("A conta ficou: "+result+" reais");
            break;
        case 3:
            result = 5.00*quantidade;
            alert("A conta ficou: "+result+" reais");
            break;
        case 4:
            result = 2.00*quantidade;
            alert("A conta ficou: "+result+" reais");
            break;    
        case 5:
            result = 1.50*quantidade;
            alert("A conta ficou: "+result+" reais");
            break;
        
            
    }
}