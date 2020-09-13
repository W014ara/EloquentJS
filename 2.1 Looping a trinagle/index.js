//First Try
function loadTrinagle(counter) {
    let star = `#`;
    console.log(star);
    while (counter != 1) {
        console.log(star += `#`);
        counter -= 1;
    }
}

//Second Try
function loadTrinagleNew(counter) {
    for (let i = `#`; i.length <= counter; i += `#`) {
        console.log(i);
    }
}

//loadTrinagle(7);
loadTrinagleNew(7);