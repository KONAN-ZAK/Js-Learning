'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANK APP

// DATA:
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//_____________________________________________________________________________

//______________________________________________
// <----- Display The Movment ---->
//______________________________________________

const displayMovments = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">

          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//______________________________________________
// <---- Calcualte The Balance Value ---->
//______________________________________________

const balanceCalc = function (movments) {
  const balance = movments.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} £`;
};

//______________________________________________
// <---- Calcualte the (In-Out-Intrest) Summary ---->
//______________________________________________

const calcSummary = (account) => {
  // <---- Calcualte the In Summary ---->
  const InSummary = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${InSummary} £`;
  console.log(`IN summary: ${InSummary}`);

  // <---- Calcualte the Out Summary ---->
  const OutSummary = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(OutSummary)} £`;
  console.log(`OUT summary: ${OutSummary}`);

  // <---- Calcualte the Interset Summary ---->
  const InterstSummary = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(`Interst: ${InterstSummary} from ${account.interestRate}`);
  labelSumInterest.textContent = `${InterstSummary} £`;
};

//______________________________________________
// <---- Create the UserName Shortcut ---->
//______________________________________________

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((value) => value[0])
      .join('');
  });
};
createUserName(accounts);

//______________________________________________
// <---- find the max value in the account movments ---->
//______________________________________________

// const maxMov = account1.movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, account1.movements[0]);

// console.log(`MaxValue: ${maxMov}`); // 3000


//______________________________________________
// <---- Login Func ---->
//______________________________________________
let currentAccount;
btnLogin.addEventListener('click', (e) => {
  // prevent default : usualy when click in button it submit the form therefore it will load the page again
  // to stop it we use this function
  e.preventDefault();

  //____________find the Login User Data___________

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  //____________checking the Pin___________________

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('logged in');
    //______Display UI & Message____
    labelWelcome.textContent = `🟢Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    } `;
    containerApp.style.opacity = '100';
    //______Display Movments________
    displayMovments(currentAccount.movements);
    //______Display Balance_________
    balanceCalc(currentAccount.movements);
    //______Display Summary_________
    calcSummary(currentAccount);
    //______Clear the Inputs________
    inputLoginPin.value = inputLoginUsername.value = '';
  }
});
