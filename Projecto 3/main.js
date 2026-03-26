import { hoteles } from "./data.js";
import { popular } from "./data.js";

const hotel = document.querySelector("#hoteles");
for (let i=0;i<hoteles.length;i++) {
  hotel.innerHTML += `
    <div class="australia">
        <img src="${hoteles[i].imagen}" alt="Imagen1" style="width: 295px; height: 220px; border-radius: 8px;">
        <h3>${hoteles[i].nombre}</h3>
        <p>${hoteles[i].propiedades} propiedades</p>
    </div>`;
}

const populares = document.querySelector("#hoteles");
for (let i=0;i<hoteles.length;i++) {
  hotel.innerHTML += `
    <div class="australia">
        <img src="${hoteles[i].imagen}" alt="Imagen1" style="width: 295px; height: 220px; border-radius: 8px;">
        <h3>${hoteles[i].nombre}</h3>
        <p>${hoteles[i].propiedades} propiedades</p>
    </div>`;
}
