function Contas(){
	
    var codigo = parseInt(document.getElementById("txtCargo").value);
    var salario = parseInt(document.getElementById("txtSal").value);
	var temposer = parseInt(document.getElementById("txtTime").value);
	
    
    switch(codigo){
        case 1:
            if(temposer >= 5){
				
				newsal = salario * (1+0.1);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
			}else if(temposer < 3){
				
				newsal = salario * (1+0.08);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
				
			}else{
				
				newsal = salario * (1+0.09);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
			}
            break;
			
        case 2:
            if(temposer >= 5){
				
				newsal = salario * (1+0.11);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
			}else if(temposer < 3){
				
				newsal = salario * (1+0.09);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
				
			}else{
				
				newsal = salario * (1+0.1);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
			}
            break;
        case 3:
            if(temposer >= 5){
				
				newsal = salario * (1+0.12);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
			}else if(temposer < 3){
				
				newsal = salario * (1+0.1);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
				
			}else{
				
				newsal = salario * (1+0.11);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal.toFixed(2)+"\nDiferença dos salários: R$ "+difer.toFixed(2));
				
			}
            break;
                
            
    }
}


/* if else(temposer >= 3 && temposer < 5){
				
				newsal = salario * (1+0.09);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal+"\nDiferenção dos salários: R$ "+difer);							
				
			}else{
				newsal = salario * (1+0.08);
				difer = newsal - salario ;
				alert("Salário antigo: R$ "+salario+"\nSalário Atualizado: R$ "+newsal+"\nDiferenção dos salários: R$ "+difer);			
				
			}			
			
			*/ 