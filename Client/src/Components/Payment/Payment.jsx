// Payment.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPaymentRequest } from '../../Redux/actions';
import styles from './Payment.module.css';

const Payment = () => {
  const dispatch = useDispatch();
  const paymentUrl = useSelector((state) => state.paymentUrl);
  const loading = useSelector((state) => state.loading);

  const [paymentData, setPaymentData] = useState({
    monto: 0,
    descripcion: '',
  });

  const { monto, descripcion } = useParams();

  console.log(monto + " " + descripcion + " ");

  useEffect(() => {
    setPaymentData({
      monto: parseFloat(monto),
      descripcion: descripcion,
    });
  }, [monto, descripcion]);

  const handlePayment = () => {
    dispatch(createPaymentRequest(paymentData));
  };  

  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.paymentImg}/>
      {loading && <p>Cargando...</p>}
      {paymentUrl && (
        <div>
          <p>Redirigiendo a la página de pago de Mercado Pago...</p>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
            Continuar con el pago
          </a>
        </div>
      )}
      {!paymentUrl && (
        <div>
          <p>Monto a pagar: {paymentData.monto}</p>
          <p>Descripción del producto: {paymentData.descripcion}</p>
          <button className={styles.paymentButton} onClick={handlePayment}>
            Pagar
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
