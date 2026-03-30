import { form } from "./search.js";
import { budgetRanges } from "./search.js";

const formulario = document.querySelector("#formulario");

formulario.innerHTML = ""; // limpia el contenido

for (let i = 0; i < form.length; i++) {
  formulario.innerHTML += `
    <input type="text" placeholder="${form[i].where}" class="where"/>
    <img src="imagenes/location.svg" class="location" />

    <input type="text" placeholder="${form[i].checkin}" class="date"/>
    <img src="imagenes/calendar.png" class="calendar1" />

    <input type="text" placeholder="${form[i].checkout}" class="date_final"/>
    <img src="imagenes/calendar.png" class="calendar2" />

    <input type="text" placeholder="${form[i].guests}" class="users"/>
    <img src="imagenes/user.svg" class="user" />

    <button class="buscar">Search</button>
  `;
}

// Seleccionamos el contenedor donde irá la información
const rangoPrecio = document.querySelector('.rango_precio');

// Limpiamos contenido previo (opcional)
rangoPrecio.innerHTML = "";

// Creamos las listas
let htmlCheckboxes = "<ul>";
let htmlCounts = "<ul>";

for (let i = 0; i < budgetRanges.length; i++) {
  htmlCheckboxes += `
    <li>
      <input type="checkbox" id="remember" name="budget" />
      <span>$ ${budgetRanges[i].min} - $ ${budgetRanges[i].max}</span>
    </li>
  `;

  htmlCounts += `<li>${budgetRanges[i].count}</li>`;
}

htmlCheckboxes += "</ul>";
htmlCounts += "</ul>";

// Insertamos las listas en el contenedor
rangoPrecio.innerHTML = htmlCheckboxes + htmlCounts;