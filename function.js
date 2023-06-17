// LOADER

let pantalla_carga=document.getElementById("pantalla_carga");
let modelos = document.getElementById("cont_selector_modelos");

window.onload = function() {
    pantalla_carga.style.visibility="hidden";
    pantalla_carga.style.opacity="0";
}

// IMAGEN PREVIEW

let images=Array.from(document.getElementsByClassName("imgCarousel"));
let mainPhoto=document.getElementById("mainPhoto");
let iframe=document.getElementById("tabla_posiciones");
let copa=document.getElementById("tabla_copa");
let texto_comp=document.getElementById("descripcion_competencia");

images.forEach(function(image,index){
    image.addEventListener("click",function updateImage(event){
        let image=event.target;
        mainPhoto.src=image.src;
        let comp=images[index].getAttribute("id");
        if(comp=="liga_arg"){
            texto_comp.innerHTML="La Liga Profesional de Fútbol es la máxima competcición del fútbol argentino. En ella actualmente compiten 28 equipos."
        }
        else{
            texto_comp.innerHTML="La Copa Argentina es una competencia local de eliminación directa en la que participan equipos de las cinco categorías de fútbol profesional."
        }
    });
})

// HACERSE FAN

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

//CARRUSEL CITAS

$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel').carousel({
      pause: true,
      interval: 4000,
    });
});