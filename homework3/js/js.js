/*1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while. */
const arr = [2, 3, 4, 5];
let mult = 1;
for (let i = 0; i < arr.length; i++) {
  mult *= arr[i];
}
console.log('multiplication from for: ' + mult);

mult = 1;
let i = 0;
while (i < arr.length) {
  mult *= arr[i];
  i++;
}
console.log('multiplication from while: ' + mult);

/*2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" 
 */
for(i = 0; i <= 15; i++) {
  if(i == 0) {
    console.log(i + ' is even')
  } else if(i % 2 == 0) {
    console.log(i + ' is even')
  } else {
    console.log(i + ' is odd')
  } 
}

/*3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // 399,310,232,379,40
 */
function randArray() {
  let arr =[];
  let i = 0;
    while(i < 5) {
    const randNum = Math.floor(Math.random() * 1000);
    if(randNum >= 0 && randNum <= 500) {
      arr.push(randNum);
      i++;
    }
  }
  return arr;
}
console.log(randArray());

/*4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

Sample Output:
raiseToDegree(3, 4);  // 81
 */
const userNumA = parseInt(prompt('Enter first number: ', 3));
const userNumB = parseInt(prompt('Enter second number: ', 4));

function raiseToDegree(a, b) {
  let res = a ** b;
  console.log('number ' + a + ' in degree ' + b + ' equals ' + res);
}

raiseToDegree(userNumA, userNumB);

/*5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4
 */
function findMin() {
  let minArg = arguments[0];
  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] < minArg) {
      minArg = arguments[i];
    }
  }
  console.log(minArg)
}

findMin(12, 14, 4, -4, 0.2, -5, 15, 3, 8, -5); // => -5

