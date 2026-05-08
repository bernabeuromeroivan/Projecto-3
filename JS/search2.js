import { client } from "./search.js";

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

  const resBudget = await client.from("budgetRanges").select("*");
  const rangoPrecio = document.querySelector(".rango_precio");
  if (resBudget.data) {
    const budgetRanges = resBudget.data;
    let htmlCheckboxes = "<ul>";
    let htmlCounts = "<ul>";
    for (let i = 0; i < budgetRanges.length; i++) {
      htmlCheckboxes += `
        <li>
          <input type="checkbox" name="budget" />
          <span>$ ${budgetRanges[i].min} - $ ${budgetRanges[i].max}</span>
        </li>`;
      htmlCounts += `<li>${budgetRanges[i].count}</li>`;
    }
    rangoPrecio.innerHTML = htmlCheckboxes + "</ul>" + htmlCounts + "</ul>";
  }

  const resPopular = await client.from("popularFilters").select("*");
  const popularFilterCont = document.querySelector("#filters");
  if (resPopular.data) {
    const popularFilters = resPopular.data;
    let htmlCheckbox = "<ul>";
    let htmlCount = "<ul>";
    for (let i = 0; i < popularFilters.length; i++) {
      htmlCheckbox += `
        <li>
          <input type="checkbox" name="popular" />
          <span>${popularFilters[i].label}</span>
        </li>`;
      htmlCount += `<li>${popularFilters[i].count}</li>`;
    }
    popularFilterCont.innerHTML = htmlCheckbox + "</ul>" + htmlCount + "</ul>";
  }

  const resActivities = await client.from("activities").select("*");
  const actividadesContenedor = document.querySelector("#actividades");
  if (resActivities.data) {
    const activitiesData = resActivities.data;
    let Checkboxs = "<ul>";
    let Counts = "<ul>";
    for (let i = 0; i < activitiesData.length; i++) {
      Checkboxs += `
        <li>
          <input type="checkbox" name="activities" />
          <span>${activitiesData[i].label}</span>
        </li>`;
      Counts += `<li>${activitiesData[i].count}</li>`;
    }
    actividadesContenedor.innerHTML = Checkboxs + "</ul>" + Counts + "</ul>";
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
          <img src="${hotelesData[i].imagen}" alt="" />
        </div>
        <div class="parte_izquierda_recuadro">
          <div class="texto_contenido">
              <h3>${hotelesData[i].name}</h3>
            <div class="calificacion">
                <img src="imagenes/rating.svg" alt="" />
              <span>${hotelesData[i].rating} (${hotelesData[i].reviewsCount} reviews)</span>
            </div>
            <div class="texto_dentro_recuadro">
              <p>${hotelesData[i].description}</p>
              <button>See availability</button>
            </div>
          </div>
        </div>
        <div class="parte_derecha_recuadro">
          <div class="parte_derecha_fondo_rojo">
            <p>${hotelesData[i].badge}</p>
          </div>
          <div class="parte_derecha_abajo_derecha">
            <p class="por_ciento">5% off</p>
            <p class="habitaciones">1 room 2 days</p>
              <div class="precio">
                <p class="subrayado">${hotelesData[i].oldPrice}</p>
                <p class="original">${hotelesData[i].pricePerNight}</p>
              </div>
                <p class="include">Includes taxes and fees</p>
          </div>
        </div>
      </div>
  `;
    }
  }
}

cargarDatos();
