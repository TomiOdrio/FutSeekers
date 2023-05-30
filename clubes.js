// UPDATE ESCUDO

let escudos=Array.from(document.getElementsByClassName("escudo_club"));
let mainEscudo=document.getElementById("escudo_elegido");
let shield=document.getElementById("logo_shield");

function updateClub(event){
    let image=event.target;
    mainEscudo.src=image.src;
    shield.classList.add("oculto");
    mainEscudo.classList.remove("oculto");
}

escudos.forEach(function(image){
    image.addEventListener("click",updateClub);
})

// UPDATE COMPETENCIA

let comp=Array.from(document.getElementsByClassName("imgCarousel"));
let mainComp=document.getElementById("mainPhoto");

function updateComp(event){
    let image=event.target;
    mainComp.src=image.src;
}

comp.forEach(function(image){
    image.addEventListener("click",updateComp);
})