function domainName(url) {
    const newUrl = url.split('').reverse()
    let result = [],
        initPush = false
    for (let x = 0, len = newUrl.length; x < len; x++) {
        const item = newUrl[x],
            test = /^[A-Z0-9]$/i.test(item);

        if (item === '.') {
            if (initPush) {
                result = []
            }
            initPush = true
            continue
        }
        if (initPush) {
            if (!test) break;
            result.push(item)
        }
    }
    return reverser(result)
}

function reverser(arr) {
    return arr.reverse().join('')
}
// https://youtube.com
// icann.org
console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("https://youtube.com"))
console.log(domainName("icann.org"))