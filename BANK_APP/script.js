'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANK APP

// DATA:
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 200, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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
          <div class="movements__value">${mov.toFixed(2)}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//______________________________________________
// <---- Calcualte The Balance Value ---->
//______________________________________________
const balanceCalc = (account) => {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)} £`;
};

//______________________________________________
// <---- Calcualte the (In-Out-Intrest) Summary ---->
//______________________________________________
const calcSummary = (account) => {
  // <---- Calcualte the In Summary ---->
  const InSummary = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${InSummary.toFixed(2)} £`;
  // console.log(`IN summary: ${InSummary}`);

  // <---- Calcualte the Out Summary ---->
  const OutSummary = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(OutSummary.toFixed(2))} £`;
  // console.log(`OUT summary: ${OutSummary}`);

  // <---- Calcualte the Interset Summary ---->
  const InterstSummary = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(`Interst: ${InterstSummary} from ${account.interestRate}`);
  labelSumInterest.textContent = `${InterstSummary.toFixed(2)} £`;
};

//______________________________________________
// <---- update the accountDetails info(deposites,withdrawls) ---->
//not nessaccary! we can go to each account add the properity better.
//______________________________________________
{
  // const accountDetails = (currentAccount) => {
  //   currentAccount.accountDetails = {
  //     deposite: currentAccount.movements
  //       .filter((val) => val > 0)
  //       .reduce((acc, val) => acc + val, 0),
  //     withdrawl: currentAccount.movements
  //       .filter((val) => val < 0)
  //       .reduce((acc, val) => acc + val, 0),
  //   };
  // console.log(currentAccount);
  // };
}

//______________________________________________
// <---- Dispaly UI Func ---->
//______________________________________________
const UpdateUI = (currentAccount) => {
  //<---- Display account Movments --->
  displayMovments(currentAccount.movements);
  //<---- Display account balance ---->
  balanceCalc(currentAccount);
  //<---- Display account Summary ---->
  calcSummary(currentAccount);
  //<---- update the accountDetails info(deposites,withdrawls) --->
  // accountDetails(currentAccount);
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
// <---- Login Func ---->
//______________________________________________
let currentAccount;
btnLogin.addEventListener('click', (e) => {
  // prevent default : usualy when click in button it submit the form therefore it will load the page again
  // to stop it we use this function
  e.preventDefault();

  //<------- find the Login User Data -------->

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  //<------- checking the Pin --------->
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('logged in');

    //<---- Display UI & Message ------>
    labelWelcome.textContent = `🟢Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    } `;
    containerApp.style.opacity = '100';

    //<---- Update UI --->
    UpdateUI(currentAccount);

    //<--- Clear the Inputs ---->
    inputLoginPin.value = inputLoginUsername.value = '';
  }
});

//______________________________________________
// <---- Sort Func ---->
//______________________________________________
//we want to display the default and the sort on each click
let toggle = true;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  if (toggle) {
    const sortMovements = currentAccount.movements
      .slice()
      .sort((a, b) => a - b);
    displayMovments(sortMovements);
  } else {
    displayMovments(currentAccount.movements);
  }
  toggle = !toggle;
});

//______________________________________________
// <---- Transfer Money Func ---->
//______________________________________________
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const transferedAmount = Number(Number(inputTransferAmount.value).toFixed(2));
  const transferedToAccount = accounts.find((acc) => {
    return acc.userName === inputTransferTo.value;
  });
  //<----If account is meet the spisific rules of sending money ---->
  if (
    transferedAmount > 0 &&
    transferedAmount <= currentAccount.balance &&
    transferedToAccount.userName !== currentAccount.userName
  ) {
    //<----Update the movments---->
    currentAccount.movements.push(-transferedAmount);
    transferedToAccount.movements.push(transferedAmount);

    //<---- Display UI --->
    UpdateUI(currentAccount);

    console.log(`The reciever Info:`, transferedAmount, transferedToAccount);
    //<---- Clear the Inputs --->
    inputTransferAmount.value = inputTransferTo.value = ' ';
  } else {
    console.log('un-valid!');
  }
});

//______________________________________________
// <---- Loan Func ---->
//______________________________________________
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  //<----Get Loan from User---->
  const loan = Math.floor(Number(inputLoanAmount.value));

  //<----condition loan >= 10% of the movments---->
  const loanCondition = currentAccount.movements
    .filter((mov) => mov > 0)
    .some((mov) => mov >= mov / 10);

  if (loan && loan > 0 && loanCondition) {
    //<----Push New movment---->
    currentAccount.movements.push(loan);

    //<----Update the movments---->
    UpdateUI(currentAccount);

    //<----Clear the Input---->
    inputLoanAmount.value = '';
  }
});

//______________________________________________
// <---- Delete User Func ---->
//______________________________________________
btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //<---- Get the Delete Account Index --->
    const indexDeletedAccount = accounts.findIndex(
      (account) => account.userName === currentAccount.userName
    );
    // console.log(`Closed account Index: ${indexDeletedAccount}`);

    //<---- Delete the Account from the Accounts array --->
    accounts.splice(indexDeletedAccount, indexDeletedAccount + 1);

    //<---- Hide the Deleted Account  --->
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started `;
    // console.log(accounts);
  }
});
