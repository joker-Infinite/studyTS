/*
* 过滤 参数
* */
function fillterParameter(parameter: { name: String, age: Number, sex: String, remark?: String }) {
}

fillterParameter({name: '李明', age: 18, sex: '男', remark: '喜欢打篮球'});

interface fillterInterface {
    name: String,
    age: Number,
    sex?: String,
    remark?: String,
}

function ff(parameter: fillterInterface) {
    console.log(parameter);
}

ff({name: '小明', age: 18, sex: '男'});