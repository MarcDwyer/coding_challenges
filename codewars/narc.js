function narcissistic1(value) {
    const numStr = value.toString()
    let results = []
    for (let x = 0; x < numStr.length; x++) {
        const num = numStr[x]
        results.push(Math.pow(parseInt(num), numStr.length))
    }
    let res = 0
    for (let i = 0; i < results.length; i++) {
        const num = results[i]
        console.log(num)
        res = res + num
    }
    return res === value
}

function narcissistic(value) {
    return ('' + value).split('').reduce(function (p, c) {
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

console.log(narcissistic(1634))