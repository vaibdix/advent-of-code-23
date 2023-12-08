import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf8').trimEnd();

function solve1(input) {
  let score = 0;
  for (const line of input.split('\n')) {
    let [wins, nums] = line.split(':')[1].split('|');
    wins = wins.match(/\d+/g).map(Number);
    nums = nums.match(/\d+/g).map(Number);
    const nWins = nums.filter((n) => wins.includes(n)).length;
    score += nWins && 2 ** (nWins - 1);
  }
  console.log(score);
}
solve1(input);