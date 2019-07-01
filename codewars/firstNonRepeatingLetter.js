function firstNonRepeatingLetter(s) {
    let result = ""
    if (s.length <= 1) return s
    for (let x = 0; x < s.length; x++) {
        let count = 0;
        for (let z = 0; z < s.length; z++) {
            if (s[x] === s[z]) count++
        }
        if (count === 1) {
            result = s[x]
            break;
        }
    }
    return result;
  }
console.log(firstNonRepeatingLetter('stress'))  