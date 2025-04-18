var valortotal = 0
var ultimovalor = 0
var contador = 0
function AtualizarValores(receba){
    valortotal = valortotal + receba
    ultimovalor = receba
    contador ++
    document.getElementById("ultimovalor").innerHTML = `${ultimovalor.toFixed(2)}`
    document.getElementById("valortotal").innerHTML = `${valortotal.toFixed(2)}`
    document.getElementById("desconto").innerHTML = `${(valortotal.toFixed(2)*0.75)}`
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
                preco = 75
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
                preco = 89.90
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
        else if (corsa == 99){ // Casacos Teddy
            preco = 238
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
}
function Resetar(){
    valortotal = 0
    ultimovalor = 0
    contador = 0
    document.getElementById("ultimovalor").innerHTML = ``
    document.getElementById("valortotal").innerHTML = ``
    document.getElementById("desconto").innerHTML = ``
    document.getElementById("aviso").innerHTML = ``
    document.getElementById("contador").innerHTML = ``
}