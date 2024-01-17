// function carry(a) {
//   return function (b) {
//     return function (c) {
//       return a(b, c);
//     };
//   };
// }
function curry(d) {
  return function (a) {
    return function (b) {
      return d(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let c = curry(sum);

console.log(c(10)(5));