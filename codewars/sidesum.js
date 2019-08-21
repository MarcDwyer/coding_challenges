function findEvenIndex(arr) {
    //Code goes here!
    let result = -1

    for (let x = 1, len = arr.length; x < len; x++) {
        const before = getSum(arr.slice(0, x))
        const after = getSum(arr.slice(x + 1, len))
        console.log({before, after})
        if (before === after) result = x
    }
    return result
}
function getSum(arr) {
    return arr.reduce((num, item) => num += item, 0)
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])) 
 console.log(findEvenIndex([1, 100, 50, -51, 1, 1]))


// .reduce((num, item) => num += item, 0)