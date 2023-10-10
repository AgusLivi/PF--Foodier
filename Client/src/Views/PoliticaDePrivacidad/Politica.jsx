import { useNavigate } from 'react-router-dom';
import style from './Politica.module.css';

const Politica = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/home')
    }
    return (
        <div className={style.politica}>
            <h1>Política de Privacidad de Foodier</h1>
            <h2>1. Introducción</h2>
            <p>1.1 Foodier ("nosotros", "nuestra" o "la Aplicación") es una aplicación móvil que actúa como intermediario entre restaurantes, tiendas y consumidores para reducir el desperdicio de alimentos.</p>
            <p>1.2 Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza la aplicación Foodier. Al utilizar nuestra aplicación, usted acepta las prácticas descritas en esta política.</p>
            <h2>2. Información que Recopilamos</h2>
            <p>2.1 Información de Registro:</p>
            <p>Para usuarios: Dirección de correo electrónico, nombre de usuario, contraseña y lugar de residencia.</p>
            <p>Para vendedores: Los mismos datos que un usuario, además de un número de CUIL válido.</p>
            <p>2.2 Información de Transacciones:</p>
            <p>Detalles de las compras, incluyendo productos comprados y método de pago.</p>
            <p>Información sobre los pedidos, incluyendo fecha, hora y ubicación de entrega.</p>
            <p>2.3 Información de Comunicación:</p>
            <p>Historial de comunicaciones con otros usuarios y vendedores a través de la aplicación.</p>
            <p>2.4 Información de Ubicación:</p>
            <p>Datos de ubicación en tiempo real para facilitar la entrega de productos.</p>
            <h2>3. Uso de la Información</h2>
            <p>3.1 Utilizamos la información recopilada para los siguientes fines:</p>
            <p>Facilitar la operación de la aplicación.</p>
            <p>Procesar pedidos y pagos.</p>
            <p>Comunicarnos con usuarios y vendedores.</p>
            <p>Mejorar nuestros servicios.</p>
            <p>Cumplir con las leyes y regulaciones aplicables.</p>
            <h2>4. Compartir Información con Terceros</h2>
            <p>4.1 Compartimos información con terceros solo en la medida necesaria para operar la aplicación, incluyendo:</p>
            <p>Vendedores para completar pedidos.</p>
            <p>Proveedores de servicios de pago.</p>
            <p>Autoridades legales en cumplimiento de la ley.</p>
            <h2>5. Seguridad de la Información</h2>
            <p>5.1 Implementamos medidas de seguridad para proteger su información personal, incluyendo el cifrado de datos sensibles.</p>
            <h2>6. Sus Derechos</h2>
            <p>6.1 Usted tiene derecho a:</p>
            <p>Acceder, corregir o eliminar su información personal.</p>
            <p>Retirar su consentimiento para el procesamiento de datos.</p>
            <p>Presentar una queja ante la autoridad de protección de datos.</p>
            <h2>7. Cambios en la Política de Privacidad</h2>
            <p>7.1 Nos reservamos el derecho de actualizar o modificar esta política en cualquier momento. Le notificaremos cualquier cambio importante.</p>
            <h2>8. Contacto</h2>
            <p>8.1 Para cualquier consulta o inquietud relacionada con esta Política de Privacidad, póngase en contacto con nosotros en helpfoodier@gmail.com.</p>
            <button onClick={handleClose}>Volver al inicio</button>
        </div>
    )};

export default Politica;