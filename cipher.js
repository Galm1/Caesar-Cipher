// made an array of the alphabet twice so i can use it for the cipher. twice so i can extend beyond the first.
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function encipher(str, shift) {
  // let str = 'hello';
  // let shift = 20;
  console.log('input is ' + str);
  let newWord = [];

  let arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    let letter = arr[i];
    for (var j = 0; j < alpha.length; j++) {
      if (letter === alpha[j]) {
        let newLetter = alpha[j + shift];
        newWord.push(newLetter);
        console.log(newWord);
        break;
      };
    }
  }
  let cipherWord = newWord.join('');
  console.log('the output is ' + cipherWord);
  return cipherWord;
};


function decipher(str, shift) {
}

module.exports = {
  encipher,
  decipher
}
