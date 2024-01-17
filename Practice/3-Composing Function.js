let ender = ending => (input) => input + ending;

let adore = ender(" rocks");
let annouce = ender(" y'all");
let exclaim = ender(" !");

let hypeUp = (x) => exclaim(annouce(adore(x)));

console.log(hypeUp("JS"));
console.log(hypeUp("FP"));