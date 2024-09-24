//<__________________________NUMBERS____________________________>>

//______________________________________________
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

//______________________________________________
//Topic🤖: sqrt, max, min, trunc, random, floor, ceil, round
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
//______________________________________________
//Topic🤖: BigInt()
/** 
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
//______________________________________________
//Topic🤖
//______________________________________________
//______________________________________________
//______________________________________________
//______________________________________________
//______________________________________________
//______________________________________________
//______________________________________________
