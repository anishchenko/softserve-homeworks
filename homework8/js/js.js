//1
function upperCase(str) {
	const re = /^[A-Z]/;
	if(re.test(str)) {
		console.log('String\'s starts with uppercase character');
	} else {
		console.log('String\'s not starts with uppercase character');
		
	}
}

upperCase('regExp');
upperCase('RegExp');


/*2. */
function checkEmail(str) {
	const reg = /\w+@\w+\.\w/gmi;
	if(reg.test(str)) {
		console.log('Valid Email');
	} else {
		console.log('Invalid Email');
	}
}

checkEmail('Qmail2@gmail.com"');

/*3. */
const reg = /[db+d]/gi;
const reg2 = /b{2}/gi;
let str = 'cdbBdbsbz';
let result = str.match(reg)// + str.match(reg2);
// let res2 = result.match(reg2);
console.log(result);
console.log(res2)
console.log(result.match(reg2));

/*4. */
const inputString = 'Java Script';
const reg = inputString.match(/\w+/gmi);
const result = reg.reverse().join(', ');
console.log(result);


/*5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999). */
function checkCard(cardNumber) {
	const reg = /\d{4}-\d{4}-\d{4}-\d{4}/.test(cardNumber)
	if(reg) {
		console.log('card is valid');
	} else {
		console.log('card is not valid');
	}
}

checkCard('5545-4555-8989-3326');  //true
checkCard('55454555-8989-3326');  //false
checkCard('10d5-4555-8989-3326');  //false


/*6. */
function checkEmail(checkingEmail) {
	const tempReg = /-{2,}/gmi;
	const tempRes = tempReg.test(checkingEmail);
	// console.log(tempRes);
	const reg = /^[a-z0-9][a-z0-9_-]+@\w+\.\w{2}/gi;
	const res = reg.test(checkingEmail);
	// console.log(res);
	if(!tempRes && res) {
		console.log('Email is correct!');
	}else {
		console.log('Email is not correct!');
	}
}

checkEmail('my_mail@gmail.com'); //correct
checkEmail('#my_mail@gmail.com'); //incorrect
checkEmail('my_ma--il@gmail.com'); //incorrect
checkEmail('mymail@gmail.com'); //correct
checkEmail('32my_mail@gmail.com'); //correct
checkEmail('my_ma-il@gmail.c'); // incorrect
checkEmail('my_ma-il@gmail.com'); // correct
checkEmail('my-mail@gmail.com'); // correct
checkEmail('my-mailgmail.com'); // incorrect

/*7. */
function checkLogin(login) {
	const regExp = /^[a-z][a-z0-9\d\.\d]{1,9}$/gi;
	let res = regExp.test(login);
	console.log(res);
	const regForNumbers = /\d*[\d+.\d+]\d*/g;
	let numbersInLogin = login.match(regForNumbers);
	console.log(numbersInLogin);
}

checkLogin('ee1.1r6et'); //true
checkLogin('ee1*1ret3'); //false
checkLogin('e1.1rehh'); //true
checkLogin('e1.1reh6'); //true
checkLogin('ee1*1re90(()t3'); //false
checkLogin('e'); //false
checkLogin('ee1-1ret35648'); //false




