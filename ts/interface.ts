function test(config: { parameter: String }) {
    console.log(config.parameter);
}

test({parameter: 'start'});


function test_(config: String) {
    console.log(config);
}

test_('start_');


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
interface point {
    readonly x: String,
    readonly y: number
}

/*
* 第一次赋值没有问题
* */
let p1: point = {x: '1', y: 2};

/*
* p1.x = 'o';
* Cannot assign to 'x' because it is a read-only property
* 无法分配给“ x”，因为它是只读属性
* */

/*
* 数组 设置只读属性
* */

let arr: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr;
/*
* ro[0] = 90;
*  Index signature in type 'readonly number[]' only permits reading
* “ readonly number []”类型的索引签名仅允许读取
* arr = ro; error
* */
arr = ro as number[];
console.log(arr);

/*
* readonly vs const
* 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly
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
ll.currentTime = '222';
ll.setTime('lll');
console.log(ll.setTime('[[['))