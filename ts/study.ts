interface Study {
    v: number
}

class study {
    num: number = 0;

    public test(value: Study) {
        console.log(value.v)
    }
}

let study_ = new study();
let stu = new study();

study_.test({v: 9999})

study_.num = 222;
stu.num = 333;
console.log(study_.num);
console.log(stu.num);