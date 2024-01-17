function addTwo(x) {
    return x + 2;
}

function multiplyByThree(x) {
    return x * 3;
}

const composedFunction = (value) => multiplyByThree(addTwo(value));
const result = composedFunction(5);
console.log(result); // 21