class Animal {
    common: string;

    change(msg: string) {
        this.common = msg;
    };
}

interface parameter {
    A: number;
    B: number
}

class more extends Animal {
    break() {
        console.log(this.common);
    };

    calculation(msg: parameter) {
        return msg.A * msg.B;
    }
}

class dog implements more {
    common: string;

    change(msg: string) {
        this.common = msg;
    };

    break() {
        console.log(this.common);
    };

    calculation(msg: parameter) {
        return msg.A * msg.B;
    }
}

let newMore = new more();
newMore.common = 'aaa';
newMore.change('sss');
newMore.break();
let newDog = new dog();
newDog.common = ']]]]]'
newDog.break();
// console.log(newMore.calculation({A: 20, B: 30}));
// console.log(newDog.calculation({A: 20, B: 30}));


class Grid {
    static origin = {x: 0, y: 0};

    calculation(pointt: { x: number, y: number }) {
        let x = pointt.x - Grid.origin.x;
        let y = pointt.y - Grid.origin.y;
        return (x * x + y * y) / this.scale;
    }

    constructor(public scale: number) {
        this.scale += scale;
    }
}

let Grid1 = new Grid(10);
let Grid2 = new Grid(2);
let res1 = Grid1.calculation({x: 10, y: 10});
let res2 = Grid2.calculation({x: 10, y: 10});
console.log(res1)
console.log(res2)