function outerFunction(x) {
    // Inner function (closure)
    function innerFunction(y) {
        return x + y;
    }

    return innerFunction;
}

const closureExample = outerFunction(5);
const result = closureExample(5);

console.log(result); // Output: 10