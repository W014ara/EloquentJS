function reverseArray(array) {
    //Creating New Array
    let newArr = [];
    for (let elem = array.length - 1; elem >= 0; elem--) {
        newArr.push(array[elem]);
    }
    return newArr;
};

function reverseArrayInPlace(array) {
    //Without
    for (let index = 0; index < Math.floor(array.length / 2); ++index) {
        let old_elem = array[index];
        array[index] = array[array.length - index - 1];
        array[array.length - index - 1] = old_elem;
    }
    return array;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));