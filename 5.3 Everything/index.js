function every(array, test) {
    for (elem of array) {
        if (!test(elem)) return false;
    }
    return true;
}

function everyWithSome(array, test) {
    return !array.some(val => !test(val));
}

console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));
console.log(everyWithSome([], n => n < 10));