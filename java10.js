

function circulo(){
    document.getElementById("caja").classList.add("cajaCirculo");
    console.log(caja);
}

function Cuadrado(){
    const elemento = document.querySelector('#caja');
    elemento.classList.remove('cajaCirculo');
    console.log(caja);
}