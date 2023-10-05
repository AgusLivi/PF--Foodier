import React from "react";

const Alert = ({ type, message, onClose }) => {
  return (
    <div>
      {message}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Alert;
