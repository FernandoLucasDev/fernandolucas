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
        