function alpha(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        console.log(code)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length - 1);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("a"))
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))