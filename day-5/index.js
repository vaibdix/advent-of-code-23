import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').trimEnd();

function solve1(input) {
  let [seeds, ...maps] = input.split('\n\n');
  seeds = seeds.match(/\d+/g).map(Number);
  for (let map of maps) {
    map = map
      .split('\n')
      .slice(1)
      .map((line) => line.match(/\d+/g).map(Number));
    for (let i = 0; i < seeds.length; i++) {
      const seed = seeds[i];
      for (const [dest, source, len] of map) {
        if (seed >= source && seed < source + len) {
          seeds[i] = seeds[i] - source + dest;
          break;
        }
      }
    }
  }
  console.log(Math.min(...seeds));
}
solve1(input);