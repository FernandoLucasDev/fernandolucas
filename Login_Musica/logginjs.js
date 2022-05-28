var time = 1;

        setInterval(mImg, 5000);

        function mImg(){
            var foto = document.getElementById("body");
            
            switch(time){
                case 1: 
                    foto.src = foto.style.backgroundImage = "url('img1.jpg')";
                    break;
                case 2:
                    foto.src = foto.style.backgroundImage = "url('img2.jpg')";
                    break;
                case 3:
                    foto.src = foto.style.backgroundImage = "url('img3.jpg')";
                    break;
                case 4: 
                time = 0;
            }
            time++;
        }

function cadastrar(){

    var senha = parseInt(document.getElementById("senha").value);
    var c_senha = parseInt(document.getElementById("cSenha").value);
    var l_senha = document.getElementById("rEmail");
    var l_senha = document.getElementById("rSenha");

    if(senha == c_senha){
        window.location.href = "pag2.html";
    } else {
        window.alert("Senha errada!")
    }
}
        