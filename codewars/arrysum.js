var sum_pairs = function (ints, s) {
    let result;
    for (let x = 0; x < ints.length; x++) {
        const parentItem = ints[x]
        for (let i = 0; i < ints.length; i++) {
            if (i !== x) {
                const child = ints[i]
                if (parentItem + child === s) {
                    result = [parentItem, child]
                    break
                }
            }
        }
        if (result) break
    }
    return result
}
// [1,-2,3,0,-6,1]
console.log(sum_pairs([1,-2,3,0,-6,1], -6))
console.log(sum_pairs([4, 3, 2, 3, 4], 6))