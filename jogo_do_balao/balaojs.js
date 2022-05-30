setInterval(moverBalao, 700);

var score = 0;

function moverBalao(){
    var Balao = document.getElementById("balloon");
    var estourou = document.getElementById("balao")
    var intervel = Math.floor(Math.random() * 15);
    
    estourou.src = "balloon.png"

    switch(intervel){
        case 0:
            Balao.src = Balao.style.marginLeft = "75%"
            Balao.src = Balao.style.marginTop = "30%"
            break;
        case 1:
            Balao.src = Balao.style.marginLeft = "30%"
            Balao.src = Balao.style.marginTop = "10%"
            break;
        case 2:
            Balao.src = Balao.style.marginLeft = "5%"
            Balao.src = Balao.style.marginTop = "11%"
            break;
        case 3:
            Balao.src = Balao.style.marginLeft = "15%"
            Balao.src = Balao.style.marginTop = "9%"
            break;
        case 4:
            Balao.src = Balao.style.marginLeft = "26%"
            Balao.src = Balao.style.marginTop = "26%"
            break;
        case 5:
            Balao.src = Balao.style.marginLeft = "60%"
            Balao.src = Balao.style.marginTop = "22%"
            break;
        case 6:
            Balao.src = Balao.style.marginLeft = "18%"
            Balao.src = Balao.style.marginTop = "27%"
            break;
        case 7:
            Balao.src = Balao.style.marginLeft = "55%"
            Balao.src = Balao.style.marginTop = "10%"
            break;
        case 8:
            Balao.src = Balao.style.marginLeft = "41%"
            Balao.src = Balao.style.marginTop = "16%"
            break;
        case 9:
            Balao.src = Balao.style.marginLeft = "10%"
            Balao.src = Balao.style.marginTop = "5%"
            break;
        case 10:
            Balao.src = Balao.style.marginLeft = "40%"
            Balao.src = Balao.style.marginTop = "24%"
            break;
        case 11:
            Balao.src = Balao.style.marginLeft = "0%"
            Balao.src = Balao.style.marginTop = "15%"
            break;
        case 12:
            Balao.src = Balao.style.marginLeft = "7%"
            Balao.src = Balao.style.marginTop = "27%"
            break;
        case 13:
            Balao.src = Balao.style.marginLeft = "37%"
            Balao.src = Balao.style.marginTop = "7%"
            break;
        case 12:
            Balao.src = Balao.style.marginLeft = "36%"
            Balao.src = Balao.style.marginTop = "14%"
            break; 
        
    }

}

function estourar(){
    score++;
    var Pontos = document.getElementById("pontos");
    Pontos.src = Pontos.textContent = score;
    var boom = document.getElementById("balao").src = "explosion.png" 
}


function boom(){
    estourar();
}


