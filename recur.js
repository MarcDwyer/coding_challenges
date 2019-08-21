const recur = arr => {
    let result = []
    for (let x = 0; x < arr.length; x++) {
        const item = arr[x]
        if (Array.isArray(item)) {
            console.log(item)
            result.push(...recur(item))
        } else {
            result.push(item)
        }
    }
    return result
}


console.log(recur([1, [2, 3, [4, [5]]]]))