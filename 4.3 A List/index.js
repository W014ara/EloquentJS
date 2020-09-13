function arrayToList(array) {
    let list = null;
    for (let index = array.length - 1; index >= 0; --index) {
        list = { value: array[index], rest: list };
    }
    return list;
}


function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(elem, list) {
    return { value: elem, rest: list };
}

function nth(list, digit) {
    if (!list) return undefined;
    else if (digit == 0) return list.value;
    else return nth(list.rest, digit - 1);
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([1, 2, 3]), 2));