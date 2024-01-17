function filterEvenNumber(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumber1 = filterEvenNumber(numbers);
console.log(evenNumber1);