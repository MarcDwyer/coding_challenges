const letter = (str) => {
    str = str.toLowerCase()
    let data = {},
        result = null

    for (let x = 0, len = str.length; x < len; x++) {
        const item = str[x]
        if (!data[item]) {
            data[item] = 1
        } else {
            result = item
            break
        }

    }
    return result
}


console.log(letter('BABE'))
console.log(letter('saples'))