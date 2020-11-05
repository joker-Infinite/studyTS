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

console.log(square({color:'color'}));
console.log(square({height:'height'}));
console.log(square({color:'color',height:'height'}));

/*
* 只读属性
* */