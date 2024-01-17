function operateOnNumbers(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

const result1 = operateOnNumbers(5, 3, add);
console.log(result1); // Output: 8

const result2 = operateOnNumbers(5, 3, multiply);
console.log(result2); // Output: 15