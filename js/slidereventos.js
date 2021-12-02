const imagenesContainer = document.getElementById("imagenes-slider")

var sizeContenedor = document.getElementById('imagenes-slider').clientWidth;

let x = 0
function next() {

    x=x+sizeContenedor
 if(x == sizeContenedor*6){
      x=0
     
   }
    imagenesContainer.style.transform = `translate(-${x}px)`
    
  }

  setInterval(function(){
     next();
  },3000 )



