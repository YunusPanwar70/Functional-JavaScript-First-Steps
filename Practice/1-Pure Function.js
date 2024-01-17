// function greet(greeting, name) {
//     return `${greeting},${name}`
// }

// console.log(greet("Hi", "Alonzo"));
// console.log(greet("Howdy", "Alan"));

// function greets(name1) {
//     return `Hello ${name1}`
// }

// console.log(greets("Alonzo"));
// console.log(greets("Alan"));

let c = 10;
// function pureExample(a, b) {
//     return a + b
// };

function impureExample(a, b) {
    return a + b * c
};


console.log(impureExample(4, 5))