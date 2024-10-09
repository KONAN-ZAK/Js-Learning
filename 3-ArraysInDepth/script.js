'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// DATA:
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 200, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-09-30T14:10:59.604Z',
    '2024-10-02T14:10:59.604Z',
    '2024-10-05T14:10:59.604Z',
    '2024-10-06T10:51:36.790Z',
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
    '2022-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
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
  currency: 'GBP',
  locale: 'en-GB',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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
  currency: 'GBP',
  locale: 'en-GB',
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
// <---- Create the UserName Shortcut ---->
//______________________________________________
(function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((value) => value[0])
      .join('');
  });
})(accounts);

//______________________________________________
// <---- formate the Money ---->
//______________________________________________
const MoneyFormatting = (money, account) => {
  return new Intl.NumberFormat(account.locale, {
    style: 'currency',
    currency: account.currency,
  }).format(money);
};

//______________________________________________
// <----- Display The Movment ---->
//______________________________________________

// <----- calc the date func ---->
const calcDate = (MovDate, locale) => {
  const dateNow = new Date();
  const calcDatePassed = Math.floor(
    (dateNow - MovDate) / (1000 * 24 * 60 * 60)
  );
  // console.log(calcDatePassed);

  if (calcDatePassed === 0) {
    return `today`;
  } else if (calcDatePassed === 1) {
    return `yesterday`;
  } else if (calcDatePassed <= 7) {
    return `${calcDatePassed} day ago`;
  } else {
    // const yearMov = `${MovDate.getFullYear()}`.padStart(2, 0);
    // const monthMov = `${MovDate.getMonth() + 1}`.padStart(2, 0);
    // const dayMov = MovDate.getDate();
    // return `${yearMov}/${monthMov}/${dayMov}`;
    return new Intl.DateTimeFormat(locale).format(MovDate);
  }
};

// <----- Main Func for Display Mov ---->
const displayMovments = function (account) {
  containerMovements.innerHTML = '';

  // <----- sorting func ---->
  let Movs;
  if (toggle) {
    const sortMovements = account.movements.slice().sort((a, b) => a - b);
    Movs = [...sortMovements];
  } else {
    Movs = account.movements;
  }

  // <----- loop over the Movments ---->
  Movs.forEach((mov, i) => {
    // <----- Dates for the Movments ---->
    const MovDate = new Date(account.movementsDates.at(i));
    const displayDate = calcDate(MovDate, account.locale);

    // <----- Adding Numbers Formatting ---->
    const MoenyFormatting = MoneyFormatting(mov, account);

    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">

          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${MoenyFormatting}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//______________________________________________
// <---- Calcualte The Balance Value ---->
//______________________________________________
const balanceCalc = (account) => {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);

  // <----- formate the Balance ----->
  labelBalance.textContent = MoneyFormatting(account.balance, account);
};

//______________________________________________
// <---- Calcualte the (In-Out-Intrest) Summary ---->
//______________________________________________
const calcSummary = (account) => {
  // <---- Calcualte the In Summary ---->
  const InSummary = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = MoneyFormatting(InSummary, account);
  // console.log(`IN summary: ${InSummary}`);

  // <---- Calcualte the Out Summary ---->
  const OutSummary = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumOut.textContent = MoneyFormatting(Math.abs(OutSummary), account);
  console.log(`OUT summary: ${OutSummary}`);

  // <---- Calcualte the Interset Summary ---->
  const InterstSummary = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(`Interst: ${InterstSummary} from ${account.interestRate}`);
  labelSumInterest.textContent = MoneyFormatting(InterstSummary, account);
};

//______________________________________________
// <---- Dispaly UI Func ---->
//______________________________________________
const UpdateUI = (currentAccount) => {
  //<---- Reset Timer --->
  clearInterval(TimerInterval);
  LogOutTimer();
  //<---- Display account Movments --->
  displayMovments(currentAccount);
  //<---- Display account balance ---->
  balanceCalc(currentAccount);
  //<---- Display account Summary ---->
  calcSummary(currentAccount);
  //<---- update the accountDetails info(deposites,withdrawls) --->
  // accountDetails(currentAccount);
};

//______________________________________________
// <---- LogOut Timer Func ---->
//______________________________________________
let TimerInterval;

const LogOutTimer = () => {
  //<------timer Duration -------->
  let timer = 60 * 5;

  //<----- timer calculation ----->
  const updateTimer = () => {
    const min = Math.trunc(timer / 60);
    const sec = `${timer % 60}`.padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
  };

  //<----- timer ----------------->
  TimerInterval = setInterval(() => {
    if (timer < 0) {
      clearInterval(TimerInterval);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started `;
    } else {
      updateTimer();
      timer--;
    }
  }, 1000);
};

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
    (acc) => acc.userName === inputLoginUsername.value.trim()
  );

  //<------- checking the Pin --------->
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('logged in');

    //<---- Display UI & Message ------>
    labelWelcome.textContent = `🟢Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    } `;
    containerApp.style.opacity = '100';

    //<---- Update Time --->
    const option = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    setInterval(() => {
      labelDate.textContent = new Intl.DateTimeFormat(
        currentAccount.locale,
        option
      ).format(new Date());
    }, 1000);

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
let toggle = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  toggle = !toggle;
  displayMovments(currentAccount);
});

//______________________________________________
// <---- Transfer Money Func ---->
//______________________________________________
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const transferedAmount = Number(Number(inputTransferAmount.value).toFixed(2));

  const transferedToAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  //<----If account is meet the spisific rules of sending money ---->
  if (
    transferedToAccount &&
    transferedAmount > 0 &&
    transferedAmount <= currentAccount.balance &&
    transferedToAccount.userName !== currentAccount.userName
  ) {
    //<----Update the movments---->
    currentAccount.movements.push(-transferedAmount);
    transferedToAccount.movements.push(transferedAmount);
    //<----Update the movments Date--->
    currentAccount.movementsDates.push(new Date().toISOString());
    transferedToAccount.movementsDates.push(new Date().toISOString());

    console.log(
      `The reciever Info:`,
      transferedAmount + 'Pund',
      transferedToAccount
    );
    //<---- Clear the Inputs --->
    inputTransferAmount.value = inputTransferTo.value = '';

    //<---- Display UI --->
    UpdateUI(currentAccount);
  } else {
    console.log('Invalid transfer!');
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
    //<----calc the New Date movment---->
    currentAccount.movementsDates.push(new Date().toISOString());

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
