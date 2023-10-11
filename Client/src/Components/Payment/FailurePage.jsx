import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PaymentPages.module.css';

const FailurePage = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/home')
    };

    return (
        <div className={styles.paymentPageContainer}>
        <h1>Pago fallido</h1>
        <h2>Lo sentimos, tu pago ha fallado. Por favor, inténtalo de nuevo.</h2>
        <button className={styles.pageButton} onClick={handleHome}>Volver al inicio</button>
        </div>
    );
};

export default FailurePage;