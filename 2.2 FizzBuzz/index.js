//My function
function FizzBuzz(digits) {
    for (let num = 1; num <= digits; num++) {
        let execute;
        if (num % 5 == 0 && num % 3 == 0) {
            execute = 'FizzBuzz';
        } else if (num % 5 == 0 && num % 3 != 0) {
            execute = 'Buzz';
        } else if (num % 3 == 0) {
            execute = 'Fizz';
        } else {
            execute = num;
        }
        console.log(execute);
    }
}

//Other way
function FizzBuzzNew(digits) {
    for (let n = 1; n <= digits; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }
}
FizzBuzzNew(100);