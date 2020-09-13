function deepEqual(param1, param2) {
    if (typeof(param1) == typeof(param2) && param1 == null) return true;
    if (typeof(param1) == typeof(param2) && typeof(param1) == 'object') {
        let keysA = Object.keys(param1),
            keysB = Object.keys(param2);
        if (keysA.length != keysB.length) return false;
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(param1[key], param2[key])) return false;
        }
        return true;
    } else return param1 === param2;
}

let obj1 = {
    param1: 1,
    param1: 1,
    param3: obj3 = {
        param1: 1,
        param2: 2
    }
}

let obj2 = {
    param1: 1,
    param1: 1,
    param3: obj3 = {
        param1: 1,
        param2: 2
    }
}

console.log(deepEqual(null, null))