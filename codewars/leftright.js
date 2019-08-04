function findEvenIndex(arr) {
  
    for (let x = 0; x < arr.length; x++) {
        if (x === 0 || x === arr.length - 1) continue
        const left = arr.slice(0, x)
        const right = arr.reverse().slice(x, arr.length)
        console.log({left, right})
    }
}

// [1,2,3,4,3,2,1]

console.log(findEvenIndex([1,2,3,4,3,2,1]))