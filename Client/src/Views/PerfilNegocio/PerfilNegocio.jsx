import Style from './PerfilNegocio.module.css'

const PerfilNegocio = () => {
    return (
        <div>
            <label htmlFor="">Nombre y Apellido: {' '}</label>
            <input type="text" placeholder='Ej: Samuel Diaz' />
            <hr />
            <label htmlFor="">Cuit: {' '}</label>
            <input type="text" placeholder='Ej: 01-234567' />
            <hr />
            <label htmlFor="">Correo electronico: {' '}</label>
            <input type="text" placeholder='Ej: correoprueba@gmail.com' />
            <hr />
            <label htmlFor="">Numero de telefono: {' '}</label>
            <input type="text" placeholder='Ej: +54 123456789' />
            <hr />
            <label htmlFor="">Nombre del negocio: {' '}</label>
            <input type="text" placeholder='Ej: Mi negocio' />
            <hr />
            <label htmlFor="">Pais: {' '}</label>
            <input type="text" placeholder='Ej: Argentina' />
            <hr />
            <label htmlFor="">Provincia: {' '}</label>
            <input type="text" placeholder='Ej: Buenos Aires' />
            <hr />
            <label htmlFor="">Calle y numero: {' '}</label>
            <input type="text" placeholder='Ej: calle fuente dorada #45' />
        </div>
    )
}

export default PerfilNegocio;