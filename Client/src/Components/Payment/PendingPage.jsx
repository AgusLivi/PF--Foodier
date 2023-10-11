import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PaymentPages.module.css';

const PendingPage = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home')
    }
    return (
        <div className={styles.paymentPageContainer}>
        <h1>Pago pendiente</h1>
        <h2>Tu pago está en proceso de aprobación. Pronto recibirás un correo electrónico con el estado de tu pago.</h2>
        <button className={styles.pageButton} onClick={handleHome}>Volver al inicio</button>
        </div>
    );
};

export default PendingPage;