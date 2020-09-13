/*
    В этом файлике рассмотрены основные операции, а так же теория по 
    ассинхронному программированию на JavaScript.
*/
function currentTime(){
    return new Date();
}

// setInterval(() => {
//     console.log((new Date).getDay())
// }, 1000);


let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(value));