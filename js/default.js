var valortotal = 0
var ultimovalor = 0
function AtualizarValores(receba){
    valortotal = valortotal + receba
    ultimovalor = receba
    document.getElementById("ultimovalor").innerHTML = `${ultimovalor}`
    document.getElementById("valortotal").innerHTML = `${valortotal}`
}

function Somar(){
    var precopormedida,pesonabalanca,resultado
    precopormedida = parseFloat(document.getElementById("precopormedida").value);
    pesonabalanca = parseFloat(document.getElementById("pesonabalanca").value);
    resultado = precopormedida * (pesonabalanca / 10);
    if(Number.isNaN(precopormedida)){
        document.getElementById("aviso").innerHTML = `O valor digitado no Preço por Medida é invalido, digite novamente.`
    }
    else{
        if(Number.isNaN(pesonabalanca)){
            document.getElementById("aviso").innerHTML = `O valor digitado no Peso na Balança é invalido, digite novamente`
        }
        else{
            document.getElementById("ultimovalor").innerHTML = `O resultado da soma é ${resultado}`
            AtualizarValores(resultado)
        }
    }
}