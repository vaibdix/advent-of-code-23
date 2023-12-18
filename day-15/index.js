import { readFileSync } from 'node:fs';

const input = readFileSync('input.txt', 'utf8').trimEnd();

function hash(str) {
  let val = 0;
  for (const char of str) {
    val += char.codePointAt(0);
    val *= 17;
    val %= 256;
  }
  return val;
}

function solve1(input) {
  let sum = 0;
  for (const step of input.split(',')) {
    sum += hash(step);
  }
  console.log(sum);
}
solve1(input);

