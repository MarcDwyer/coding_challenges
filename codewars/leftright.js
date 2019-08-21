function findEvenIndex(arr) {
    let result = -1
    for (let x = 0; x < arr.length; x++) {
        const left = x === 0 ? 0 : arr.slice(0, x).reduce((num, i) => num += i, 0)
        const right = x === (arr.length - 1) ? 0 : arr.slice(x + 1, arr.length).reduce((num, i) => num += i, 0)
        if (left === right || left === 0 && right === 0) {
            result = x
            break
        }
    }
    return result
}

// [1,2,3,4,3,2,1]
// [1,100,50,-51,1,1]
// [1,2,3,4,3,2,1]
// [20,10,-80,10,10,15,35]
console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([20,10,-80,10,10,15,35]))