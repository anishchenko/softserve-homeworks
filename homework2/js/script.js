//task 1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = (x == 1) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = (x / y) * typeof x;
console.log(res4);
console.log(typeof x);

// task 2
const userNumber = +prompt('Введіть число', '0');
if (userNumber > 0 && userNumber % 2 == 0) {
  console.log('Число ' + userNumber + ' є парним додатним');
} else {
  console.log('Число ' + userNumber + ' не є парним додатним');
}

if (userNumber % 7 == 0) {
  console.log('Число ' + userNumber + ' кратне 7');
} else {
  console.log('Число ' + userNumber + ' не кратне 7');
}

//task 3
let arr = [5, 'asdf', false, null];
console.log('Зараз в масиві міститься ' + arr.length + ' елементів');
console.log(arr);
arr.push(prompt('Введіть значення для 5 елементу масиву'));
console.log('Пятий елемент масиву: ' + arr[4]);
console.log('Масив із 5 значеннями: ' + arr);
arr.shift(1);
console.log('Масив без першого елементу ' + arr);

//task 4
let cities = ['rome', 'lviv', 'warsaw'];
let resultString = '';
for(let key in cities) {
	resultString += cities[key] + '*';
}
console.log(resultString);

//task 5
let isAdult = +prompt('Вкажіть свій вік', 18);
if(isAdult >= 18) {
  alert('Ви досягли повнолітнього віку');
} else {
  alert('Ви ще надто молоді');
}

//task 6
const a = +prompt('Ведіть сторону а');
const b = +prompt('Ведіть сторону b');
const c = +prompt('Ведіть сторону c');
if(isNaN (a) || isNaN(b) || isNaN(c)) {
	console.log('Incorrect data');
} else {
	let P = (a + b + c) / 2;
	let S = (P * (P - a) * (P - b) * (P - c)) ** (1/2); // корінь квадратний
	console.log('Число а: ' + a + ' Число b: ' + b + ' Число c: ' + c);
  console.log('Півпериметр дорівнює: ' + P);
	console.log('Площа дорівнює: ' + S.toFixed(3));
}
if(Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) || Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2) || Math.pow(c, 2) == Math.pow(b, 2) + Math.pow(a, 2)){
	console.log('Трикутник прямокутний');
} else {
	console.log('Трикутник не прямокутний');
}

//task 7
let date = new Date();
let currentHours = date.getHours();
console.log(currentHours);
if(currentHours >= 23 || currentHours < 5 ) {
  console.log('Доброї ночі із if else');
} else if (currentHours >= 5 && currentHours < 11) {
    console.log('Доброго ранку із if else');
} else if (currentHours >= 11 && currentHours < 17) {
    console.log('Доброго дня із if else');
} else {
  console.log('Доброго вечора із if else');
}

switch (currentHours) {
  case 23:
  case 24:
  case 1:
  case 2: 
  case 3:
  case 4:
    console.log('Доброї ночі із switch');
    break;
  case 5:
  case 6: 
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('Доброго ранку із switch');
    break;
  case 11:
  case 12: 
  case 13:
  case 14:
  case 15:
  case 16:
    console.log('Доброго дня із switch');
    break;
  default:
    console.log('Доброго вечора із switch');
    break;
}

