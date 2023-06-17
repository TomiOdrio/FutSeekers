let nombre=document.getElementById("nombre").value;
let email=document.getElementById("email");
let pais=document.getElementById("pais");
let club=document.getElementById("club");
let check=document.getElementById("check");

document.oninput=GuardarData();

function GuardarData(){
    localStorage.setItem("nombre",nombre.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("pais",pais.value);
    localStorage.setItem("club",club.value);
    localStorage.setItem("check",check.value); 
};

function CargarData(){
   nombre.value=localStorage.getItem("nombre");
   email.value=localStorage.getItem("email");
   pais.value=localStorage.getItem("pais");
   club.value=localStorage.getItem("club");
   check.value=localStorage.getItem("check"); 
};

// window.onload=CargarData();
