import { readFileSync } from 'node:fs';

const input = readFileSync('input.txt', 'utf8').trimEnd();

const DIR = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

function solve(input, part) {
  let r = 0;
  let c = 0;
  let area = 0;
  let perimeter = 0;
  for (const line of input.split('\n')) {
    let [d, n, color] = line.split(/[ ()]+/g);
    n = +n;
    if (part === 2) {
      d = ['R', 'D', 'L', 'U'][color.at(-1)];
      n = parseInt(color.slice(1, -1), 16);
    }

    const [dr, dc] = DIR[d];
    const r0 = r;
    const c0 = c;
    r += dr * n;
    c += dc * n;
    area += (r * c0 - r0 * c) / 2;
    perimeter += n;
  }

  return console.log(area + perimeter / 2 + 1);
}

console.time();
solve(input, 1);
solve(input, 2);
console.timeEnd();