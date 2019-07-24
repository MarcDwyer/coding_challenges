function incrementString(str) {
    const arry = str.split('');
    let resNum = 1;
    for (let x = 0; x < arry.length; x++) {
        const item = parseInt(arry[x])
        if (item === 0 || item) {
            let number = [];
            for (let i = x; i < arry.length; i++) {
                number.push(parseInt(arry[i]))
            }
            console.log(number)
            str = arry.splice(0, x).join('')
            resNum = parseInt(number.join('')) + 1
            console.log(resNum)
            break
        }
    }
    //  console.log({resStr, resNum})
    return `${str + resNum}`
}

console.log(incrementString('foo'))
console.log(incrementString('foo12'))
console.log(incrementString('foobar099'))
console.log(incrementString("foobar000"))
// "foobar000"