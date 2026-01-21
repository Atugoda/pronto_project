const directions = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
];

export function checkWinner(board) {
  const rows = board.length;
  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const player = board[r][c];
      if (!player) continue;

      for (let [dr, dc] of directions) {
        let count = 1;

        for (let i = 1; i < 4; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;
          if (
            nr < 0 ||
            nr >= rows ||
            nc < 0 ||
            nc >= cols ||
            board[nr][nc] !== player
          ) {
            break;
          }
          count++;
        }

        if (count === 4) return player;
      }
    }
  }
  return null;
}
