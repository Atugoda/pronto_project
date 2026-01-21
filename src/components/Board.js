import React from "react";
import Cell from "./Cell";
import ColumnButton from "./ColumnButton";

function Board({ board, onColumnClick }) {
  return (
    <div className="board-wrapper">
      <div className="column-buttons">
        {board[0].map((_, colIndex) => (
          <ColumnButton
            key={colIndex}
            onClick={() => onColumnClick(colIndex)}
          />
        ))}
      </div>

      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} value={cell} />
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
