const databaseItems = [
    {
        title: "mochila wilson",
        price: 7000,
        detail: "la calidad reconocida durante años",
        imgurl: "/assets/img/mochila.webp",
        category: "mochila",
        stock: 8,
        id: 1,
    },
    {
        title: "Canopla Arte",
        price: 4000,
        detail: "la canopla mas canchera",
        imgurl: "/assets/img/canopla.jpg",
        category: "canopla",
        stock: 9,
        id: 2,
    },
    {
        title: "Marcador Mooving",
        price: 3000,
        detail: "marcadores trabi punta pincel los mas lindos",
        imgurl: "/assets/img/marcadorM.webp",
        category: "fibrones/marcadores",
        stock: 12,
        id: 3,
    },
    {
        title: "Fibron Trabi",
        price: 2900,
        detail: "fibrones mas pedidos y hermosos",
        imgurl: "/assets/img/fibrontrabi.jpg",
        category: "fibrones/marcadores",
        stock: 10,
        id: 4,
    },
    {
        title: "Cuadernillo Triunfante T/d",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad de hoja, los mas pedidos",
        imgurl: "/assets/img/cuadernillo.jpg",
        category: "cuadernillo",
        stock: 14,
        id: 5,
    },
    {
        title: "canopla mooving 1",
        price: 5000,
        detail: "primera calidad, linda y canchera",
        imgurl: "/assets/img/canoplaa.jpg",
        category: "canopla",
        stock: 6,
        id: 6,
    },
    {
        title: "canopla mooving 2",
        price: 5500,
        detail: "exceltente calidad, tamaño y super linda",
        imgurl: "/assets/img/cartuchera.webp",
        category: "canopla",
        stock: 8,
        id: 7,
    },
    {
        title: "mochila Lsyd",
        price: 7000,
        detail: "los mas pedidos por adolescentes super cancheras",
        imgurl: "/assets/img/mochilalsyd.jpg",
        category: "mochila",
        stock: 8,
        id: 8,
    },
    {
        title: "Cuadernillo Triunfante T/d",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad, los mas cancheros",
        imgurl: "/assets/img/cuadernilloM.jpg",
        category: "cuadernillo",
        stock: 10,
        id: 9,
    },
]

function getItems () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(databaseItems);
        }, 1000);
    });
}

export function getSingleItems (itemid) {

    let itemReq = databaseItems.find (item => {
        return item.id === parseInt(itemid);
    })


    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(itemReq);
        }, 1000);
    });
}

 

export default getItems;