// Iteration ka matlab hai kisi sequence mein ek ek karke har item ko dekhte jana.
// Yeh kisi bhi list mein har ek cheez ko dekhna hai, uske saath kuch karna hai, 
// phir agla item dekhte jana hai.Agar aapke paas ek numbers ki list hai,
//  toh un numbers ke saath kuch karna jaise ki unhein jodna, ya koi aur kaam karna,
//  aur phir agli number ki taraf badhna, yahi iteration hai.

function sum(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        total += num[i]
    }
    return total;
}
console.log(sum([0, 1, 2, 3, 4]));