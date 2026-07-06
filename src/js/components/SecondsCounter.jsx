import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
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
  );
};

SecondsCounter.propTypes = {
  seconds: PropTypes.number
};

export default SecondsCounter;
