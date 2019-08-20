export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function moveToCoordinates(cell) {
  let coordinates = [
    {col: 0, row: 0}, {col: 1, row: 0}, {col: 2, row: 0},
    {col: 0, row: 1}, {col: 1, row: 1}, {col: 2, row: 1},
    {col: 0, row: 2}, {col: 1, row: 2}, {col: 2, row: 2},
  ]

  return coordinates[cell]
}