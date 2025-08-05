
import React from "react";
import "./InputComLabel.css";

function InputComLabel({ label, ...props }) {
  return (
    <div className="input-com-label">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}

export default InputComLabel;

