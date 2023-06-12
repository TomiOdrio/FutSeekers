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
    {club:"argentinos",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=374337863&single=true&widget=false&headers=false&chrome=false&range=A4:H31",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=374337863&single=true&widget=false&headers=false&chrome=false&range=j4:v37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=374337863&single=true&widget=false&headers=false&chrome=false&range=x4:ap29",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=374337863&single=true&widget=false&headers=false&chrome=false&range=AR4:BB6"},
    {club:"arsenal",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=171619890&single=true&widget=false&headers=false&chrome=false&range=A4:H35",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=171619890&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=171619890&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=171619890&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"atletico_tucuman",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1581993078&single=true&widget=false&headers=false&chrome=false&range=A4:H33",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1581993078&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1581993078&single=true&widget=false&headers=false&chrome=false&range=v4:an30",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1581993078&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"banfield",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1893556494&single=true&widget=false&headers=false&chrome=false&range=A4:H37",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1893556494&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1893556494&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1893556494&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"barracas",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=250767552&single=true&widget=false&headers=false&chrome=false&range=A4:H38",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=250767552&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=250767552&single=true&widget=false&headers=false&chrome=false&range=v4:an34",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1893556494&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"belgrano",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=241354655&single=true&widget=false&headers=false&chrome=false&range=A4:H35",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=241354655&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=241354655&single=true&widget=false&headers=false&chrome=false&range=v4:an33",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=241354655&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"boca",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1675187115&single=true&widget=false&headers=false&chrome=false&range=A4:H41",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1675187115&single=true&widget=false&headers=false&chrome=false&range=j4:v37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1675187115&single=true&widget=false&headers=false&chrome=false&range=x4:ap34",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1675187115&single=true&widget=false&headers=false&chrome=false&range=Ar4:bb6"},
    {club:"central_cordoba",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1135814509&single=true&widget=false&headers=false&chrome=false&range=A4:H32",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1135814509&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1135814509&single=true&widget=false&headers=false&chrome=false&range=v4:an27",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1135814509&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"colon",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1713120027&single=true&widget=false&headers=false&chrome=false&range=A4:H32",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1713120027&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1713120027&single=true&widget=false&headers=false&chrome=false&range=v4:an29",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1713120027&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"defensa",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=653635795&single=true&widget=false&headers=false&chrome=false&range=A4:H36",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=653635795&single=true&widget=false&headers=false&chrome=false&range=j4:t37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=653635795&single=true&widget=false&headers=false&chrome=false&range=v4:an28",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=653635795&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"estudiantes",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1446939051&single=true&widget=false&headers=false&chrome=false&range=A4:H39",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1446939051&single=true&widget=false&headers=false&chrome=false&range=j4:t37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1446939051&single=true&widget=false&headers=false&chrome=false&range=v4:an30",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1446939051&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"gimnasia",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1047391791&single=true&widget=false&headers=false&chrome=false&range=A4:H40",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1047391791&single=true&widget=false&headers=false&chrome=false&range=j4:t37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1047391791&single=true&widget=false&headers=false&chrome=false&range=v4:an36",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1047391791&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"godoy_cruz",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1660618941&single=true&widget=false&headers=false&chrome=false&range=A4:H34",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1660618941&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1660618941&single=true&widget=false&headers=false&chrome=false&range=v4:an28",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1660618941&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"huracan",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2096944898&single=true&widget=false&headers=false&chrome=false&range=A4:H37",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2096944898&single=true&widget=false&headers=false&chrome=false&range=j4:t37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2096944898&single=true&widget=false&headers=false&chrome=false&range=v4:an33",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2096944898&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"independiente",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2100624192&single=true&widget=false&headers=false&chrome=false&range=A4:H40",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2100624192&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2100624192&single=true&widget=false&headers=false&chrome=false&range=v4:an33",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2100624192&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"instituto",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1497738164&single=true&widget=false&headers=false&chrome=false&range=A4:H33",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1497738164&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1497738164&single=true&widget=false&headers=false&chrome=false&range=v4:an29",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1497738164&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"lanus",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=754576761&single=true&widget=false&headers=false&chrome=false&range=A4:H40",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=754576761&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=754576761&single=true&widget=false&headers=false&chrome=false&range=v4:an32",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=754576761&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"newells",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1123205627&single=true&widget=false&headers=false&chrome=false&range=A4:H40",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1123205627&single=true&widget=false&headers=false&chrome=false&range=j4:t37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1123205627&single=true&widget=false&headers=false&chrome=false&range=v4:an33",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1123205627&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"platense",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2060411007&single=true&widget=false&headers=false&chrome=false&range=A4:H35",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2060411007&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2060411007&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=2060411007&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"racing",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=387146068&single=true&widget=false&headers=false&chrome=false&range=A4:H37",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=387146068&single=true&widget=false&headers=false&chrome=false&range=j4:v37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=387146068&single=true&widget=false&headers=false&chrome=false&range=x4:ap35",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=387146068&single=true&widget=false&headers=false&chrome=false&range=Ar4:bb5"},
    {club:"river",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1808134058&single=true&widget=false&headers=false&chrome=false&range=A4:H35",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1808134058&single=true&widget=false&headers=false&chrome=false&range=j4:v37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1808134058&single=true&widget=false&headers=false&chrome=false&range=x4:ap30",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1808134058&single=true&widget=false&headers=false&chrome=false&range=Ar4:bb5"},
    {club:"rosario_central",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1537231758&single=true&widget=false&headers=false&chrome=false&range=A4:H36",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1537231758&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1537231758&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1537231758&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"san_lorenzo",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1696243946&single=true&widget=false&headers=false&chrome=false&range=A4:H37",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1696243946&single=true&widget=false&headers=false&chrome=false&range=j4:t37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1696243946&single=true&widget=false&headers=false&chrome=false&range=v4:an27",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1696243946&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"sarmiento",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=142536660&single=true&widget=false&headers=false&chrome=false&range=A4:H37",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=142536660&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=142536660&single=true&widget=false&headers=false&chrome=false&range=v4:an33",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=142536660&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"talleres",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1925445981&single=true&widget=false&headers=false&chrome=false&range=A4:H43",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1925445981&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1925445981&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1925445981&single=true&widget=false&headers=false&chrome=false&range=Ap4:az5"},
    {club:"tigre",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1483922523&single=true&widget=false&headers=false&chrome=false&range=A4:H33",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1483922523&single=true&widget=false&headers=false&chrome=false&range=j4:v37",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1483922523&single=true&widget=false&headers=false&chrome=false&range=x4:ap29",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1483922523&single=true&widget=false&headers=false&chrome=false&range=Ar4:bb5"},
    {club:"union",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1974657342&single=true&widget=false&headers=false&chrome=false&range=A4:H34",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1974657342&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1974657342&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=1974657342&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"},
    {club:"velez",plantel:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=94503283&single=true&widget=false&headers=false&chrome=false&range=A4:H34",calendario:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=94503283&single=true&widget=false&headers=false&chrome=false&range=j4:t31",stats:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=94503283&single=true&widget=false&headers=false&chrome=false&range=v4:an31",arqueros:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnf_fEzvzc-XS-HMtNv_2bVqo43XOHdMe91UxN3-SpK1nvAcUloc6hu0PNET3S9XXydGo6YK8Xl4L3/pubhtml?gid=94503283&single=true&widget=false&headers=false&chrome=false&range=Ap4:az6"}
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