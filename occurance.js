const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const countDataOccurance = {};

for (const word of INPUT) {
  if (countDataOccurance[word]) {

    countDataOccurance[word] += 1;
  } else {

    countDataOccurance[word] = 1;
  }
}

const OUTPUT = QUERY.map((word) => countDataOccurance[word] || 0);

console.log(OUTPUT);
