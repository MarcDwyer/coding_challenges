const duplicateCount = (text) => {
    const newTxt = text.toLowerCase()
    let result = 0;
    let data = {}
    for (let x = 0; x < newTxt.length; x++) {
        if (data[newTxt[x]]) continue
        let count = 0;
        for (let z = x + 1; z < newTxt.length; z++) {
            if (newTxt[x] === newTxt[z] && count < 1) count++
        }
        if (count >= 1) {
            if (!data[newTxt[x]]) {
                data[newTxt[x]] = true
                result++
            }
        }
    }
    return result
}

// "aA11" 
console.log(duplicateCount("aabBcde"))
console.log(duplicateCount("aA11"))