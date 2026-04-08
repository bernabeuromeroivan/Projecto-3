import { myTripsData } from "./trips.js";

const contenido = document.querySelector("#contenido");

for (let i = 0; i < myTripsData.trips.length; i++) {
  contenido.innerHTML += `
    <div class="parte_izquierda_recuadro">
        <div class="texto_contenido">
            <h3>${myTripsData.trips[i].hotelName}</h3>
            <div class="calificacion">
              <img src="imagenes/rating.svg" alt="" />
              <span>${myTripsData.trips[i].rating} (${myTripsData.trips[i].reviewsCount} Reviews)</span>
            </div>
            <div class="lista">
              <ul>
                <li class="rojo">${myTripsData.trips[i].policy}</li>
                <li>${myTripsData.trips[i].checkIn}</li>
                <li>${myTripsData.trips[i].checkOut}</li>
                <li>${myTripsData.trips[i].stayNights} night stay</li>
              </ul>
            </div>
        </div>
    </div>
    <div class="parte_derecha_recuadro">
        <p class="habitaciones">${myTripsData.trips[i].rooms} rooms ${myTripsData.trips[i].stayNights} days</p>
        <div class="precio">
            <p class="subrayado">${myTripsData.trips[i].oldPrice}</p>
            <p class="original">${myTripsData.trips[i].price} ${myTripsData.trips[i].currency}</p>
        </div>
        <span>Includes taxes and fees</span>
        <button class="boton">View trip details</button>
    </div>
  `;
}

const imagenes = document.querySelector("#imagenes_debajo");

for (let i=0;i<myTripsData.suggestedDestinations.length;i++) {
  imagenes.innerHTML += `
    <div class="australia">
        <img src="${myTripsData.suggestedDestinations[i].imatgeUrl}" alt="Imagen1" style="width: 295px; height: 220px; border-radius: 8px;">
        <h3>${myTripsData.suggestedDestinations[i].nom}</h3>
        <p>${myTripsData.suggestedDestinations[i].propietatsCount} propiedades</p>
    </div>`;
}