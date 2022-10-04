const bottomRow = document.querySelector('.output__digit');
const topRow = document.querySelector('.output__submit');
const middleRow = document.querySelector('.output__action');
const digits = document.querySelectorAll('.number');
const signs = document.querySelectorAll('.sign');
const clearBtn = document.querySelector('.clear');
const powerBtn = document.querySelector('.power');
const multiplyBtn = document.querySelector('.multiply');
const backspaceBtn = document.querySelector('.backspace');
const elementBtn = document.querySelector('.element');
const divideBtn = document.querySelector('.divide');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const equalBtn = document.querySelector('.equal');
const dotBtn = document.querySelector('.dot');
const lastsList = document.querySelector('.history__list');
const btns = document.querySelectorAll('.calculator__down__btn, .equal');
const clearListBtn = document.querySelector('.history__btn-clear');

let calculate = [];
let ulItemStorage = [];
let keyDigits = [];
let score;
// something to fix :
// make a function to check the digits out of typeDigits, so in typeDigits you will only wrote it down in bottomRow.

const typeDigit = e => {
	if (calculate.length <= 15) {
		if (calculate.includes('.')) {
			if (e.target.textContent === '.') {
			} else {
				calculate.push(e.target.textContent);
				bottomRow.textContent = calculate.join('');
			}
		} else if (!calculate.includes('.')) {
			if (
				bottomRow.textContent.startsWith('0') &&
				(e.target.textContent == '0' || e.target.textContent == '00')
			) {
				if (bottomRow.textContent.length > 1) {
					calculate.push('0');
					bottomRow.textContent = calculate.join('');
				}
			} else if (bottomRow.textContent.startsWith('0') && e.target.textContent === '.') {
				calculate = [];
				calculate.push('0');
				calculate.push(e.target.textContent);
				bottomRow.textContent = calculate.join('');
			} else if (calculate.length === 0 && bottomRow.textContent.length > 0 && !bottomRow.textContent == '0') {
				if (e.target.textContent == '0') {
					calculate.push('0');
					bottomRow.textContent = calculate.join('');
				} else if (e.target.textContent == '00') {
					calculate.push('0');
					bottomRow.textContent = calculate.join('');
				} else if (e.target.textContent == '.') {
					calculate = [];
					calculate.push('0');
					calculate.push(e.target.textContent);
					bottomRow.textContent = calculate.join('');
				} else {
					calculate.push(e.target.textContent);
					bottomRow.textContent = calculate.join('');
				}
			} else if (
				bottomRow.textContent.startsWith('0') &&
				e.target.classList.contains('number') &&
				!e.target.classList.contains('dot')
			) {
				calculate.push('.');
				calculate.push(e.target.textContent);
				bottomRow.textContent = calculate.join('');
			} else {
				if (topRow.textContent === '') {
					calculate.push(e.target.textContent);
					bottomRow.textContent = calculate.join('');
				} else {
					calculate.push(e.target.textContent);
					bottomRow.textContent = calculate.join('');
				}
			}
		}
	} else {
		console.log('nie no tyle to nie');
	}
};

const addition = () => {
	let x = Number.parseFloat(topRow.textContent);
	let y = Number.parseFloat(bottomRow.textContent);
	score = x + y;
	ulItemStorage = [x, y, score];
	calculate = [];

	const ulItem = document.createElement('li');
	ulItem.classList.add('history__list__item');
	ulItem.textContent = `${ulItemStorage[0]} + ${ulItemStorage[1]} = ${ulItemStorage[2]}`;
	lastsList.append(ulItem);
	ulItemStorage = [];
};
const subtraction = () => {
	let x = Number.parseFloat(topRow.textContent);
	let y = Number.parseFloat(bottomRow.textContent);
	score = x - y;
	calculate = [];

	ulItemStorage = [x, y, score];
	const ulItem = document.createElement('li');
	ulItem.classList.add('history__list__item');
	ulItem.textContent = `${ulItemStorage[0]} - ${ulItemStorage[1]} = ${ulItemStorage[2]}`;
	lastsList.append(ulItem);
	ulItemStorage = [];
};
const multiply = () => {
	let x = Number.parseFloat(topRow.textContent);
	let y = Number.parseFloat(bottomRow.textContent);
	score = x * y;
	calculate = [];

	ulItemStorage = [x, y, score];
	const ulItem = document.createElement('li');
	ulItem.classList.add('history__list__item');
	ulItem.textContent = `${ulItemStorage[0]} * ${ulItemStorage[1]} = ${ulItemStorage[2]}`;
	lastsList.append(ulItem);
	ulItemStorage = [];
};
const divide = () => {
	let x = Number.parseFloat(topRow.textContent);
	let y = Number.parseFloat(bottomRow.textContent);
	score = x / y;
	calculate = [];

	ulItemStorage = [x, y, score];
	const ulItem = document.createElement('li');
	ulItem.classList.add('history__list__item');
	ulItem.textContent = `${ulItemStorage[0]} / ${ulItemStorage[1]} = ${ulItemStorage[2]}`;
	lastsList.append(ulItem);
	ulItemStorage = [];
};
const square = () => {
	if (topRow.textContent == '') {
		if (!bottomRow.textContent == '0') {
			let y = Number.parseFloat(bottomRow.textContent);
			score = Math.sqrt(y);
			bottomRow.textContent = score;

			ulItemStorage = [y, score];
			const ulItem = document.createElement('li');
			ulItem.classList.add('history__list__item');
			ulItem.innerHTML = `&#8730 ${ulItemStorage[0]} = ${ulItemStorage[1]}`;
			lastsList.append(ulItem);
			ulItemStorage = [];
		}
	} else {
		let y = Number.parseFloat(bottomRow.textContent);
		score = Math.sqrt(y);
		bottomRow.textContent = score;
		checkSign();

		ulItemStorage = [y, score];
		const ulItem = document.createElement('li');
		ulItem.classList.add('history__list__item');
		ulItem.innerHTML = `&#8730 ${ulItemStorage[0]} = ${ulItemStorage[1]}`;
		lastsList.append(ulItem);
		ulItemStorage = [];
	}
	calculate = [];
	checkSize();
};
const exponentiation = () => {
	if (topRow.textContent == '') {
		if (!bottomRow.textContent == '0') {
			let y = Number.parseFloat(bottomRow.textContent);
			score = Math.pow(y, 2);
			bottomRow.textContent = score;

			ulItemStorage = [y, score];
			const ulItem = document.createElement('li');
			ulItem.classList.add('history__list__item');
			ulItem.innerHTML = `${ulItemStorage[0]}<sup>2</sup> = ${ulItemStorage[1]}`;
			lastsList.append(ulItem);
			ulItemStorage = [];
		}
	} else {
		let y = Number.parseFloat(bottomRow.textContent);
		score = Math.pow(y, 2);
		bottomRow.textContent = score;
		checkSign();

		ulItemStorage = [y, score];
		const ulItem = document.createElement('li');
		ulItem.classList.add('history__list__item');
		ulItem.innerHTML = `${ulItemStorage[0]}<sup>2</sup> = ${ulItemStorage[1]}`;
		lastsList.append(ulItem);
		ulItemStorage = [];
	}
	calculate = [];
	checkSize();
};

const chooseAction = () => {
	if (!topRow.textContent == '' && !middleRow.textContent == '' && !bottomRow.textContent == '') {
		if (middleRow.textContent === '+') {
			addition();
			bottomRow.textContent = score;
			topRow.textContent = '';
			middleRow.textContent = '';
		} else if (middleRow.textContent === '-') {
			subtraction();
			bottomRow.textContent = score;
			topRow.textContent = '';
			middleRow.textContent = '';
		} else if (middleRow.textContent === '*') {
			multiply();
			bottomRow.textContent = score;
			topRow.textContent = '';
			middleRow.textContent = '';
		} else if (middleRow.textContent === '/') {
			divide();
			bottomRow.textContent = score;
			topRow.textContent = '';
			middleRow.textContent = '';
		}
		checkSize();
	}
};
const quickAction = () => {
	if (middleRow.textContent === '+') {
		addition();
		topRow.textContent = score;
	} else if (middleRow.textContent === '-') {
		subtraction();
		topRow.textContent = score;
	} else if (middleRow.textContent === '*') {
		multiply();
		topRow.textContent = score;
	} else if (middleRow.textContent === '/') {
		divide();
		topRow.textContent = score;
	}
};
const checkSign = e => {
	if (topRow.textContent == '') {
		if (!bottomRow.textContent == '0') {
			middleRow.textContent = e.target.textContent;
			topRow.textContent = bottomRow.textContent;
			calculate = [];
		}
	} else if (!topRow.textContent == '') {
		if (bottomRow.textContent == '0') {
			quickAction();
		} else if (!bottomRow.textContent == '0') {
			if (middleRow.textContent === e.target.textContent) {
				quickAction();
			} else {
				middleRow.textContent = e.target.textContent;
			}
		}
	}
};

const deleteOneFunction = () => {
	if (calculate.length <= 1) {
		calculate = [];
		bottomRow.textContent = '0';
	} else if (calculate.length > 1) {
		calculate.pop();
		bottomRow.textContent = calculate.join('');
	}
};
const clearFunction = () => {
	calculate = [];
	topRow.textContent = '';
	middleRow.textContent = '';
	bottomRow.textContent = '0';
};

const checkSize = () => {
	if (bottomRow.textContent.length > 0) {
		bottomRow.style.fontSize = '3.5rem';
		if (bottomRow.textContent.length > 10) {
			bottomRow.style.fontSize = '3.3rem';
			if (bottomRow.textContent.length >= 12) {
				bottomRow.style.fontSize = '3.1rem';
				if (bottomRow.textContent.length >= 14) {
					bottomRow.style.fontSize = '2.8rem';
					if (bottomRow.textContent.length > 16) {
						bottomRow.style.fontSize = '2.5rem';
					}
				}
			}
		}
	}
};

const clearList = () => {
	lastsList.innerHTML = '';
};

const keyPress = e => {
	if (calculate.length <= 16) {
		if (e.key == '+' && !bottomRow.textContent == '0') {
			middleRow.textContent = '+';
			topRow.textContent = bottomRow.textContent;
			calculate = [];
		}
		if (e.key == '-' && !bottomRow.textContent == '0') {
			middleRow.textContent = '-';
			topRow.textContent = bottomRow.textContent;
			calculate = [];
		}
		if (e.key == '*' && !bottomRow.textContent == '0') {
			middleRow.textContent = '*';
			topRow.textContent = bottomRow.textContent;
			calculate = [];
		}
		if (e.key == '/' && !bottomRow.textContent == '0') {
			middleRow.textContent = '/';
			topRow.textContent = bottomRow.textContent;
			calculate = [];
		}
		if ((e.key == '=' || e.key == 'Enter') && !bottomRow.textContent == '0') {
			chooseAction();
		}

		// digits and dot below --------------------------------------------------------

		if (e.key == '1') {
			calculate.push('1');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '2') {
			calculate.push('2');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '3') {
			calculate.push('3');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '4') {
			calculate.push('4');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '5') {
			calculate.push('5');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '6') {
			calculate.push('6');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '7') {
			calculate.push('7');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '8') {
			calculate.push('8');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '9') {
			calculate.push('9');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '0') {
			calculate.push('0');
			bottomRow.textContent = calculate.join('');
		} else if (e.key == '.' || e.key == ',') {
			calculate.push('.');
			bottomRow.textContent = calculate.join('');
		} else {
		}
	}
};

powerBtn.addEventListener('click', exponentiation);
elementBtn.addEventListener('click', square);
clearBtn.addEventListener('click', clearFunction);
backspaceBtn.addEventListener('click', deleteOneFunction);
equalBtn.addEventListener('click', chooseAction);
digits.forEach(digit => digit.addEventListener('click', typeDigit));
signs.forEach(sign => sign.addEventListener('click', checkSign));
digits.forEach(digit => digit.addEventListener('click', checkSize));
clearListBtn.addEventListener('click', clearList);
document.addEventListener('keypress', keyPress);
