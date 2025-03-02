function botonInicio(){
    let cambiar = document.getElementById("botonInicio");
        cambiar.addEventListener("mouseenter", function() {
            cambiar.src = "./Images/BotonInicio2.png";
        });
        cambiar.addEventListener("mouseleave", function() {
            cambiar.src = "./Images/BotonInicio1.png";
        });
}
    botonInicio()