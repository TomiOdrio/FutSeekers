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

// CAMBIAR IFRAMES

let clubes=Array.from(document.getElementsByClassName("scroll_club"));
let plantel=document.getElementById("plantel");
let calendario=document.getElementById("calendario");
let stats=document.getElementById("stats");
let arqueros=document.getElementById("arqueros");
let links=[
    {club:"boca",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=753681195&single=true&widget=false&headers=false&chrome=false&range=A2:H37",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=753681195&single=true&widget=false&headers=false&chrome=false&range=J2:V35",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=753681195&single=true&widget=false&headers=false&chrome=false&range=X2:AP28",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=753681195&single=true&widget=false&headers=false&chrome=false&range=AR2:BB4"},
    {club:"san_lorenzo",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=280369067&single=true&widget=false&headers=false&chrome=false&range=A2:H35",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=280369067&single=true&widget=false&headers=false&chrome=false&range=J2:T35",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=280369067&single=true&widget=false&headers=false&chrome=false&range=X2:AP25",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=280369067&single=true&widget=false&headers=false&chrome=false&range=AR2:BB4"}
]

clubes.forEach(function(equipo,index){
    equipo.addEventListener("click",function updateIframes(){
        let club=clubes[index].getAttribute("id");
        plantel.style.display="block";
        calendario.style.display="block";
        stats.style.display="block";
        arqueros.style.display="block";
        for(let i=0;i<links.length;i++){
            if(links[i].club==club){
                plantel.src=links[i].plantel;
                calendario.src=links[i].calendario;
                stats.src=links[i].stats;
                arqueros.src=links[i].arqueros;
            }
        }
    });
});