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
/*Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль.
*/
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
/*Створіть порожній масив;
1) У перший елемент масиву запишіть будь-яке число;
2) У другий елемент масиву запишіть будь-який рядок;
3) У третій елемент масиву запишіть будь-яке логічне значення;
4) У четвертий елемент масиву запишіть значення null;
5) Виведіть на екран число елементів, яке зберігається в масиві;
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
7) Виведіть на екран п'ятий елемент масиву.
8) Видаліть 1-ий елемент масиву і виведіть масив на екран.
 */
let arr = [5, 'asdf', false, null];
console.log('Зараз в масиві міститься ' + arr.length + ' елементів');
console.log(arr);
arr.push(prompt('Введіть значення для 5 елементу масиву'));
console.log('Пятий елемент масиву: ' + arr[4]);
console.log('Масив із 5 значеннями: ' + arr);
arr.shift(1);
console.log('Масив без першого елементу ' + arr);

//task 4
/*Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"]; 
Результуючий масив:
"Rome*Lviv*Warsaw"
 */
let cities = ['rome', 'lviv', 'warsaw'];
let resultString = '';
for(let key in cities) {
	resultString += cities[key] + '*';
}
console.log(resultString);

//task 5
/*Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”
 */
let isAdult = +prompt('Вкажіть свій вік', 18);
if(isAdult >= 18) {
  alert('Ви досягли повнолітнього віку');
} else {
  alert('Ви ще надто молоді');
}

//task 6
/*Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424). 
 */
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
/*Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
 */
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

