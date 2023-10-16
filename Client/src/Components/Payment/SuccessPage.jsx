import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './PaymentPages.module.css';

const SuccessPage = () => {
    
    const navigate = useNavigate();
    const [uniqueCode] = useState(generateUniqueCode());

    function generateUniqueCode() {
        return Math.floor(Math.random() * 100000).toString();
      }

    const handleHome = () => {
        navigate('/home')
    };

    return (
        <div className={styles.paymentPageContainer}>
            <h1>Pago exitoso</h1>
            <h2>¡Tu pago se ha acreditado con éxito!</h2>
            <p>Recuerda retirar tu pedido con este código:</p>
            <h1>{uniqueCode}</h1>
            <button className={styles.pageButton} onClick={handleHome}>Volver al inicio</button>
        </div>
    );
};

export default SuccessPage;