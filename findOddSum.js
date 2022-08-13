function getSumOfArray (number){
    let sum = 0;
   for( let i = 0; i < number.length ; i++){
    const index = i;
    const element = number[index];
    sum = sum + element;
    console.log(index,element, sum);
   }
   return sum; 
}

function getOddNumber (number){
    const oddNumber = [];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        if(element % 2 === 1){
            console.log(index,element);
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

const MyNumber = [12, 65, 45, 78, 32, 56, 81];
 const oddNumber = getOddNumber (MyNumber);
console.log(oddNumber);

const oddNumberSum = getSumOfArray (oddNumber);

console.log('odd number sum', oddNumberSum)