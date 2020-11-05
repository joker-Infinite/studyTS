function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj_ = {size: 10, label: "Size 10 Object"};
printLabel(myObj_);


interface LabelledValue {
    label: string;
}

function printLabel_(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel_(myObj);


interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black", width: 50});
console.log(mySquare);