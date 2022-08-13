// function isLeapYear  (year){
//     const number = year % 4;
//     if(number === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// } 

function isLeapYear  (year){
    const number = year % 4;
    if(number === 0){
        return true;
    }
    
        return false;
    
} 

const isMyLeapYear = isLeapYear  (1933);
console.log('my year', isMyLeapYear);

 const isHerLeapYear = isLeapYear (1960);
 console.log('her year', isHerLeapYear);