function countChar(string, needingChar) {
    let Charcounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == needingChar) Charcounter++;
    }
    return Charcounter;
}

console.log(countChar("bbBBC", 'b'));