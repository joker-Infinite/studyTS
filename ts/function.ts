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