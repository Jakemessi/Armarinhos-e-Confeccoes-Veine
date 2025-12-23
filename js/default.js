var valortotal = 0
var ultimovalor = 0
var contador = 0
function AtualizarValores(receba, mudando){
    valortotal = valortotal + receba
    ultimovalor = receba
    if(mudando == null){
        contador ++
    }
    document.getElementById("ultimovalor").innerHTML = `${ultimovalor.toFixed(2)}`
    document.getElementById("valortotal").innerHTML = `${valortotal.toFixed(2)}`
    document.getElementById("desconto25").innerHTML = `${(valortotal.toFixed(2)*0.75)}`
    document.getElementById("desconto10").innerHTML = `${(valortotal.toFixed(2)*0.85)}`
    document.getElementById("aviso").innerHTML = ``
    document.getElementById("contador").innerHTML = `${contador}`
}

function Somar(cavalo, corsa){
    if(cavalo == 1){
        var preco,tipo
        tipo = document.querySelector('input[name="tipo"]:checked').value;
        // Tipo 1 2 3 respectivamente Soft, Fleece, Fleece Brilhante
        if(corsa == 1){ // Tamanhos 1 - 2 - 3 - 4
            if(tipo == 1){
                preco = 50
            }
            else if(tipo == 2){
                preco = 69.00
            }
            else{
                preco = 99.90
            }
        }
        else if (corsa == 6){ // Tamanhos 6 - 8
            if(tipo == 1){
                preco = 60
            }
            else if(tipo == 2){
                preco = 75.00
            }
            else{
                preco = 115
            } 
        }
        else if (corsa == 10){ // Tamanhos 10 - 12
            if(tipo == 1){
                preco = 70
            }
            else if(tipo == 2){
                preco = 99
            }
            else{
                preco = 129
            }
        }
        else if (corsa == 14){ // Tamanhos 14 - 16
            if(tipo == 1){
                preco = 80
            }
            else if(tipo == 2){
                preco = 115
            }
            else{
                preco = 149
            }
        }
        else if (corsa == 17){ // Tamanho P
            if(tipo == 1){
                preco = 80
            }
            else if(tipo == 2){
                preco = 148
            }
            else{
                preco = 229
            }
        }
        else if (corsa == 18){ // Tamanho M
            if(tipo == 1){
                preco = 80
            }
            else if(tipo == 2){
                preco = 148
            }
            else{
                preco = 229
            }
        }
        else if (corsa == 19){// Tamanhos G e GG
            if(tipo == 1){
                preco = 100
            }
            else if(tipo == 2){
                preco = 148
            }
            else{
                preco = 229
            }
        }
        else if (corsa == 99){ // Casacos Teddy Adulto
            preco = 198
        }
        else if (corsa == 100){ // Casacos Teddy Infantil 4 - 6 - 8
            preco = 75
        }
        else if (corsa == 101){ // Casacos Teddy Infantil 10 - 12 - 14
            preco = 119.90
        }
        AtualizarValores(preco)
    }
    else{
        var precopormedida,pesonabalanca,resultado
        precopormedida = parseFloat(document.getElementById("precopormedida").value);
        pesonabalanca = parseFloat(document.getElementById("pesonabalanca").value);
        resultado = precopormedida * (pesonabalanca / 10);
        if(Number.isNaN(precopormedida)){
            document.getElementById("aviso").innerHTML = `O valor digitado no Preço por Medida é invalido, digite novamente e troque vírgulas por ponto final.`
        }
        else{
            if(Number.isNaN(pesonabalanca)){
                document.getElementById("aviso").innerHTML = `O valor digitado no Peso na Balança é invalido, digite novamente e troque vírgulas por ponto final`
            }
            else{
                document.getElementById("ultimovalor").innerHTML = `O resultado da soma é ${resultado}`
                AtualizarValores(resultado)
            }
        }
    }
    document.getElementById("soma").style.backgroundColor = "green";
    setTimeout(function() {
        document.getElementById("soma").style.backgroundColor = "white";
    }, 2000); 
}

function Mudar(){
    if(document.getElementById("valor").value != ""){
        tipo = document.querySelector('input[name="operacao"]:checked').value;
        //0 - soma 1 - remove
        if(tipo == 0){
            AtualizarValores(parseFloat(document.getElementById("valor").value),1)
        }
        else if(tipo == 1){
            AtualizarValores(parseFloat(document.getElementById("valor").value*-1),1)
        }
        document.getElementById("mudar").style.backgroundColor = "green";
        setTimeout(function() {
            document.getElementById("mudar").style.backgroundColor = "white";
        }, 2000); 
    }
}

function cont(salut){
    if(salut == 0){
        contador ++
        document.getElementById("au").style.backgroundColor = "green";
        setTimeout(function() {
            document.getElementById("au").style.backgroundColor = "white";
        }, 2000); 
    }
    else{
        contador --
        document.getElementById("di").style.backgroundColor = "green";
        setTimeout(function() {
            document.getElementById("di").style.backgroundColor = "white";
        }, 2000); 
    }
    document.getElementById("contador").innerHTML = `${contador}`
}

function Resetar(){
    valortotal = 0
    ultimovalor = 0
    contador = 0
    document.getElementById("ultimovalor").innerHTML = ``
    document.getElementById("valortotal").innerHTML = ``
    document.getElementById("desconto25").innerHTML = ``
    document.getElementById("desconto10").innerHTML = ``
    document.getElementById("aviso").innerHTML = ``
    document.getElementById("contador").innerHTML = ``
    document.getElementById("limpa").style.backgroundColor = "red";
    setTimeout(function() {
        document.getElementById("limpa").style.backgroundColor = "white";
    }, 2000); 
}