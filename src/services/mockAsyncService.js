const databaseItems = [
    {
        title: "mochila wilson",
        price: 7000,
        detail: "la calidad reconocida durante años",
        imgurl: "/assets/img/mochila.webp",
        category: "mochila",
        stock: 8,
        discount: 30,
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
        category: "fibronesMarcadores",
        stock: 12,
        id: 3,
    },
    {
        title: "Fibron Trabi",
        price: 2900,
        detail: "fibrones mas pedidos y hermosos",
        imgurl: "/assets/img/fibrontrabi.jpg",
        category: "fibronesMarcadores",
        stock: 10,
        id: 4,
        discount: 20,
    },
    {
        title: "Cuadernillo Triunfante ",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad de hoja, los mas pedidos",
        imgurl: "/assets/img/cuadernillo.jpg",
        category: "cuadernillo",
        stock: 14,
        id: 5,
        discount: 20,
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
        discount: 20,
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
        }, 2500);
    });
}

export function getSingleItems (itemid) {

    let itemReq = databaseItems.find ((item) => {
        return item.id === parseInt(itemid);
    });

    return new Promise ((resolve,) => 
    {
        setTimeout(() => {
            resolve(itemReq);
        }, 2500);
    });
}

export function getCategoryItems (categoryid) {
    let ItemCat = databaseItems.filter( (item) =>
    item.category === categoryid)
    return new Promise ((resolve,) => 
    {
        setTimeout(() => {
            resolve(ItemCat);
        }, 2500);
    });
}


export default getItems;
