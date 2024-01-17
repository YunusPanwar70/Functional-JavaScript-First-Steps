function revrseArray(arr) {
    return [...arr].reverse();
}

const originalArray = [1, 2, 3];
const reverseArray1 = revrseArray(originalArray);

console.log(reverseArray1);