function factorial (number){
    let i = number;
    let result = 1;
    while(i >= 1) {
        result = result * i;
        i --;
    }
    return result;
}
const number = 7;
const yahh = factorial (number);
console.log('ai looo', yahh);