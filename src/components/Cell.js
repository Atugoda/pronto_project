import React from "react";

function Cell({ value }) {
  return (
    <div className={`cell ${value ? value.toLowerCase() : ""}`}>
      {value && <div className="token" />}
    </div>
  );
}

export default Cell;
