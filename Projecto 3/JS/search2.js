import { client } from "./data.js";

async function cargarDatos() {
  console.log("Cargando datos del formulario...");
  
  const resForm = await client.from("form").select("*");

  if (resForm.data) {
    const formData = resForm.data;
    const formContenedor = document.querySelector("#formulario");
    
    if (formContenedor) {
      formContenedor.innerHTML = "";

      // Usamos el primer registro [0] para rellenar la barra de búsqueda
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
}

cargarDatos();