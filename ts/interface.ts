function test(config: { parameter: String }) {
    console.log(config.parameter);
}

test({parameter: 'start'});


/*
* 规范参数类型
* */
interface value {
    color: String
}

function test_i(config: value) {
    console.log(config.color);
}

let value = {
    color: 'red'
};
test_i(value);

/*
* 参数可选  parameterOptional
* */

interface optional {
    color?: String,
    height?: String
}

/*
* 预定义参数 需要return
* */
function square(config: optional): { color: String; area: Number } {
    let data;
    if (config.color) {
        data = config.color
    }
    if (config.height) {
        data = config.height;
    }
    if (config.color && config.height) {
        data = config;
    }
    return data;
}

console.log(square({color: 'color'}));
console.log(square({height: 'height'}));
console.log(square({color: 'color', height: 'height'}));

/*
* 只读属性
* */

/*
* 函数类型
* */
interface function_i {
    (a: string, b: number): Boolean;
}

let fun: function_i;
fun = function (a: String, b: Number) {
    console.log(a + '-' + b);
    console.log(a > b + '');
    return a > b + '';
};
fun('aaa', 999999);

/*
* 可索引的类型
* */
interface StringArray {
    [index: number]: string
}

let myArray: StringArray;
myArray = ['AAA', 'BBB'];

let str = myArray['0'];
console.log(str);


/*
* 类类型
* 实现接口
* */
interface clockInterface {
    currentTime: string;

    setTime(d: string);
}

class Clock implements clockInterface {
    currentTime: string;

    setTime(d: string) {
        this.currentTime = d;
    }

    constructor(m: string) {
        console.log(m);
    }
}

let ll = new Clock('********');
ll.currentTime='222';
ll.setTime('lll');
console.log(ll.setTime('[[['))