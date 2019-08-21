const rep = (str) => {
    const reg = new RegExp(/[^a-zA-Z]/ig)
    const str1 = str.replace(reg, "")
    return str1
}

console.log(rep('.12abc12'))