function curryGreet(greeting) {
    return function(name) {
        return `${greeting},${name}`
    }
}

const greetItal = curryGreet("ciao")
console.log(greetItal("Alonzo"));

const greetTex = curryGreet("Howdy")
console.log(greetTex("Alonzo"));
console.log(greetTex("Alan"));
// object methds 
// projects. (IMP.)
// functional js.
// DSA.(IMP)