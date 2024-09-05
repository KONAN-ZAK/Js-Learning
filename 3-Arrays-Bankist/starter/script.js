'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Topic 🤖 arr.at(0)  similar to arr[0]   perfect for chaining ?.
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0] + ` similar to ` + arr.at(0));

// we can alse do slice method:
const arrA = [...arr];
console.log(arrA.slice(-2)[1]);

// but see the at method is more easy :
console.log(arrA.at(-1));

//works on strings:
const nam = 'kenan';
console.log(nam.at(0));  //k
console.log(nam?.at(0));  //k

 */

//Topic 🤖 forEach method :

//Note💎 normal for loop:

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (let i = 0; i < movements.length; i++) {
//   movements.at(i) < 0 &&
//     console.log(`account withdrew ${Math.abs(movements.at(i))}`);
//   movements.at(i) > 0 && console.log(`account deposited ${movements.at(i)}`);
// }

//Note💎 for of method:

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (let i of movements) {
//   i < 0 &&
//     console.log(`account withdrew ${Math.abs(i)}`);
//   i > 0 && console.log(`account deposited ${i}`);
// }

//Note💎 for forEach 

