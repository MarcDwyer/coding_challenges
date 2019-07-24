function scramble(str1, str2) {
    let data = {}
    for (let x = 0, firstLen = str1.length; x < firstLen; x++) {
        const letter = firstStr[x]
        if (!data[letter]) {
            data[firstStr[x]] = 1
        } else {
            data[letter] += 1
        }
    }
    for (let i = 0, secLen = secondStr.length; i < secLen; i++) {

    }
}


console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))