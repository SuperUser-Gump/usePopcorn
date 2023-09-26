import React, { useState } from "react";

function Box({ header, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      <div className="box-header">{header}</div>
      {isOpen && children}
    </div>
  );
}

export default Box;
