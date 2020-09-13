class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    plus(NewVector) {
        return new Vec(this.x + NewVector.x, this.y + NewVector.y);
    };

    minus(NewVector) {
        return new Vec(this.x - NewVector.x, this.y - NewVector.y);
    };

    length() {
        return (Math.sqrt((this.x ** 2) + (this.y ** 2)))
    };
}

let Vec_1 = new Vec(2, 3);
let Vec_2 = new Vec(1, 1);
console.log("Vector 1 X coord: " + Vec_1.x, "\n", "Vector 1 Y coord: " + Vec_1.y);
console.log("-------------------------");
console.log("Vector 2 X coord: " + Vec_2.x, "\n", "Vector 2 Y coord: " + Vec_2.y);
console.log("-------------------------");
console.log(Vec_1.plus(Vec_2));
console.log(Vec_1.minus(Vec_2));
console.log("-------------------------");
console.log(Vec_1.length());