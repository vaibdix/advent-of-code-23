import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'utf8').trimEnd();

function solve2(input) {
    const lines = input.split('\n');
    const nCards = lines.map(() => 1);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let [wins, nums] = line.split(':')[1].split('|');
      wins = wins.match(/\d+/g).map(Number);
      nums = nums.match(/\d+/g).map(Number);
      const nWins = nums.filter((n) => wins.includes(n)).length;
      for (let j = 0; j < nWins; j++) {
        nCards[i + 1 + j] += nCards[i];
      }
    }
    console.log(nCards.reduce((acc, n) => acc + n));
  }
  solve2(input);