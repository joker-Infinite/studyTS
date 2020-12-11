interface InterfaceEat {
    food: string,
    num: number
}

interface InterfaceSleep {
    location: string,
    time: number
}

interface InterfaceWork {
    content: string,
    time: number
}

class Animal {
    name: string;

    eat(data: InterfaceEat) {
        console.log(this.name + '吃了' + data.num + '斤' + data.food)
    };

    sleep(data: InterfaceSleep) {
        console.log(this.name + '在' + data.location + '上睡了' + data.time + '个小时')
    };

    work(data: InterfaceWork) {
        console.log(this.name + '做了' + data.time + '个小时的' + data.content)
    }
}

let animal = new Animal();
animal.name = '小狗';
animal.eat({food: '狗粮', num: 3});
animal.name = '小猪';
animal.sleep({location: '床上', time: 8});
animal.name = '小猫';
animal.work({content: '剪纸', time: 8});

class Animal_copy extends Animal {

}

let AnimalCopy = new Animal_copy();
AnimalCopy.name = '小狗仔';
AnimalCopy.eat({food: '狗粮', num: 3});

class People extends Animal {
    walk() {
        console.log('人会走')
    };

    jump() {
        console.log('人会跳')
    };

    run() {
        console.log('人会跑')
    }
}

let people = new People();
people.walk();
people.run();
people.jump();

class All implements Animal, People {
    name: string;

    eat(data: InterfaceEat): void {
    }

    jump(): void {
    }

    run(): void {
    }

    sleep(data: InterfaceSleep): void {
    }

    walk(): void {
    }

    work(data: InterfaceWork): void {
    }
}

let all = new All();