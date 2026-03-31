import { form } from "./search.js";
import { budgetRanges } from "./search.js";
import { popularFilters } from "./search.js";
import { activities } from "./search.js";

const formulario = document.querySelector("#formulario");

formulario.innerHTML = ""; 

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

const rangoPrecio = document.querySelector('.rango_precio');

rangoPrecio.innerHTML = "";

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

rangoPrecio.innerHTML = htmlCheckboxes + htmlCounts;

const popularFilter = document.querySelector("#filters");

popularFilter.innerHTML = "";

let htmlCheckbox = "<ul>";
let htmlCount = "<ul>";

for (let i = 0; i < popularFilters.length; i++) {
  htmlCheckbox += `
    <li>
      <input type="checkbox" id="remember" name="budget" />
      <span>${popularFilters[i].label}</span>
    </li>
  `;

  htmlCount += `<li>${popularFilters[i].count}</li>`;
}

htmlCheckbox += "</ul>";
htmlCount += "</ul>";

popularFilter.innerHTML = htmlCheckbox + htmlCount;

const actividades = document.querySelector("#actividades");

actividades.innerHTML = "";

let Checkboxs = "<ul>";
let Counts = "<ul>";

for (let i = 0; i < activities.length; i++) {
  Checkboxs += `
    <li>
      <input type="checkbox" id="remember" name="budget" />
      <span>${activities[i].label}</span>
    </li>
  `;

  Counts += `<li>${activities[i].count}</li>`;
}

Checkboxs += "</ul>";
Counts += "</ul>";

actividades.innerHTML = Checkboxs + Counts;