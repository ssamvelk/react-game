function calculateWinner(squares: Array<null | string>, len: number): null | string {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (len === 4) {
    lines = [
      [0, 1, 2],
      [1, 2, 3],
      [4, 5, 6],
      [5, 6, 7],
      [8, 9, 10],
      [9, 10, 11],
      [12, 13, 14],
      [0, 5, 10],
      [5, 10, 15],
      [3, 6, 9],
      [6, 9, 12],
      [2, 5, 8],
      [7, 10, 13],
      [4, 9, 14],
      [1, 6, 11],
      [0, 4, 8],
      [4, 8, 12],
      [1, 5, 9],
      [5, 9, 13],
      [2, 6, 10],
      [6, 10, 14],
      [3, 7, 11],
      [7, 11, 15],
    ];
  }
  if (len === 5) {
    lines = [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [5, 6, 7],
      [6, 7, 8],
      [7, 8, 9],
      [10, 11, 12],
      [11, 12, 13],
      [12, 13, 14],
      [15, 16, 17],
      [16, 17, 18],
      [17, 18, 19],
      [20, 21, 22],
      [21, 22, 23],
      [22, 23, 24],
      [2, 6, 10],
      [3, 7, 11],
      [7, 11, 15],
      [4, 8, 12],
      [8, 12, 16],
      [12, 16, 20],
      [9, 13, 17],
      [13, 17, 21],
      [14, 18, 22],
      [10, 16, 22],
      [5, 11, 17],
      [11, 17, 23],
      [0, 6, 12],
      [6, 12, 18],
      [12, 18, 24],
      [1, 7, 13],
      [7, 13, 19],
      [2, 8, 14],
      [0, 5, 10],
      [5, 10, 15],
      [10, 15, 20],
      [1, 6, 11],
      [6, 11, 16],
      [11, 16, 21],
      [2, 7, 12],
      [7, 12, 17],
      [12, 17, 22],
      [3, 8, 13],
      [8, 13, 18],
      [13, 18, 23],
      [4, 9, 14],
      [9, 14, 19],
      [14, 19, 24],
    ];
  }

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// eslint-disable-next-line max-len
const calcDifficultWinner = (squares: Array<null | string>, len: number, current: number): string | null => {
  console.log('calcDifficultWinner ');

  return null;
};

export { calculateWinner, calcDifficultWinner };
