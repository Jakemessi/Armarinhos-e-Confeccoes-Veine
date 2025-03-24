function Trocar(para){
    const perolasbotao = document.getElementById('perola');
    const roupabotao = document.getElementById('roupa');
    if(para == perola){
        perolasbotao.style.color = "white";
        perolasbotao.style.backgroundColor = "red";
        roupabotao.style.color = "black";
        roupabotao.style.backgroundColor = "white";
        fetch('perolas.html')
        .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("div#grupamento");
            let newelem = document.createElement("div");
            newelem.id = "grupamento"
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem,oldelem);
        })
    }
    else if (para == roupa){
        perolasbotao.style.color = "black";
        perolasbotao.style.backgroundColor = "white";
        roupabotao.style.color = "white";
        roupabotao.style.backgroundColor = "red";
        fetch('roupas.html')
        .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("div#grupamento");
            let newelem = document.createElement("div");
            newelem.id = "grupamento"
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem,oldelem);
        })
    }
}