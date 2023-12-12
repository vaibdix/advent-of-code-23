import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').trimEnd();

function solve1(input) {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  
    const lines = input.split('\n');
    for (let i = 0; i < lines.length; i++) {
      let [hand, bid] = lines[i].split(' ');
      hand = hand.split('').map((card) => cards.indexOf(card).toString(16));
      bid = +bid;
  
      const map = {};
      for (const card of hand) {
        map[card] = (map[card] ?? 0) + 1;
      }
      const counts = Object.values(map).sort((a, b) => b - a);
  
      lines[i] = [[counts[0], counts[1] ?? 0, ...hand].join(), bid];
    }
  
    lines.sort(([a], [b]) => a.localeCompare(b));
  
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
      sum += lines[i][1] * (i + 1);
    }
    console.log(sum);
  }
  solve1(input);