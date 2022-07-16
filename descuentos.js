//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//});

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];


//SIRVE PARA LA SOLUCIÓN 1 Y 2

// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + userCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }


    //FUNCIONA PARA LA SOLUCIÓN 1 Y 2
    //let descuento;

    // SOLUCIÓN 2

    // if(!coupons.includes(couponValue)) {
    //     alert("El cupón " + couponValue + "no es válido");
    // } else if (couponValue === "JuanDC_es_Batman") {
    //     descuento = 15;
    // } else if (couponValue === "pero_no_le_digas_a_nadie") {
    //     descuento = 30;
    // } else if (couponValue === "es_un_secreto") {
    //     descuento = 25;
    // }


    // SOLUCIÓN 1

    // switch(couponValue) {
    //     case coupons[0]: // "JuanDC_es_Batman"
    //         descuento = 15;
    //     break;
    //     case coupons[1]: // "pero_no_le_digas_a_nadie"
    //         descuento = 30;
    //     break;
    //     case coupons[2]: // "es_un_secreto"
    //         descuento = 25;
    //     break;
    // }


    // SOLUCIÓN 1 y 2
    // const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}




// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });