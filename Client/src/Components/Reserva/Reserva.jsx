import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './Reserva.module.css';

const Reserva = () => {
  const [uniqueCode] = useState(generateUniqueCode());
  const [timeRemaining, setTimeRemaining] = useState(3600); // 3600 seg = 1 hora
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar la apertura del modal
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(timer);
        // Abre el modal cuando expire el tiempo de espera
        setModalIsOpen(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  function closeModal() {
    setModalIsOpen(false);
    navigate('/home');
  }

  function generateUniqueCode() {
    return Math.floor(Math.random() * 100000).toString();
  }

  // Funcion para formatear el tiempo restante
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  }

  return (
    <div className={styles.reservaContainer}>
      <h2>Tu código de reserva único:</h2>
      <h1>{uniqueCode}</h1>
      <p>Tiempo restante para retirar el producto:</p>
      <h2>{formatTime(timeRemaining)}</h2>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Tiempo de espera terminado"
      >
        <h2>Tu tiempo de espera ha terminado</h2>
        <h2 className={styles.modalImg}/>
        <p>Realiza una nueva reserva</p>
        <button className={styles.modalButton} onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Reserva;
