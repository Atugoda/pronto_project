import React from "react";

function ColumnButton({ onClick }) {
  return (
    <button className="column-btn" onClick={onClick}>
      ⬇
    </button>
  );
}

export default ColumnButton;
