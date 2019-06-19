function pares(){
    var valorFim = parseInt(document.getElementById("txtValorFim").value);
    var valor = 1;
    var mensagem = "Os pares entre "+valor+" e "+valorFim+" são:";
    
    while(valor <= valorFim){
        if(valor%2 == 0){
            //mensagem = mensagem + "\n"+valor;
            mensagem += "\n"+valor;
        }
        valor++;//valor=valor+1;
    }
    alert(mensagem);
}