function criar_nota(){

    var text = document.getElementById("notaconteudo").value;
    var bgC = document.getElementById("cornota").value;
    var cT = document.getElementById("cortext").value;

    var pai = document.getElementById("notas");
    var filho = document.createElement("div");
    pai.appendChild(filho);
    var texto = document.createTextNode(text);
    filho.appendChild(texto);
    filho.classList.add("card");
    filho.id  = 'nota';
    filho.style.padding="3px";
    filho.style.backgroundColor=bgC;
    filho.style.color=cT;
    
}