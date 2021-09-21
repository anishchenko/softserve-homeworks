// task2
alert('anishchenko');

//task3
let e = 2.7;
let pi = 3.14;
console.log('e =', e, 'pi =', pi);
e = pi;
console.log('new value e =', e,', ', 'pi =', pi);

//task4
let obj = {
  String: 'string',
  Number: 42,
  Boolean: true,
  Undefined: undefined,
  Null: null,
};
console.log(obj);

//task5 
/*Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль. */
let isAdult = confirm('Are you an adult?');
console.log(isAdult);

//task6
/*В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
 */
let num = 5;
console.log(typeof num);
let name = 'oleksandr';
let lastName = 'anishchenko';
let group = 'Lv-636.JS core';
let yearOfBirth = 1991;
let maritalStatus = true;
let Null = null;
let Undefined;
console.log('type of yearOfBirth:', typeof yearOfBirth, '(',yearOfBirth,')');
console.log('type of maritalStatus:', typeof maritalStatus, '(',maritalStatus,')');
console.log('type of name:', typeof name, '(',name,')');
console.log('type of lastName:', typeof lastName, '(',lastName,')');
console.log('type of group:', typeof group, '(',group,')');
console.log('type of null:', typeof Null, '(',Null,')');
console.log('type of Undefined:', typeof Undefined, '(',Undefined,')');

//task7
/* За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”. */

let userLogin = prompt('Enter login');
let userEmail = prompt('Enter your email');
let userPass = prompt('Enter password');

alert(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPass}`);

//task8
/*Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран. */
let secondsInMinute = 60;
let secondsInHour, secondsInDay, secondsInMonth;
secondsInHour = secondsInMinute * 60;
secondsInDay = secondsInHour * 24;
secondsInMonth = secondsInDay * 30;
console.log(`In hour ${secondsInHour} seconds`);
console.log(`In day ${secondsInDay} seconds`);
console.log(`In month ${secondsInMonth} seconds`);
