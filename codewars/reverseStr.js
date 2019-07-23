function spinWords(str) {
    let result = []
    let word = []
    for (let x = 0; x <= str.length; x++) {
        const letter = str[x]
        switch (letter) {
            case " ":
                if (word.length >= 5) word.reverse()
                result.push(word.join(''))
                word = []
                break
            default:
                if (x === str.length) {
                    if (word.length >= 5) word.reverse()
                    result.push(word.join(''))
                    break
                }
                word.push(letter)
        }
    }
    return result.join(' ')
}


function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  
console.log(spinWords("Hey fellow warriors"))