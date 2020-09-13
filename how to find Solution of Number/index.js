//Число получается начиная с 1, каждый раз добавляя к исходному 5, либо умножая на 3
// :find(current - текущее число; history - строка, в которой записано, как число было получено)
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}

//1,3,6,8,9,11,13,14,16,18,19,21,22,23,24......
console.log(findSolution(24));