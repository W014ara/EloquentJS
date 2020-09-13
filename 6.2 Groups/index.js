class Groups {
    constructor() {
        this.group = [];
    };

    add(elem) {
        if (!this.has(elem)) {
            return this.group.push(elem);
        }
    };

    delete(elem) {
        if (this.has(elem)) {
            this.group = this.group.filter(current => current !== elem);
        }
    };

    has(elem) {
        for (let element of this.group) {
            if (elem === element) return true;
        }
        return false;
    };

    static from(obj) {
        let newGroup = new Groups();
        for (let elem of obj) {
            newGroup.add(elem);
        }
        return newGroup;
    };
}
// let col = new Groups();
// col.add(1);
// col.add(1);
// col.add(2);
// col.add(2);
// col.add(2);
// col.add(1);
// console.log(col.group);
// console.log(col.has(1));
// console.log(col.has(2));
// console.log(col.has(3));
// col.delete(2);
// console.log(col.group);
// col.delete(1);
// console.log(col.group);
// col.add(1);
// console.log(col.group);

let col = new Groups();
let newCol = Groups.from([1, 2, 3, 5]);
console.log(col);
console.log(newCol);