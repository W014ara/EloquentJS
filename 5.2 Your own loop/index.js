function loop(digit, condition, update, body) {
    for (let current = digit; condition(current); current = update(current)) {
        body(current);
    }
}

loop(0, n => n <= 10, n => n = n + 1, console.log);