interface Study {
    v: number
}

class study {
    num: number = 0;

    public test(v: Study) {
        console.log(v.v)
    }
}

let study_ = new study();
let stu = new study();

study_.num = 222;
stu.num = 333;
console.log(study_.num);
console.log(stu.num);