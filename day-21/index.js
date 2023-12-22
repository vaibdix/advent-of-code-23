import { readFileSync } from 'node:fs';

const input = readFileSync('input.txt', 'utf8').trimEnd();

function safeMod(a, b) {
  return a < 0 ? (b - (-a % b)) % b : a % b;
}

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solve1(input) {
  let positions = new Set();
  const map = input.split('\n').map((line, r) =>
    line.split('').map((char, c) => {
      if (char === 'S') {
        positions.add([r, c].join());
      }
      return +(char !== '#');
    })
  );

  for (let i = 0; i < 64; i++) {
    const nextPositions = new Set();
    for (const p of positions) {
      const [r, c] = p.split(',').map(Number);
      for (const [dr, dc] of dirs) {
        if (map[r + dr]?.[c + dc]) {
          nextPositions.add([r + dr, c + dc].join());
        }
      }
    }
    positions = nextPositions;
  }
  console.log(positions.size);
}
solve1(input);