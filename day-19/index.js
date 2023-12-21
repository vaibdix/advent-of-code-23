import { readFileSync } from 'node:fs';

const input = readFileSync('input.txt', 'utf8').trimEnd();

function solve1(input) {
  let [workflows, ratings] = input.split('\n\n');

  const map = {};
  for (const line of workflows.split('\n')) {
    let [name, rules] = line.split(/[{}]/g);
    map[name] = (parts) => {
      function isAccepted(target) {
        return target === 'A' || (target !== 'R' && map[target](parts));
      }

      for (const rule of rules.split(',')) {
        if (rule.includes(':')) {
          let [expr, target] = rule.split(':');
          let op = expr.match(/[\W]/g)[0];
          let [left, right] = expr.split(op);
          if (op === '>' ? parts[left] > +right : parts[left] < +right) {
            return isAccepted(target);
          }
        } else {
          return isAccepted(rule);
        }
      }
    };
  }

  let sum = 0;
  for (const line of ratings.split('\n')) {
    const words = line.split(/\W/g).slice(1, -1);
    const parts = {};
    for (let i = 0; i < words.length; i += 2) {
      parts[words[i]] = +words[i + 1];
    }

    if (map.in(parts)) {
      sum += Object.values(parts).reduce((acc, n) => acc + n);
    }
  }
  console.log(sum);
}
solve1(input);