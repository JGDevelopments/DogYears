var clientAge = 19 ;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = clientAge - 2; 
laterYears *= 4;

console.log(earlyYears)
console.log(laterYears)

var myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears)

const clientName = 'Julian Gaston'.toLowerCase(); 

console.log(`My name is ${clientName}. I am ${clientAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
