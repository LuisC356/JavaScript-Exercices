function mes(){
    var mes = parseInt(document.getElementById("txtMes").value);
    
    switch(mes){
        case 1:
            alert("Mês correspondente: Janeiro");
            break;
        case 2:
            alert("Mês correspondente: Fevereiro");
            break;
        case 3:
            alert("Mês correspondente: Março");
            break;
        case 4:
            alert("Mês correspondente: Abril");
            break;    
        case 5:
            alert("Mês correspondente: Maio");
            break;
        case 6:
            alert("Mês correspondente: Junho");
            break;
        case 7:
            alert("Mês correspondente: Julho");
            break;
        case 8:
            alert("Mês correspondente: Agosto");
            break;
        case 9:
            alert("Mês correspondente: Setembro");
            break;
        case 10:
            alert("Mês correspondente: Outubro");
            break;
        case 11:
            alert("Mês correspondente: Novembro");
            break;
        case 12:
            alert("Mês correspondente: Dezembro");
            break;
        default:
            alert("Valor inválido!! Informe valores (1-12).");
            break;
            
    }
}