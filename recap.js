var applePrice = 20;
var mangoPrice = 30;
var bananaPrice = 35;
var totalPrice = applePrice / mangoPrice / bananaPrice;
console.log(totalPrice);

var friends = ['abul', 'bablu', 'cabul', 'dabul'];
var thirdFriend = friends[2];
console.log(thirdFriend); 
friends[3] = 'dambool';
console.log(friends);

//conditionals
if(friends.length < 2){
    console.log('fokir tor kono friend nai');
}

else{
    console.log('ok amar kono friend nai')
}

//loop
var number = 0;
while(number <=6){
    console.log(number);
    number++;
}

for(var i = 0; i <= 10; i++){
    console.log(i);
    
}

//function
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

//object

var jantus ={
    height : 60,
    jantus :' navigator',
    jantsErBpaerTk : 'jni na'

}


