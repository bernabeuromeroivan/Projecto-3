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
}
cargarTodo();
