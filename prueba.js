// const producto = {
//     nombreProducto: '',
//     cantidad: 0,
//     precio: '$0',
//     imagenProducto: '',
//     descripcionProducto: '',
//     categoria: [],
//     fechaFabricacion: 'mes-dia-año'
// }

// const comercio = {
//     infoPropietario: {
//         nombreCompletoPropietario: '',
//         dni: '',
//         cuit: '',
//         email: ''
//     },

//     infoComercio: {
//         nombreComercio: '',
//         ubicacion: {
//             pais: '',
//             provincia: '',
//             ciudad: '',
//             calle: '',
//             numeracion: ''
//         },
//         idComercio: '',
//         logo: '',
//         rubro: 'que area es, pizza, pan y asi',
//         horario: '',
//         valoracionComercio: {
//             promedio: 0,
//             todasValoraciones: []
//         },
//         comentariosUsuarios: [],
//         contacto: 0,
//         opcionPago: []
//     }
// }

const usuario1 = {
    name: "ayrton",
    email: "ayrton@gmail.com",
    location: "moreno",
    password: "123456"
}

const usuario2 = {
    name: "eve",
    email: "eve@gmail.com",
    location: "lujan",
    password: "123456"
}

const vendedor1 = {
    name: "Pepes",
    email: "pepespanaderia@gmail.com",
    password: "123456",
    adress: "moreno",
    time: "08 - 18",
    contact: "1125464597",
    payment: "Efectivo",
    rating: []
}

const PanPepes = {

    name: "pan",
    description: "pan no tan fresco x kilo",
    price: 149.99,
    categories: "Panaderia",

    amount: 1
}

const pebetesPepes = {

    name: "pebetes",
    descriptio: "pebetes no tan frescos x kilo",
    price: 249.99,
    categories: "Panaderia",
    
    amount: 3
}

const vendedor2 = {
    name: "Peps burger",
    email: "pepsburger@gmail.com",
    password: "123456",
    adress: "CABA",
    time: "08 - 18",
    contact: "1125464597",
    payment: "Pago Online/Tarjeta",
    rating: []
}

const bigpeps = {

    name: "bigpepes",
    descriptio: "se callo al piso",
    price: 200,
    categories: "Hamburguesas",
    
    amount: 2
}

const papasGrandes = {

    name: "papas",
    descriptio: "papas fritas frias x porcion",
    price: 200,
    categories: "Papas Fritas",
    
    amount: 4
}

module.exports= {
    usuario1,
    usuario2,
    vendedor1,
    PanPepes,
    pebetesPepes,
    vendedor2,
    bigpeps,
    papasGrandes,
}