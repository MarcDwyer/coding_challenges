
const dups = (arr) => {
    return [...new Set(arr)]
}

console.log(dups([1,1,2,3,4,4,5,6,7,7]))