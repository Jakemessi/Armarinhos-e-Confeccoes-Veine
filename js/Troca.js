function Trocar(para){
    const perolasbotao = document.getElementById('perola');
    const roupabotao = document.getElementById('roupa');
    const controlebotao = document.getElementById('controle');
    const diversosbotao = document.getElementById('diversos');
    if(para == perola){
        perolasbotao.style.color = "white";
        perolasbotao.style.backgroundColor = "red";
        roupabotao.style.color = "black";
        roupabotao.style.backgroundColor = "white";
        controlebotao.style.color = "black";
        controlebotao.style.backgroundColor = "white";
        diversosbotao.style.color = "black";
        diversosbotao.style.backgroundColor = "white";
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
        controlebotao.style.color = "black";
        controlebotao.style.backgroundColor = "white";
        diversosbotao.style.color = "black";
        diversosbotao.style.backgroundColor = "white";
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
    else if (para == controle){
        perolasbotao.style.color = "black";
        perolasbotao.style.backgroundColor = "white";
        roupabotao.style.color = "black";
        roupabotao.style.backgroundColor = "white";
        controlebotao.style.color = "white";
        controlebotao.style.backgroundColor = "red";
        diversosbotao.style.color = "black";
        diversosbotao.style.backgroundColor = "white";
        fetch('controle.html')
        .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("div#grupamento");
            let newelem = document.createElement("div");
            newelem.id = "grupamento"
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem,oldelem);
        })
    }
    else if (para == diversos){
        perolasbotao.style.color = "black";
        perolasbotao.style.backgroundColor = "white";
        roupabotao.style.color = "black";
        roupabotao.style.backgroundColor = "white";
        controlebotao.style.color = "black";
        controlebotao.style.backgroundColor = "white";
        diversosbotao.style.color = "white";
        diversosbotao.style.backgroundColor = "red";
        fetch('diversos.html')
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