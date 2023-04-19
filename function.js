// Activar Menu Navegacion

let menu=document.getElementById("menu")
let menu_active=document.getElementById("menu_active")
let barras=document.getElementById("menu_bars")
let cross=document.getElementById("menu_cross")
menu.addEventListener("click",function(){
    menu_active.classList.toggle("oculto");
    barras.classList.toggle("oculto");
    cross.classList.toggle("oculto");
})

// Imagen Preview

let images=Array.from(document.getElementsByClassName("imgCarousel"))
let mainPhoto=document.getElementById("mainPhoto")

function updateImage(event){
    let image=event.target
    mainPhoto.src=image.src
}

images.forEach(function(image){
    image.addEventListener("click",updateImage)
})

// Hacerse Fan

let boton=document.getElementById("boton")
let form=document.getElementById("suscripcion")
boton.addEventListener("click",function(){
    form.classList.toggle("oculto");
    barras.classList.toggle("oculto");
    cross.classList.toggle("oculto");
})