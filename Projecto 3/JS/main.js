import { hoteles } from "./data.js";
import { popular } from "./data.js";
import { inspiracion } from "./data.js";

const hotel = document.querySelector("#hoteles");
for (let i=0;i<hoteles.length;i++) {
  hotel.innerHTML += `
    <div class="australia">
        <img src="${hoteles[i].imagen}" alt="Imagen1" style="width: 295px; height: 220px; border-radius: 8px;">
        <h3>${hoteles[i].nombre}</h3>
        <p>${hoteles[i].propiedades} propiedades</p>
    </div>`;
}

const populares = document.querySelector("#popular");
for (let i=0;i<popular.length;i++) {
  populares.innerHTML += `
    <div class="hoteles">
        <img src="${popular[i].imagen}" alt="Imagen1" style="width: 295px; height: 300px; border-radius: 8px;">
        <h3>${popular[i].nombre}</h3>
        <p>${popular[i].propiedades} properties</p>
    </div>`;
}

const inspiration = document.querySelector("#inspiracion");
for (let i=0;i<inspiracion.length;i++) {
  inspiration.innerHTML += `
    <div class="hoteles">
        <img src="${inspiracion[i].imagen}" alt="Imagen1" style="width: 400px; height: 280px; border-radius: 8px;">
        <h3>${inspiracion[i].nombre}</h3>
        <p>${inspiracion[i].texto}</p>
    </div>`;
}