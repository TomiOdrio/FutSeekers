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

// Aparecer nav club

// window.addEventListener('scroll', function()  {
//     let elements = document.getElementsByClassName('scroll_content');
//     let screenSize = window.innerHeight;
    
//     for(var i = 0; i < elements.length; i++) {
//         let element = elements[i];
  
//         if(element.getBoundingClientRect().top < screenSize) {
//           element.classList.add('mostrar');
//         } else {
//           element.classList.remove('mostrar');
//         }
//     }
// });

// window.addEventListener('scroll', function()  {
//     let element = document.getElementById('scroll_content');
//     let screenSize = window.innerHeight;
    
//       if(element.getBoundingClientRect().top < screenSize) {
//         element.style.display="flex";
//       } else {
//         element.style.display="none";
//       }
//   });
