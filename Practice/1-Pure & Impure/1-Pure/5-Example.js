function getCurrentDate() {
    return Date().toString().slice(0, 10);
}

const date1 = getCurrentDate();
console.log(date1);