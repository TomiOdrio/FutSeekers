const colorThief=new ColorThief();
const imagen=document.getElementById("imagen_club");
const colorDominante=colorThief.getColor(imagen);

const colorRGB='rgb(${colorDominante[0]}, ${colorDominante[1]}, ${colorDominante[2]})';
const colorRGBoscuro='rgb(${colorDominante[0]* 0.8}, ${colorDominante[1] * 0.8}, ${colorDominante[2] * 0.8})';

document.body.style.background='linear-gradient(to bottom, ${colorRGB}, ${colorRGBoscuro})';
document.body.style.background='-webkit-linear-gradient(top, ${colorRGB}, ${colorRGBoscuro})';
