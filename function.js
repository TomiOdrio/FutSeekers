// Imagen Preview

let images=Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhoto=document.getElementById("mainPhoto");
let iframe=document.getElementById("tabla_posiciones");
let copa=document.getElementById("tabla_copa");

function updateImage(event){
    let image=event.target;
    mainPhoto.src=image.src;
}

images.forEach(function(image){
    image.addEventListener("click",updateImage);
    // image[0].addEventListener("click",function(){
    //     iframe.style.display="none";
    //     copa.style.display="block";
    // })
    // image[1].addEventListener("click",function(){
    //     copa.style.display="none";
    //     iframe.style.display="block";
    // })
})

// Hacerse Fan

let boton=document.getElementById("btn_suscripcion");
let form=document.getElementById("borroso");
let cross=document.getElementById("cross");
let submit=document.getElementById("submit_btn");
boton.addEventListener("click",function(){
    form.classList.toggle("oculto");
})
cross.addEventListener("click",function(){
    form.classList.toggle("oculto");
})
submit.addEventListener("click",function(){
    form.classList.toggle("oculto");
})
