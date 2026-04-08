import { checkoutData } from "./checkout2.js";

const room1 = document.querySelector("#room1");

room1.innerHTML = `
    <img src="imagenes/seguridad_user.svg" alt="" />
    <span>${checkoutData.room.roomLabel}</span>
    <span>${checkoutData.room.summary}</span>
`;

const parte_derecha = document.querySelector("#parte_derecha");

parte_derecha.innerHTML = `
    <div class="parte_derecha_imagen">
        <img src="imagenes/motel.png" alt="" />
    </div>
    <div class="parte_derecha_texto">
        <h3 class="subtitulo">${checkoutData.summaryCard.hotelName}</h3>
        <div class="calificacion">
            <img src="imagenes/rating.svg" alt="" />
            <span>${checkoutData.summaryCard.rating} (${checkoutData.summaryCard.reviewsCount} Reviews)</span>
        </div>
        <div>
            <ul>
                <li class="rojo">${checkoutData.summaryCard.policy}</li>
                <li>${checkoutData.summaryCard.checkIn}</li>
                <li>${checkoutData.summaryCard.checkOut}</li>
                <li>${checkoutData.summaryCard.stayNights} night stay</li>
            </ul>
            </div>
        </div>
        <div class="texto_titulo_verde">
            <div class="fondo_verde">
            <h3>Price Details</h3>
        </div>
        <div class="contenido_texto_titulo_fondo_verde">
            <div class="detalle_precio">
                <span>${checkoutData.priceDetails.items[0].description}</span>
                <span>${checkoutData.priceDetails.items[0].amount}</span>
            </div>
            <div class="detalle_precio2">
                <span>${checkoutData.priceDetails.items[1].description}</span>
                <span>${checkoutData.priceDetails.items[1].amount}</span>
            </div>
            <div class="total">
                <span>Total</span>
                <span class="dinero_total">${checkoutData.priceDetails.currency}${checkoutData.priceDetails.total}</span>
            </div>
            <span class="cupon">Use a coupon, credit or promotional code</span>
            <form action="" class="codigo">
                <label for="">Coupon code</label>
                <div>
                    <input type="text" name="" id="" />
                    <button class="boton_cupon">Apply Coupon</button>
                </div>
            </form>
        </div>
    </div>
`;

const lista = document.querySelector("#lista");

lista.innerHTML = `
<ol>
    <li>${checkoutData.policyItems[0]}</li>
    <li>${checkoutData.policyItems[1]}</li>
    <li>${checkoutData.policyItems[2]}</li>
    <li>${checkoutData.policyItems[3]}</li>
</ol>
`;
