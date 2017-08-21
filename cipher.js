// made an array of the alphabet twice so i can use it for the cipher. twice so i can extend beyond the first.
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function encipher(str, shift) {
  let newWord = [];

  let arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    let letter = arr[i];
    for (var j = 0; j < alpha.length; j++) {
      if (letter === alpha[j]) {
        let newLetter = alpha[j + shift];
        newWord.push(newLetter);
        break;
      };
    }
  }
  let cipherWord = newWord.join('');
  console.log(cipherWord);
  return cipherWord;
};


function decipher(str, shift) {
  let newWord = [];

  let arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    let letter = arr[i];
    for (var j = 0; j < alpha.length; j++) {
      if (letter === alpha[j]) {
        let newLetter = alpha[j - shift];
        newWord.push(newLetter);
        break;
      }
    }
  }
  let decipherWord = newWord.join('');
  console.log(decipherWord);
  return decipherWord;
};

module.exports = {
  encipher,
  decipher
}
