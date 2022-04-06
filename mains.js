//ex1

const city = 'Саратов';
console.log(city);

const country = 'Россия';
console.log(country);

let number = 999999;
console.log(number);

const stadium = 'yes';
if (stadium == 'yes') {
    console.log('У нас есть стадион');
}else {
    console.log('У нас нет стадиона');
}


//ex2

const num1 = 40;
const num2 = 70;
let s = num1 * num2;
console.log(s + ' ' + 'сантиметров');


//ex3

const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
let distance = speedOfFirst * 2 + speedOfSecond * 2;
console.log (distance + ' ' + 'километров');


//ex4

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
    console.log('randomNumber больше 50');
} else {
    console.log('randomNumber больше 20, и меньше 50');
}


//ex5

const randomNumber2 = Math.floor(Math.random() * 100);
switch(true) {
    case (randomNumber2 < 20):
        console.log('randomNumber2 меньше 20');
        break;
    case (randomNumber2 > 50):
        console.log('randomNumber2 больше 50');
        break;
    default:
        console.log('randomNumber2 больше 20, и меньше 50');

}