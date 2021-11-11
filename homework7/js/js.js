const container = document.querySelector('.container');

let setPosition = () => {
  container.style.display = 'flex';
  container.style.justifyContent = 'space-between';  
  container.style.margin = '0 auto';
  container.style.width = '80%';
  container.style.paddingTop = '20px';
  container.style.paddingBottom = '20px'
};

/*-------------------------------1-------------------------- */

// const win = window.open('about:blank', target="_blank", "width=300, height=300");

// function changeWH() {
//   win.resizeTo(500,500);
// }
// function moveWin() {
//   win.moveTo(200, 200);
// }
// function closeWin() {
//   win.close();
// }
// setTimeout(changeWH, 2000);
// setTimeout(moveWin, 4000);
// setTimeout(closeWin, 6000);


/*----------------------------------2------------------------ */

// const text = document.querySelector('#text');
// const btn = document.querySelector('#btn');

// function changeCSS() {
// 	text.style.color = 'orange';
// 	text.style.fontSize = '20px';
// 	text.style.fontFamily = 'Comic Sans MS';
// }

// btn.addEventListener('click', changeCSS);


/*--------------------------------3----------------------------- */

// setPosition();
// const firstBtn = document.querySelector('.btn--first');
// const secondBtn = document.querySelector('.btn--second');
// const thirdBtn = document.querySelector('.btn--third');
// const link = document.querySelector('.link');

// function changeBGBlue() {
//   container.style.backgroundColor = 'blue';
// }
// function changeBGPink() {
//   container.style.backgroundColor = 'pink';
// }
// function changeBGBrown() {
//   container.style.backgroundColor = 'brown';
// }
// function changeBGWhite() {
//   container.style.backgroundColor = 'white';
// }
// function changeBGYellow() {
//   container.style.backgroundColor = 'yellow';
// }

// firstBtn.addEventListener('click', changeBGBlue);
// secondBtn.addEventListener('dblclick', changeBGPink);
// thirdBtn.addEventListener('mousedown', changeBGBrown);
// thirdBtn.addEventListener('mouseup', changeBGWhite);
// link.addEventListener('mouseover', changeBGYellow);
// link.addEventListener('mouseout', changeBGWhite);


/*--------------------------4---------------------- */

// setPosition();
// const dropdown = document.querySelector('.dropdown');
// const btnDelete = document.querySelector('.btn');

// function deleteOption() {
//   dropdown.remove(dropdown.selectedIndex);
// }

// btnDelete.addEventListener('click', deleteOption);


/*--------------------------5---------------------- */

// setPosition();
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', clickClack);
// btn.addEventListener('mouseover', mouseOver);
// btn.addEventListener('mouseout', mouseOut);

// function setNewStyleContainer() {
//   container.style.flexDirection = 'column';
//   container.style.alignItems = 'flex-start'
// }

// function createNewEl(str) {
//   let newEl = document.createElement('div');
//   newEl.innerHTML = `${str}`;
//   container.appendChild(newEl);
// }

// function clickClack() {
//   setNewStyleContainer();
//   createNewEl('I was pressed!');
// }

// function mouseOver() {
//   setNewStyleContainer();
//   createNewEl('Mouse on me!');
// }
// function mouseOut() {
//   setNewStyleContainer();
//   createNewEl('Mouse is not on me!');
// }