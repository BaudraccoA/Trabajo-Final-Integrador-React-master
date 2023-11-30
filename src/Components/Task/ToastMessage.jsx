import React, { useState, useEffect } from 'react';

const ToastMessage = ({ message, onClose }) => {
  // Usar estado local para controlar la visibilidad del mensaje
  const [isVisible, setIsVisible] = useState(true);

  // Ocultar el mensaje después de un tiempo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Llamar a la función de cierre
    }, 2000); // Cambia el tiempo según tus preferencias

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [onClose]);

  // Establecer las clases del estilo según la visibilidad
  const classes = `toast-message ${isVisible ? 'visible' : 'hidden'}`;

  return <div className={classes}>{message}</div>;
};

export default ToastMessage;
