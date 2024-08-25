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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Topic 🤖 default Parameters:

//Note💎 notice here we add the parameters and by default if not assigned any value it will be undefined
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
//Note💎before ES6 we were using || to avoid the undefine..
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
//Note💎 in ES6 we can assign in paramters the default values
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
//Note💎 the parameters can hold expression , can use the previous declared parameters in order:
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
//Note💎 if i want to call the function and jump one parameters
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
console.log(creatFightBook('Ar235', null, 50)); //{ flightNo: "Ar235", passangerNo: NaN, price: 50 }
 */

//Topic 🤖 passing the argument as an value or object..
//passing an object to function as Ref.
//passing a value to function as a value.
//Final NOTE: there is no passing by ref in JS all pass by value, BUT exeption for Object
// but still passing the value of the object address
/**

const flight = 'AR145';
const details = {
  passportNo: "N01450045",
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

//Topic 🤖 Higher order function JS use callback all the time
// helpful especially if we want to hide some function we will talk about it in OOP
/*
//Note💎
//func1 lower level of obstruction func
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
//func2  lower level of obstruction func
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

//Note💎
// that when we call the function here ('Kenan Alzakout', upperFirstWord)
// it is as same as
const high5 = function () {
  console.log('😎');
};
document.addEventListener('click', high5); //notice it is without ()
 
['ward', 'kenan', 'ahmad'].forEach(high5);
*/

//Topic 🤖 Function returning Function (good in arrow functions)
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

//Note💎 using arrow fucntion: same as the above but more confusing i think 
const greets = greetings => names => console.log(`${greetings} ${names}`);
greets('Hey')('Ken');
greets('Hey')('Vicky');

 */

//Topic 🤖 using This keyword in functions
/**
//Note💎 what have we learnt before :
const TurkishAir = {
  airline: 'turkishAir',
  airCode: 'TR',
  booking: [],
  book(name, flightNum) {
    console.log(
      `${name} has booked a seat on ${this.airline} flight ${this.airCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.airCode}${flightNum}`, name: name });
  },
};
// TurkishAir.book("kenan",324);
// console.log(TurkishAir.booking);

//Note💎
//lets build a new airline system  but i donot want to repeat the book function..

// if we did the follow :
const book = TurkishAir.book;
// book("kk",23); //TypeError: can't access property "airline", this keyword is undefined
///////////////////////////////////////////////////////////////////////////////////

//Note💎 1) method function.call(whatThisShouldPointTo , rest parameters..)
const SyriaAir = {
  airline: 'SyriaAir',
  airCode: 'SY',
  booking: [],
};
book.call(SyriaAir, 'Ward', 444); //Ward has booked a seat on SyriaAir flight SY444
// console.log(SyriaAir); //booking: Array [ {…} ]: [{ flight: "SY444", Name: "Ward" }]

//Note💎 2) apply method: function.apply(whatThisShouldPointTo , rest parameters..)
// not used anymore in modren ES6
// the diffrances that apply takes array of data.
const swissAir = {
  airline: 'swissAir',
  airCode: 'SY',
  booking: [],
};
const flightData = ['jonas', 455];
book.apply(swissAir, flightData);
// console.log(swissAir);

//Note💎 what we are using in modren ES6
book.call(swissAir, ...flightData);
// console.log(swissAir);

//Note💎 bind method: it doesnt immedietly call the function instead it will return new function
//where this keyword bind......

// book.call(Syria, 'Ward', 444);
//we can define all function for bind and use them later on...
const swissBook = book.bind(swissAir);
const BookSY = book.bind(SyriaAir);
swissBook('ward', 222);
BookSY('zain', 888);

// we can also give it a fixed parameter :
const BookSY21 = book.bind(SyriaAir, 'nahi');
// BookSY21(878);

//Note💎 function with event Listeners
// let say we need to add another porperity
TurkishAir.planes = 300;
TurkishAir.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//add event Listener :
document
  .querySelector('.buy')
  .addEventListener('click', TurkishAir.buyPlane.bind(TurkishAir));

//Note💎 if we didnt do bind it will point to the element not the object
// TurkishAir.planes = 300;
// TurkishAir.buyPlane = function(){
//   console.log(this);
//   this.planes++ ;
//   console.log(this.planes);
// }
// //add event Listener :
// document.querySelector(".buy").addEventListener("click",TurkishAir.buyPlane)


//Note💎 partical application: we can pre set parameter

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// let say we want aonter functoin for syria with constant rate..
const addTaxSy = addTax.bind(null, 0.23);
// same as addTaxSy = value => value + value*0.23 ;
console.log(addTaxSy(100));  //123

//Note💎 change it to return function:

const addTaxSy1 = function(rate){
  return function(value){
    return value + value * rate;
  }
}
const test = addTaxSy1(0.23);    //or  console.log(addTaxSy1(0.23)(100));
console.log(test(100));

 */

//Topic 🤖 exercise :
/** 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const option = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    // console.log(option);
    typeof option === 'number' &&
      option >= 0 &&
      option < this.answers.length &&
      this.answers[option]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


  poll.displayResults.call({answers:[5, 2, 3]},"string")
  */

//Topic 🤖 