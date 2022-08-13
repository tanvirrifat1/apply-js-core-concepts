// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);

function isEven (number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else {
        return false;
    }
}
const myNUmberIsEven = isEven(303);
console.log(myNUmberIsEven);
const herNumberIsEven = isEven (1280);
console.log(herNumberIsEven); 