'use strict';
/**  one
function calc(birth) {
    return 2024- birth ;
}
console.log(calc(1998));
two
const calc = function (birth) {
    return 2024- birth ;
}
console.log(calc(1998));
third
const calc = birth => 2024 - birth;
const calc = birth => {
    return 2024 - birth};
console.log(calc(1998));
*/

// there are (null and undefine) in js ONLY!!!!!
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Topic🤖 default Parameters:

//💎 notice here we add the parameters and by default if not assigned any value it will be undefined
/**
const totBooking = [];
const creatFightBook = function (flightNo, passangerNo, price) {
  const booking = {
    flightNo,
    passangerNo,
    price,
  };
  return booking;
};
// becuse i send one argument, it will assigned to first parameter flightNo
console.log(creatFightBook('Ar235'));
 */
//💎before ES6 we were using || to avoid the undefine..
/** 
const totBooking = [];
const creatFightBook = function (flightNo, passangerNo, price) {
  flightNo = flightNo || 1;
  passangerNo = passangerNo || 1;
  price = price || 1;
  const booking = {
    flightNo,
    passangerNo,
    price,
  };
  return booking;
};
console.log(creatFightBook('Ar235'));//Object { flightNo: "Ar235", passangerNo: 1, price: 1 }
*/
//💎 in ES6 we can assign in paramters the default values
/** 
const totBooking = [];
const creatFightBook = function (flightNo = 'UnKnown',passangerNo = 'UnKonwn',price = 0) {
  const booking = {
    flightNo,
    passangerNo,
    price,
  };
  return booking;
};
console.log(creatFightBook('Ar235')); //Object { flightNo: "Ar235", passangerNo: "UnKonwn", price: 0 }
console.log(creatFightBook('Ar235',58 , "223$")); //Object { flightNo: "Ar235", passangerNo: 58, price: "223$" }
*/
//💎 the parameters can hold expression , can use the previous declared parameters in order:
/** 
const totBooking = [];
const creatFightBook = function (flightNo = 'UnKnown',passangerNo = 'UnKonwn',price = passangerNo * 2) {
  const booking = {
    flightNo,
    passangerNo,
    price,
  };
  return booking;
};
console.log(creatFightBook('Ar235', 50)); //{ flightNo: "Ar235", passangerNo: 50, price: 100 }
*/
//💎 if i want to call the function and jump one parameters
/** 
const totBooking = [];
const creatFightBook = function (
  flightNo = 'UnKnown',
  passangerNo = 'UnKonwn',
  price = passangerNo * 2
) {
  const booking = {
    flightNo,
    passangerNo,
    price,
  };
  return booking;
};
//cause the undefined is the first set when the vakue unkown
console.log(creatFightBook('Ar235', undefined, 50)); //{ flightNo: "Ar235", passangerNo: "UnKonwn", price: 50 }
*/

//Topic🤖 passing the argument as an value or object..
//passing an object to function as Ref.
//passing a value to function as a value.
//Final NOTE: there is no passing by ref in JS all pass by value, BUT exeption for Object
// but still passing the value of the object address
/**

const flight = 'AR145';
const details = {
  passportNo: "N00014545",
  name: 'Kenan',
};
const checkIn = function(flightNo, passanger) {

  //1//not a good idea to assign new value, the orginal one DOESNT UPDATE 
    flightNo = 'L999';
  console.log(flightNo); //1//'L999'

  //2// note that we give the ref to th efunction so the object updated!!!
  passanger.name = `Mr ${passanger.name}`;
  console.log(passanger); //2//{ passportNo: "N01450045", name: "Mr Kenan" }

  if ((passanger.passportNo = "N01450045")) {
    alert('check In!');
  } else {
    alert('sorry, check out !');
  }
};
checkIn(flight, details);
console.log(flight); //1//'AR145'
console.log(details);//2//{ passportNo: "N01450045", name: "Mr Kenan" }
*/

//Topic🤖 Higher order function JS use callback all the time
// helpful especially if we want to hide some function we will talk about it in OOP
/*
//💎
//func1: lower level of obstruction func
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
//func2: lower level of obstruction func
const upperFirstWord = function (str) {
  const [fir, ...other] = str.split(' ');
  const first = fir.toUpperCase();
  return [first, ...other].join(' ');
};

//func3 Higher Order FUNCTION works as a controller for func1 and func2
const transformer = function (str, fn) {
  console.log(`Orginal String: ${str}`);
  console.log(`result: ${fn(str)}`);
  console.log(`transformed By: ${fn.name} function😁`); // we used a method here .name tp get the parameter name
};
//calling the methods: notice i didnt activate the upperFirstWord with ()
transformer('Kenan Alzakout', upperFirstWord);
transformer('Kenan Alzakout', oneWord);

//💎
// that when we call the function here ('Kenan Alzakout', upperFirstWord)
// it is as same as
const high5 = function () {
  console.log('😎');
};
document.addEventListener('click', high5); //notice it is without ()
 
['ward', 'kenan', 'ahmad'].forEach(high5);
*/

//Topic🤖 Function returning Function (good in arrow functions)
/* 
// really useful if we wanna use functional Programming

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey'); // store the return value in variable
greeterHey('Kenan');
greeterHey('Ahmad');

//💎 using arrow fucntion: same as the above but more confusing i think 
const greets = greetings => names => console.log(`${greetings} ${names}`);
greets('Hey')('Ken');
greets('Hey')('Vicky');
*/

//Topic🤖 using This keyword in functions
/*
//💎 what have we learnt before :

const AirCanada = {
  airline: 'AirCanada',
  airCode: 'CA',
  booking: [],
  bookTicket(name, flightNo) {
    console.log(
      `${name} Has Booked at ${this.airline} Ticket: ${this.airCode}${flightNo}`
    );
    this.booking.push({ name: name, flight: `${this.airCode}${flightNo}` });
    console.log(this.booking);
  },
};
AirCanada.bookTicket('kenan', 278);

//💎lets build a new airline system  but i donot want to repeat the book function..

// if we did the follow :
// const book = AirCanada.bookTicket;
// book("kk",23); //TypeError: can't access property "airline", this keyword is undefined
// Here, book is just a reference to the bookTicket function. 
// It’s not bound to any specific object, so when you call book(), this inside the function is not tied to AirCanada.

///////////////////////////////////////////////////////////////////////////////////

//💎 1) method function.call(whatThisShouldPointTo , arg1, arg2, ...)
//usage: It allows you to specify what this should point to when the function is executed.
//it does call the function directly !!!!
const AirSwiss = {
  airline: 'AirSwiss',
  airCode: 'SW',
  booking: [],
};
AirCanada.bookTicket.call(AirSwiss, 'ahmad', 211);

//💎 2) apply method: function.apply(whatThisShouldPointTo , arg1, arg2, ...)
// not used anymore in modren ES6
// the diffrances that apply takes array of data..!!

const flightData = ['zahit', 455];
AirCanada.bookTicket.apply(AirSwiss, flightData);

//💎 what we are using in modren ES6
const flightData1 = ['Zaza', 455];
AirCanada.bookTicket.call(AirSwiss, ...flightData1);

//💎 bind method: it doesnt immedietly call the function instead it will return new function
//where this keyword bind......

// we can define all function for bind and use them later on...
const swissBook1 = AirCanada.bookTicket.bind(AirSwiss);
swissBook1('zain', 222);

// we can also give it a fixed parameter :
 const swissBook2 = AirCanada.bookTicket.bind(AirSwiss, 'nahi');
swissBook2(878);  
*/

//Topic🤖 bind the function with event Listeners
/* 

// let say we need to add another porperity
const AirCanada = {
  airline: 'AirCanada',
  airCode: 'CA',
  booking: [],
  bookTicket(name, flightNo) {
    console.log(
      `${name} Has Booked at ${this.airline} Ticket: ${this.airCode}${flightNo}`
    );
    this.booking.push({ name: name, flight: `${this.airCode}${flightNo}` });
    console.log(this.booking);
  },
};


AirCanada.planes = 300;
AirCanada.buyPlane = function () {  //add function that this poin to AirCanada
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// console.log(AirCanada.buyPlane()); //call the function to execute it! 

//Let us write the Event: this it will point to Element if we dont add bind()
document.querySelector('.buy').addEventListener('click', AirCanada.buyPlane.bind(AirCanada));
*/

//Topic🤖 partical application: we can pre set parameter
/* 

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// let say we want aonter functoin for syria with constant rate.. and i dont want to duplicate the function again
//make a call and wait .bind() of the function with our customization..

const addTaxSy = addTax.bind(null, 0.23);
// same as addTaxSy = value => value + value*0.23 ;
console.log(addTaxSy(100)); //123

//💎 change it to return function:

const addTaxSy1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const test = addTaxSy1(0.23); //or  console.log(addTaxSy1(0.23)(100));
console.log(test(100));
///arrow functioon versoin
const addTaxSy2 = rate => value => value + value * rate;
const test2 = addTaxSy2(0.23)(100);
console.log(test2);
*/

//Topic🤖 exercise :
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const userInput = Number(
      prompt(`${this.question}\n${this.options.join('\n')}
(Write option number)`)
    );
    userInput >= 0 && userInput < this.answers.length
      ? this.answers[userInput]++
      : alert('Wrong inPut');

    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

//Topic🤖 IIFE Imediately invoke function expressions
/*
// when we need a function to execute once right after the run
// we will use it sync and wait later on !!

// notice there is no name for the function
// to do it : wrap the function by () and at the end we call it by ()
//💎 in normal function
(function () {
  console.log('this will run once !!');
  const isPrivate = 10;
})();

//💎 in arrow function: no func name , wrap it by ()and call it by ()
(() => console.log('this will ALSO run once !!'))();


//this method is extremly useful when we are want to hide and encapsulate the data
//so now cl(isPrivate)  is not accessable by other function even in global scope..
*/

//Topic🤖 Clousers: is a properity of functions created automatically as backbag hold the vatiables even when the fucntion is poped from stack
// we dont create it, it happened automatically in certain situation, what is the situations? follow the examples...
/* 
//EX 📢
const secureBook = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`passanger : ${passangerCount}`);
  };
};
const book = secureBook();
// what happned at this moment :
// in global Enviroment has : secureBook=fn , book
//the book call secureBook and return a function which will be stored in book
//pop up the secureBook from CallBack stack :: cause it is finish

// in global Enviroment has now: secureBook=fn , book=fn
book(); //passanger : 1
book(); //passanger : 2


// the question how could the book access the function again secureBook where it has aleady poped out from stack?????
//how book can again Access the function and find passangerCount = 0 and count it??

/////A function has always access to the variable Enviroment of the execution context where it is created...
//even after this exectuion is gone out of the CallStack

// definition very formal :A closure is the closed-over variable environment of the execution context in which
// a function was created, even after that execution context is gone;

// definition less formal : A closure gives a function access to all the variables of its parent function,
// even after that parent function has returned.
// The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// definition less formal : A closure makes sure that a function doesn’t loose connection to variables
// that existed at the function’s birth place;

// definition less formal :human is the function ... backpack the clouser
// A closure is like a backpack that a function carries around wherever it goes.
// This backpack has all the variables that were present in the environment where the function was created.



//EX 📢 more example about clouser:

let f;
const g = function () {
  const a = 10;
  f = function () {
    console.log(a * 50);
  };
};

g();
f(); // the f has access to the variables where its present in the enviroment  500
console.dir(f);  // to see what does f can access

const h = function () {
  const b = 20;
  f = function () {
    console.log(b * 100);
  };
};
h();
f();  // will re-assign a new function to it.. 2000
console.dir(f);  // to see what does f can access

 //EX 📢:

 const boardPassengers = function (n, wait) {
  //perGroup declare it here inside the function 
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// declare it in global level.. (will not be use by the function)
const perGroup = 1000;  
boardPassengers(180, 3);


// notice that however the perGroup is declared in Global level but still the function close over the function
// variable enviroment and give it the priority to use it ///////

//if there was no inside the function the perGroup the the function will use perGroup in global level

//EX 📢

const boardPassengerss = function (n, wait) {

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroups} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// declare it in global level.. (will be use by function)
const perGroups = 1000;  
boardPassengerss(180, 3);

*/

//Topic🤖 #Chalenge :
/* 
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!

//EX 📢 1
let header;
(function () {
  header = document.querySelector('h1');
  header.style.color = 'red';
})();

header.addEventListener('click', function () {
  header.style.color = 'blue';
});

//////
//EX 📢 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

    header.addEventListener('click', function () {
         header.style.color = 'blue';
       });
  }
)();

*/
