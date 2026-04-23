import { client } from "./data.js";

async function cargarDatos() {

  const resForm = await client.from("form").select("*");

  if (resForm.data) {
    const formData = resForm.data;
    const formContenedor = document.querySelector("#formulario");

    if (formContenedor) {
      formContenedor.innerHTML = "";

      for (let i = 0; i < formData.length; i++) {
        formContenedor.innerHTML += `
          <div class="formulario">
            <img class="location" src="imagenes/location.svg">
            <input class="where" type="text" value="${formData[i].where}">
            
            <img class="calendar1" src="imagenes/calendar.png">
            <input class="date" type="text" value="${formData[i].checkin}">
            
            <img class="calendar2" src="imagenes/calendar.png">
            <input class="date_final" type="text" value="${formData[i].checkout}">
            
            <img class="user" src="imagenes/user.svg">
            <input class="users" type="text" value="${formData[i].guests}">
            
            <button class="buscar">Search</button>
          </div>
        `;
      }
    }
  }
  const resHoteles = await client.from("results").select("*");
  const hotelesContenedor = document.querySelector("#hoteles");

  if (resHoteles.data) {
    const hotelesData = resHoteles.data;
    hotelesContenedor.innerHTML = "";

    for (let i = 0; i < hotelesData.length; i++) {
      hotelesContenedor.innerHTML += `
        <div class="contenido">
          
          <div class="imagen_contenido">
            <img src="${hotelesData[i].imagen}">
          </div>
          
          <div class="parte_central">
            <h3>${hotelesData[i].name}</h3>
            <div class="calificacion">
              <img src="imagenes/estrellas.svg">
              <span>${hotelesData[i].rating} (${hotelesData[i].reviewsCount} reviews)</span>
            </div>
            <div class="texto_dentro_recuadro">
              <p>${hotelesData[i].description}</p>
              <button>See availability</button>
            </div>
          </div>

          <div class="parte_derecha_recuadro">
            ${hotelesData[i].badge ? `<div class="parte_derecha_fondo_rojo">${hotelesData[i].badge}</div>` : ""}
            
            <div class="por_ciento">5% off</div>
            
            <p class="habitaciones">1 room 2 nights</p>
            
            <div class="precio">
              <span class="subrayado">${hotelesData[i].oldPrice || ""}</span>
              <span class="original"><strong>$${hotelesData[i].pricePerNight}</strong></span>
            </div>
            
            <p class="include">Includes taxes and fees</p>
          </div>

        </div>`;
    }
  }
}

cargarDatos();
