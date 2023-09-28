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
    nombre: "ayrton",
    ubicacion: "moreno",
    contraseña: "123456"
}

const usuario2 = {
    nombre: "eve",
    ubicacion: "lujan",
    contraseña: "123456"
}

const vendedor1 = {
    nombre: "Pepes",
    email: "pepespanaderia@gmail.com",
    contraseña: "123456",
    direccion: "moreno",
    horario: "08 - 18",
    contacto: "1125464597",
    tipoDePago: "tarjeta",
    validaciones: []

}

const PanPepes = {

    nombre: "pan",
    descripcion: "pan no tan fresco x kilo",
    precio: 149.99,
    categoria: "Harinas",

    cantidad: 1
}

const pebetesPepes = {

    nombre: "pebetes",
    descripcion: "pebetes no tan frescos x kilo",
    precio: 249.99,
    categoria: "Harinas",
    
    cantidad: 3
}

const vendedor2 = {
    nombre: "Peps burger",
    email: "pepsburger@gmail.com",
    contraseña: "123456",
    direccion: "CABA",
    horario: "08 - 18",
    contacto: "1125464597",
    tipoDePago: "tarjeta",
    validaciones: []
}

const bigpeps = {

    nombre: "bigpepes",
    descripcion: "se callo al piso",
    precio: 200,
    categoria: "carne",
    
    cantidad: 2
}

const papasGrandes = {

    nombre: "papas",
    descripcion: "papas fritas frias x porcion",
    precio: 200,
    categoria: "papa",
    
    cantidad: 4
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