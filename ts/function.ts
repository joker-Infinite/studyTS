//函数名括号后跟了数据类型就需要 return
function fun(x: number, y: number): number {
    return x + y;
}

fun(3, 5);

let nFun: (x: string, y: string) => string = function (x: string, y: string): string {
    console.log(x + y);
    return x + y;
};
nFun('1', '2');
//推断函数

let ff = function (x: string, y: string): string {
    return x + y;
};
console.log(ff('C', 'G'));

//可选参数和默认参数
function optional(firstName: string, lastName?: string) {
    let name = firstName + '-' + lastName;
    console.log(name)
}

optional('liMing');//liMing-undefined

function defaultArg(firstName: string, lastName = "Smith") {
    let name = firstName + '-' + lastName;
    console.log(name)
}

defaultArg('liMing');//liMing-Smith
defaultArg('liMing', 'xiaoHong');//liMing-xiaoHong

//剩余参数
function remainingArg(firstName: string, ...restOfName: string[]) {
    console.log(firstName)
    console.log(restOfName)
}

remainingArg('a', 'b', 'c', 'd', 'e', 'f', 'g');

let deck = {}