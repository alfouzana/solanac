import React from "react";

const Input = ({ icon, placeholder, handleChange }) => {
  return (
    <div className="input-group">
      <div className="icon">{icon}</div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default Input;
