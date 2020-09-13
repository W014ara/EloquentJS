function isEven(digit) {
    let result;
    if (digit == 0) {
        return true
    } else if (digit == 1) {
        return false;
    } else if (digit < 0) {
        return isEven(-digit)
    } else {
        return isEven(digit - 2);
    }
}

console.log(isEven(-6))