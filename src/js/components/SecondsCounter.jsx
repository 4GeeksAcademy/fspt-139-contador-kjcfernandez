import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  // Estado principal del contador
  const [seconds, setSeconds] = useState(0);

  // Estado para controlar si está activo o pausado
  const [running, setRunning] = useState(true);

  // Estado para saber si es cuenta regresiva
  const [countdown, setCountdown] = useState(false);

  // Estado para el valor inicial de la cuenta regresiva
  const [startValue, setStartValue] = useState("");

  // Estado para alerta
  const [alertAt, setAlertAt] = useState("");

  // Efecto principal del contador
  useEffect(() => {
    if (!running) return; // si está pausado, no hace nada

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (countdown) {
          // Modo cuenta regresiva
          if (prev <= 0) {
            alert("La cuenta regresiva ha terminado");
            setRunning(false);
            return 0;
          }
          return prev - 1;
        } else {
          // Modo normal
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running, countdown]);

  // Efecto para lanzar alerta cuando se llega al tiempo indicado
  useEffect(() => {
    if (alertAt !== "" && Number(alertAt) === seconds) {
      alert(`Has llegado al tiempo ${alertAt} segundos`);
    }
  }, [seconds, alertAt]);

  // Convertir segundos en dígitos
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter-container">

      {/* RELOJ */}
      <div className="counter">
        <div className="clock">
          <i className="fa-regular fa-clock"></i>
        </div>

        {digits.map((digit, index) => (
          <div key={index} className="digit">
            {digit}
          </div>
        ))}
      </div>

      {/* CONTROLES */}
      <div className="controls">

        {/* INPUT PARA ALERTA */}
        <input
          type="number"
          placeholder="Alerta en..."
          value={alertAt}
          onChange={e => setAlertAt(e.target.value)}
        />

        {/* INPUT PARA CUENTA REGRESIVA */}
        <input
          type="number"
          placeholder="Cuenta regresiva desde..."
          value={startValue}
          onChange={e => setStartValue(e.target.value)}
        />

        <button
          onClick={() => {
            if (startValue === "") return alert("Introduce un número");
            setSeconds(Number(startValue));
            setCountdown(true);
            setRunning(true);
          }}
        >
          Iniciar regresiva
        </button>

        <button onClick={() => setRunning(false)}>Parar</button>

        <button onClick={() => setRunning(true)}>Reanudar</button>

        <button
          onClick={() => {
            setSeconds(0);
            setRunning(true);
            setCountdown(false);
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;
