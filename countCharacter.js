const sentence = "Saya sangat senang mengerjakan soal algoritma";
const words = sentence.split(' ');

let longest = '';


for (const word of words) {
  if (word.length > longest.length) {
    longest = word;
  }
}

const lengthLongest = longest.length;

console.log(`${longest}: ${lengthLongest} karakter.`);