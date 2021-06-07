import data from './data/pokemon/pokemon.js';
console.log(example, data);

for( let i=0; i< data.pokemon.length; i++) {
    let tarjeta=document.createElement("div");
    tarjeta.className="Tarjetitas";
    let nombre=document.createElement("h1");
    nombre.innerHTML= data.pokemon[i].name;
    let numero=document.createElement("h2");
    numero.innerHTML=data.pokemon[i].num;
    let imagen=document.createElement("img");
    imagen.src= data.pokemon[i].img;
   tarjeta.appendChild(nombre);
   tarjeta.appendChild(numero);
   tarjeta.appendChild(imagen);
   document.getElementById("cajacontarjetas").appendChild(tarjeta);
   
   }