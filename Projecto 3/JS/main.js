import { client } from "./data.js";

async function cargarTodo() {
  const resHoteles = await client.from("hoteles").select("*");

  if (resHoteles.data) {
    const hotelesData = resHoteles.data;
    const hotelContenedor = document.querySelector("#hoteles");
    hotelContenedor.innerHTML = "";

    for (let i = 0; i < hotelesData.length; i++) {
      hotelContenedor.innerHTML += `
        <div class="australia">
          <img src="${hotelesData[i].imagen}" style="width: 295px; height: 220px; border-radius: 8px;">
          <h3>${hotelesData[i].nombre}</h3>
          <p>${hotelesData[i].propiedades} propiedades</p>
        </div>
        `;
    }
  }

  const resInspiracion = await client.from("inspiracion").select("*");

  if (resInspiracion.data) {
    const inspiData = resInspiracion.data;
    const inspiContenedor = document.querySelector("#inspiracion");
    inspiContenedor.innerHTML = "";

    for (let i = 0; i < inspiData.length; i++) {
      inspiContenedor.innerHTML += `
        <div class="hoteles">
          <img src="${inspiData[i].imagen}" style="width: 400px; height: 280px; border-radius: 8px;">
          <h3>${inspiData[i].nombre}</h3>
          <p>${inspiData[i].texto}</p>
        </div>
        `;
    }
  }

  const resPopular = await client.from("popular").select("*");

  if (resPopular.data) {
    const popularData = resPopular.data;
    const popularContenedor = document.querySelector("#popular");
    popularContenedor.innerHTML = "";

    for (let i = 0; i < popularData.length; i++) {
      popularContenedor.innerHTML += `
        <div class="hoteles">
          <img src="${popularData[i].imagen}" style="width: 295px; height: 300px; border-radius: 8px;">
          <h3>${popularData[i].nombre}</h3>
          <p>${popularData[i].propiedades} properties</p>
        </div>
        `;
    }
  }
}
cargarTodo();
