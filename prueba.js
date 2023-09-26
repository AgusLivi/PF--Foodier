const producto = {
    nombreProducto: '',
    cantidad: 0,
    precio: '$0',
    imagenProducto: '',
    descripcionProducto: '',
    categoria: [],
    fechaFabricacion: 'mes-dia-año'
}

const comercio = {
    infoPropietario: {
        nombreCompletoPropietario: '',
        dni: '',
        cuit: '',
        email: ''
    },

    infoComercio: {
        nombreComercio: '',
        ubicacion: {
            pais: '',
            provincia: '',
            ciudad: '',
            calle: '',
            numeracion: ''
        },
        idComercio: '',
        logo: '',
        rubro: 'que area es, pizza, pan y asi',
        horario: '',
        valoracionComercio: {
            promedio: 0,
            todasValoraciones: []
        },
        comentariosUsuarios: [],
        contacto: 0,
        opcionPago: []
    }
}