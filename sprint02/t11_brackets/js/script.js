function checkBrackets(str) {
    let brackets = [];
    if (typeof (str) !== "string") {
        return -1;
    }
    if (str.length === 0) {
        return -1;
    }
    for (let i = 0; i <= str.length; i++) {

        if (str[i] === '(') {
            brackets.push(str[i]);
        } else if (str[i] === ')') {
            if (brackets[brackets.length - 1] === '(') brackets.pop();
            else brackets.push('');
        }
        else if (str[i] !== ')' && str[i] !== '(') {

        }
    }
    return brackets.length;
}




console.log(checkBrackets('1)()(())2(()'));
console.log(checkBrackets(NaN));