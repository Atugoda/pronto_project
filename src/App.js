import React, { useState } from "react";
import Board from "./components/Board";
import { checkWinner } from "./utils/checkWinner";

const ROWS = 6;
const COLS = 7;

const createBoard = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(null));

function App() {
  const [board, setBoard] = useState(createBoard());
  const [currentPlayer, setCurrentPlayer] = useState("RED");
  const [winner, setWinner] = useState(null);

  const handleColumnClick = (col) => {
    if (winner) return;

    const newBoard = board.map(row => [...row]);

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        break;
      }
    }

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else {
      setCurrentPlayer(currentPlayer === "RED" ? "YELLOW" : "RED");
    }

    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(createBoard());
    setCurrentPlayer("RED");
    setWinner(null);
  };

  return (
    <div className="app">
      <h1 className="app-title">Two Player Game – Connect Four</h1>

      {!winner && (
        <h2 className="turn-info">
          Turn: <span className={currentPlayer}>{currentPlayer}</span>
        </h2>
      )}

      <Board board={board} onColumnClick={handleColumnClick} />

      {winner && (
        <div className="modal-overlay" onClick={resetGame}>
          <div className="winner-modal" onClick={(e) => e.stopPropagation()}>
            <h1 className="modal-title">🎉</h1>
            <h2 className="modal-winner">
              Winner: <span className={winner}>{winner}</span>
            </h2>
            <button className="reset-btn" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
