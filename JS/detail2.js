import { productDetailData } from "./detail.js";

const general = document.querySelector("#general");

general.innerHTML = `
<div class="parte_izquierda">
  <div class="overview">
    <ul>
      <li>Overview</li>
      <li>Rooms</li>
      <li>Guest Reviews</li>
    </ul>
  </div>
  <div class="lakeside">
      <h2>${productDetailData.hotel.name}</h2>
      <div class="calificacion">
          <div class="rating">
              <img src="imagenes/rating.svg" alt="" />
              <span>${productDetailData.hotel.rating} (${productDetailData.hotel.reviewsCount} Reviews)</span>
          </div>
          <div class="texto_debajo_rating">
              <img src="imagenes/localizacion.svg" alt="" />
              <p>${productDetailData.hotel.address}</p>
          </div>
      </div>
  </div>
  <div class="div_texto">
      <h3>Overview</h3>
      <p>${productDetailData.hotel.overviewText}</p>
      <p>${productDetailData.hotel.overviewText2}</p>
      <p>Couples in particular like the location - they rated it 9.2 for a two-person trip.</p>
      <h3 class="facilities">Top facilities</h3>
    <div class="facility">
      <div>
        <ul class="wifi">
          <div class="free">
            <img src="imagenes/wifi.svg" alt="" />
            <li>${productDetailData.topFacilities[0].label}</li>
          </div>
          <div class="free">
            <img src="imagenes/aire.svg" alt="" />
            <li>${productDetailData.topFacilities[1].label}</li>
          </div>
          <div class="free">
            <img src="imagenes/coche.svg" alt="" />
            <li>${productDetailData.topFacilities[2].label}</li>
          </div>
        </ul>
      </div>
      <div>
        <ul class="wifi">
          <div class="free">
            <img src="imagenes/bolsa.svg" alt="" />
            <li>${productDetailData.topFacilities[3].label}</li>
          </div>
          <div class="free">
            <img src="imagenes/piscina.svg" alt="" />
            <li>${productDetailData.topFacilities[4].label}</li>
          </div>
          <div class="free">
            <img src="imagenes/like.svg" alt="" />
            <li>${productDetailData.topFacilities[5].label}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="parte_derecha">
  <div>
    <img class="mapa" src="imagenes/mapa.png" alt="" />
  </div>
  <div>
    <h3>Explore the area</h3>
    <div>
      <ul class="lugares">
        <div class="ubicaciones">
          <div>
            <img src="imagenes/avion.svg" alt="" />
            <li>${productDetailData.exploreArea[0].name}</li>
          </div>
          <span>${productDetailData.exploreArea[0].distance}</span>
        </div>
        <div class="ubicaciones">
          <div>
            <img src="imagenes/punto.svg" alt="" />
            <li>${productDetailData.exploreArea[1].name}</li>
          </div>
          <span>${productDetailData.exploreArea[1].distance}</span>
        </div>
        <div class="ubicaciones">
          <div>
            <img src="imagenes/punto.svg" alt="" />
            <li>${productDetailData.exploreArea[2].name}</li>
          </div>
          <span>${productDetailData.exploreArea[2].distance}</span>
        </div>
        <div class="ubicaciones">
          <div>
            <img src="imagenes/punto.svg" alt="" />
            <li>${productDetailData.exploreArea[3].name}</li>
          </div>
          <span>${productDetailData.exploreArea[3].distance}</span>
        </div>
        <div class="ubicaciones">
          <div>
            <img src="imagenes/punto.svg" alt="" />
            <li>${productDetailData.exploreArea[4].name}</li>
          </div>
          <span>${productDetailData.exploreArea[4].distance}</span>
        </div>
      </ul>
    </div>
  </div>
</div>
`;

const available = document.querySelector("#available");

available.innerHTML = `
<div>
  <h3 class="rooms">Available rooms</h3>
  <div class="formulario">
    <img src="imagenes/calendar.png" alt="" class="calendar1" />
    <input type="text" placeholder="${productDetailData.availability.checkin}" class="where" />
    <img src="imagenes/calendar.png" alt="calendar1" class="calendar2" />
    <input type="text" placeholder="${productDetailData.availability.checkout}" class="date" />
    <img src="imagenes/user.svg" alt="calendar2" class="user" />
    <input type="text" placeholder="${productDetailData.availability.guests}" class="date_final" />
    <button class="buscar">Search</button>
  </div>
</div>`

const azul = document.querySelector("#azul");

azul.innerHTML = `
  <div class="fondo_azul">
    <img src="imagenes/plave.svg" alt="Place" class="place" />
    <p>${productDetailData.promoCard.title}</p>
    <img src="imagenes/persona.svg" alt="Persona" class="persona" />
  </div>
  <div class="cuartos">
    <img src="imagenes/habitacion1.png" alt="" class="habitaciones" />
    <h3>${productDetailData.rooms[0].name}</h3>
    <ul>
      <div class="listas">
        <img src="imagenes/bolsa_gris.svg" alt="" />
        <li>${productDetailData.rooms[0].price} ${productDetailData.rooms[0].currency}</li>
      </div>
      <div class="listas">
        <img src="imagenes/pelota.svg" alt="" />
        <li>Sleeps ${productDetailData.rooms[0].sleeps}</li>
      </div>
      <div class="listas">
        <img src="imagenes/like_gris.svg" alt="" />
        <li>${productDetailData.rooms[0].beds}</li>
      </div>
    </ul>
    <div class="boton_cuartos">
      <button>Reserve suite</button>
    </div>
  </div>
  <div class="cuartos">
    <img src="imagenes/habitacion2.png" alt="" class="habitaciones" />
    <h3>${productDetailData.rooms[1].name}</h3>
    <ul>
      <div class="listas">
        <img src="imagenes/bolsa_gris.svg" alt="" />
        <li>${productDetailData.rooms[1].price} ${productDetailData.rooms[1].currency}</li>
      </div>
      <div class="listas">
        <img src="imagenes/pelota.svg" alt="" />
        <li>Sleeps ${productDetailData.rooms[1].sleeps}</li>
      </div>
      <div class="listas">
        <img src="imagenes/like_gris.svg" alt="" />
        <li>${productDetailData.rooms[1].beds}</li>
      </div>
    </ul>
    <div class="boton_cuartos">
      <button>Reserve suite</button>
    </div>
  </div>`