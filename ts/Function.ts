/**
 * super 关键字
 * 当子类和父类有同名方法时
 * 调用父类的方法需要在方法前加上super关键字
 * 如果不加则代表重写父类方法
 * */

class Father {
    private value: string;

    get(v: string) {
        console.log(v + '获取信息')
    }
}

class Son extends Father {
    get = () => super.get('儿子');
}

let son = new Son();
let father = new Father();
//value 只能在Father类中进行访问
// father.value = 'value';
father.get('父亲');
son.get();