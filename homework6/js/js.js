/*-----------------------------1------------------------------------------- */

// const getElById = document.getElementById('test').innerText = 'Last from getElementById';

// function showQuerySlctr() {
// 	document.querySelector('div').innerHTML = 'Last from querySelector';
// }

// setTimeout(showQuerySlctr, 2000);


/*-----------------------------2------------------------------------------- */

// let srcImg = document.querySelector('.image');
// setTimeout(showSrc, 500);

// function changeSrc() {
// 	let newSrc = 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg';

// 	srcImg.src = newSrc;
// 	setTimeout(showSrc, 500);
// }

// function showSrc() {
// 	alert(`src image:\n${srcImg.src}`);
// }

// setTimeout(changeSrc, 1000);


/*-----------------------------3------------------------------------------- */

// const elem = document.querySelectorAll('div > p');

// for(let i = 0; i < elem.length; i++) {
//   console.log(`Selector text ${i}: ${elem[i].textContent}`);
// }


/*-----------------------------4------------------------------------------- */


// let list = document.getElementById('list');
// alert(list.firstElementChild.textContent);
// alert(list.lastElementChild.textContent);
// alert(list.firstElementChild.nextElementSibling.textContent);
// alert(list.lastElementChild.previousElementSibling.textContent);
// alert(list.lastElementChild.previousElementSibling.previousElementSibling.textContent);

// const list1 = document.querySelector('ul');
// console.log(list1.children[0].textContent);
// console.log(list1.children[4].textContent);
// console.log(list1.children[1].textContent);
// console.log(list1.children[3].textContent);
// console.log(list1.children[2].textContent);


/*-----------------------------5------------------------------------------- */


// document.querySelector('h1').style.backgroundColor = 'lightgreen';

// const myDiv = document.querySelector('#myDiv');
// myDiv.firstElementChild.style.fontWeight = '900';
// myDiv.firstElementChild.nextElementSibling.style.color = 'green';
// myDiv.lastElementChild.previousElementSibling.style.textDecoration = 'underline';
// myDiv.lastElementChild.style.fontStyle = 'italic';

// const myList = document.getElementById('myList');
// myList.style.listStyle = 'none';
// myList.style.display = 'flex';

// document.querySelector('span').style.display = 'none';


/*-----------------------------6------------------------------------------- */


// const firstMsg = prompt('Enter first massege', '');
// const secondMsg = prompt('Enter second massege', '');

// const firstInpt = document.getElementById('input1');
// const secondInpt = document.getElementById('input2');
// firstInpt.value = firstMsg;
// secondInpt.value = secondMsg;

// function changeInpt() {
// 	firstInpt.value = secondMsg;
// 	secondInpt.value = firstMsg;
// }

// setTimeout(changeInpt, 1500);


/*-----------------------------7------------------------------------------- */


// let main = document.createElement('main');
// main.className ='mainClass check item';
// let div = document.createElement('div');
// div.id = 'myDiv';
// let p = document.createElement('p');
// p.innerHTML = 'First paragraph';

// document.body.appendChild(main);
// document.querySelector('.mainClass').appendChild(div);
// document.querySelector('#myDiv').appendChild(p);


