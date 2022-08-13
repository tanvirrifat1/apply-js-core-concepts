function mileToKilo(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const meter = 1000;
const kilo = mileToKilo(meter);
console.log(kilo);