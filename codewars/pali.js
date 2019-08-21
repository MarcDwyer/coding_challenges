const pali = (str) => {
    str = str.toLowerCase()
    const str2 = str.split('').reverse().join('')
    return str === str2
}

console.log(pali('Anna'))
console.log(pali('Car'))