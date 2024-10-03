//<__________________________NUMBERS____________________________>>

//Topic🤖: interger / float
/*
console.log(Number('25')); //25
//or add + in the beginning (type coertion):
console.log(+'25'); //25

//💎 parse
//1 parseInt
//number should be in the beginning of the text, otherwise wont be read.
console.log(Number.parseInt('5rem')); //5
console.log(Number.parseInt('5.5rem')); //5

//2 parseFloat:
//get the value coming from css
console.log(Number.parseFloat('5.5rem')); //5.5

//💎 Number.isNaN()
//check if value is a NaN(Not a Number) ....not in use 

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20V')); //True


//💎 Number.isFinite()  Imp.
//check if value is a number .... in use and preferable

const x = 20 ;
console.log(Number.isFinite(x)); //true
console.log(Number.isFinite("hello")); //false
*/

//Topic🤖: sqrt, max, min, trunc, random, floor, ceil, round, toFixed
/* 
//______________________________________________
//1 Math.sqrt():
console.log(Math.sqrt(100)); //10
//// ANOTHER WAY ////
console.log(100 ** (1 / 2)); //10
console.log(100 ** (1 / 3)); //4.6

//______________________________________________
//2 Math.max(,) , Math.Min(,)
console.log(Math.max(100, 200, 25, 250, 800, 1000, 100)); //1000
console.log(Math.min(100, 200, 25, 250, 800, 1000, 100)); //25

//______________________________________________
//3 Math.trunc()
console.log(Math.trunc(19910135.2)); //19910135

//______________________________________________
//4 Math.random()
console.log(Math.floor(Math.random() * 10) + 1);

//EX  get Numbers between 10 and 20 ?
const intNumber = (max, min) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(intNumber(10, 20));

//______________________________________________
//5 Math.round
//rounding to the closest Integer.
console.log(Math.round(2.3)); //2
console.log(Math.round(2.6)); //3

//______________________________________________
//6 Math.ceil
//rounding up always .
console.log(Math.ceil(2.3)); //3
console.log(Math.ceil(2.6)); //3

//______________________________________________
//7 Math.floor
//rounding down always.
console.log(Math.floor(2.3)); //2
console.log(Math.floor(2.6)); //2

//______________________________________________
// 8 Value.toFixed(number) Rounding Decimals
//   (it return a string) 
console.log((2.789).toFixed(2)); //2.79 string
console.log(+(2.789).toFixed(2)); //2.79 number
console.log(+(2.789).toFixed(1)); //2.8 number
console.log(+(2.789).toFixed(3)); //2.789 number
*/

//Topic🤖: BigInt()
/* 
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(45454548774478n); //45454548774478n
console.log(BigInt(45454548774478)); //45454548774478n

//💎 Operation:

//1 we can do operation between bigInt Number and normal one
const a = 145454554544n;
const b = 23;

// console.log(a*b); //ERROR : can't convert BigInt to number
console.log(a * BigInt(b)); //3345454754512n
*/

//Topic🤖: Date()
/* 
// <------- Get the current Date ------->

// const now = new Date();  // Date now
// console.log(now);

// <------- Enter a current Date ------->

// console.log(new Date('December,24,2024'));
// console.log(new Date('1998/02/13 22:20:10'));
// console.log(new Date(3*24*60*60*1000));

// <----------- operations ------------>
 
const future = new Date('2025/2/13 22:00:10');
console.log(future); //Thu Feb 13 2025 22:00:10 GMT+0200

console.log(future.getFullYear()); //2025

console.log(future.getMonth()); //1 (because we srart count from 0)

console.log(future.getDay()); // 4 means thu in the week

console.log(future.getDate()); //13 the day

console.log(future.getHours()); //22

console.log(future.getMinutes()); // 0

console.log(future.getSeconds()); // 10

console.log(future.toISOString()); //2025-02-13T20:00:10.000Z

/////get the time stamp in sec since 1970 start counting.
console.log(future.getTime()); //1739476810000
console.log(new Date(1739476810000)); //Thu Feb 13 2025 22:00:10

//give the time stamp at the moment:
console.log(Date.now()); //1727264972934

//____________Set ______________
// we have many operators in this method.
// to update the current time.

future.setFullYear(2040);
console.log(future);  // Mon Feb 13 2040 22:00:10
*/

//______________________________________________
//______________________________________________
//______________________________________________
//______________________________________________
//______________________________________________

//____________ Summary _________________________

// floor         : imp!
// round         : imp!
// toFixed       : imp!
