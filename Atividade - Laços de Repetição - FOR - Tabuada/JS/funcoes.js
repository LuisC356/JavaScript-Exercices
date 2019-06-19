function tabuada(){
    //entrada
    var valor = parseInt(document.getElementById("txtValor").value);
    
    //processamento
    var txt = "Tabuada do "+valor;
    for(var y=1; y<=10; y++){
        txt = txt + "\n"+(y+" x "+valor+" = "+y*valor);
    }
    
    //saída
    alert(txt);
}

function tabuada2(){
    //entrada
    var valorInicial = parseInt(document.getElementById("txtValor1").value);var valorFinal = parseInt(document.getElementById("txtValor2").value);
    
    //processamento
    var txt = "";
    for(var a = valorInicial; a<=valorFinal;a++){
        txt += "<div id='tab'>Tabuada do "+a;
        for(var y=1; y<=10; y++){
            txt = txt + "<br/>"+(y+" x "+a+" = "+y*a);
        }

        txt+="</div>";
    }
    //saída
        document.getElementById("resultado").innerHTML=(txt);
}