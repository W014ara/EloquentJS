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

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.group.length) {
            return { done: true };
        } else {
            let result = {
                value: this.group.group[this.position],
                done: false
            };
            this.position++;
            return result;
        }
    }
}

for (let value of Groups.from([1, 2, 3, 4, 5])) {
    console.log(value);
}