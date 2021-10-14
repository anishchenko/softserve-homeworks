/*1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
 */

function calcRectangleArea(width, height) {
  return width * height;
}

const width = +prompt('Enter width');
const height = +prompt('Enter height');
try {
  if(Number.isNaN(width) || Number.isNaN(height)) {
    throw new TypeError('width or height is not a number')
  }
  if(width === 0 || height === 0) {
    throw new RangeError('width or height must be > 0');
  }

  console.log('Rectangle area = ' + calcRectangleArea(width, height));
} catch(err) {
  console.log(err.name);
  console.log(err.message);
}

/*2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.
 */

function checkAge() {
  const userAge = +prompt('Enter your age');
  try {
    if(userAge == 0) {
      throw new TypeError('The field is empty! Please enter your age');
    }
    if(userAge < 14) {
      throw new TypeError('You age must be > 14 years');
    }
    if(Number.isNaN(userAge)) {
      throw new TypeError('Your age must be a number');
    }
    alert('Everthing is ok, enjoy watching the movie');
  } catch(err) {
    // alert(err.name);
    alert(err.name + ': ' + err.message);
  }
}
checkAge();

