function reverseWordWithNumberAtEnd(word) {

  let hasNumber = /\d/.test(word);


  let letters = word.replace(/\d/g, '');
  let number = word.match(/\d/g);

  if (hasNumber) {

    return letters.split('').reverse().join('') + number.join('');
  } else {

    return word.split('').reverse().join('');
  }
}

let kata = "NEGIE1";
let kataTerbalik = reverseWordWithNumberAtEnd(kata);
console.log(kataTerbalik);
