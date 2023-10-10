import { useNavigate } from 'react-router-dom';
import style from './Terminos.module.css';

const Terminos = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/home')
    }
    return (
        <div className={style.terminos}>
            <h1>Términos y Condiciones de Uso de Foodier</h1>
            <h2>1. Introducción</h2>
            <p>1.1 Bienvenido a Foodier, una aplicación móvil desarrollada por [Nombre de la Empresa], que tiene como objetivo actuar como intermediario entre restaurantes, tiendas y consumidores para reducir el desperdicio de alimentos.</p>
            <p>1.2 Estos Términos y Condiciones de Uso ("Términos") establecen un acuerdo legal entre usted (el "Usuario" o "Vendedor") y Foodier. Al utilizar la aplicación Foodier, usted acepta estar sujeto a estos Términos y a nuestra Política de Privacidad.</p>
            <h2>2. Registro de Usuarios</h2>
            <p>2.1 Para registrarse como usuario, debe proporcionar un correo electrónico, nombre de usuario, contraseña y lugar de residencia.</p>
            <p>2.2 Para registrarse como vendedor, debe proporcionar los mismos datos que un usuario, además de un número de CUIL válido.</p>
            <h2>3. Uso de la Aplicación</h2>
            <p>3.1 Los usuarios pueden explorar los productos disponibles y realizar compras.</p>
            <p>3.2 Los vendedores pueden listar productos y alimentos no vendidos para su venta.</p>
            <h2>4. Pagos</h2>
            <p>4.1 Los pagos se pueden realizar en línea a través de MercadoPago o en efectivo en los puntos de venta de los vendedores.</p>
            <h2>5. Privacidad y Protección de Datos Personales</h2>
            <p>5.1 La recopilación y el uso de datos personales se rigen por nuestra Política de Privacidad.</p>
            <h2>6. Responsabilidades y Obligaciones</h2>
            <p>6.1 Los usuarios deben proporcionar información precisa y actualizada.</p>
            <p>6.2 Los vendedores deben garantizar la calidad y seguridad de los productos listados.</p>
            <h2>7. Exención de Responsabilidad</h2>
            <p>7.1 Foodier actúa como intermediario y no se hace responsable de la calidad de los productos o la conducta de los vendedores.</p>
            <h2>8. Resolución de Disputas</h2>
            <p>8.1 Las disputas entre usuarios y vendedores se resolverán según los procedimientos de Foodier.</p>
            <h2>9. Cambios en los Términos</h2>
            <p>9.1 Foodier se reserva el derecho de actualizar o modificar estos Términos en cualquier momento.</p>
            <h2>10. Contacto</h2>
            <p>10.1 Para cualquier consulta, contáctenos en helpfoodier@gmail.com.</p>
            <button onClick={handleClose}>Volver al inicio</button>
        </div>
    )};

export default Terminos;