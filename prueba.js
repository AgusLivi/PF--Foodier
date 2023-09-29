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
    location: "moreno",
    password: "123456",
    email: 'pepe@gmail.com'
}

const usuario2 = {
    name: "eve",
    location: "lujan",
    password: "123456",
    email: 'pepo@gmail.com'
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
    categories: "Ensaladas",

    amount: 1
}

const pebetesPepes = {

    name: "pebetes",
    description: "pebetes no tan frescos x kilo",
    price: 249.99,
    categories: "Ensaladas",
    
    amount: 3
}

const vendedor2 = {
    name: "Peps burger",
    email: "pepsburger@gmail.com",
    password: "123456",
    adress: "CABA",
    time: "08 - 18",
    contact: "1125464597",
    payment: "Efectivo",
    rating: []
}

const bigpeps = {

    name: "bigpepes",
    description: "se callo al piso",
    price: 200,
    categories: "Pastas",
    
    amount: 2
}

const papasGrandes = {

    name: "papas",
    description: "papas fritas frias x porcion",
    price: 200,
    categories: "Pastas",
    
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