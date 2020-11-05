class Animal {
    A: string;

    B(msg: string) {
        this.A = msg;
    };

    C() {
        console.log(this.A);
    }
}

interface parameter {
    A: number;
    B: number
}

class more extends Animal {
    break() {
        console.log('break');
    };

    calculation(msg: parameter) {
        return msg.A * msg.B;
    }
}

let more_ = new more();

console.log(more_.B('sss'));
console.log(more_.C());
console.log(more_.break());
console.log(more_.calculation({A: 1, B: 2}));