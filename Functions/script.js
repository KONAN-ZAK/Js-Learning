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

//topic 🤖 default Parameters:

//note💎 notice here we add the parameters and by default if not assigned any value it will be undefined
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

//note💎before ES6 we were using || to avoid the undefine..
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

//note💎 in ES6 we can assign in paramters the default values
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

//note💎 the parameters can hold expression , can use the previous declared parameters in order:
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

//note💎 if i want to call the function and jump one parameters
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
//cause the undefined is the first set when the vakue unkown
console.log(creatFightBook('Ar235',undefined ,50)); //{ flightNo: "Ar235", passangerNo: "UnKonwn", price: 50 }
*/

//topic 🤖 passing the argument as an value or object..
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
const checkIn = function (flightNo, passanger) {

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

//topic 🤖 Higher order function
