'use strict';

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//Topic 🤖 method: slice() method : it return new array without effecting on the orgin one !
// it work in string butttt the strings are array at the end !
/* 
let arr = ['a', 'b', 'c', 'd', 'f'];
arr.slice(2);                           //[ "c", "d", "f" ]
arr.slice(0, -1);                       //[ "a", "b", "c", "d" ] not take the last element
arr.slice(-3);                          //[ "c", "d", "f" ]  start counting frfom the the 3rd element from the end.
arr.slice(-1);                          //[ "f" ]
arr;                                    //[ "a", "b", "c", "d" , "f"] still the orginal one same

//Note💎 a full copy : using spread operator OR slice method

const newArr = [...arr];
const newArr1 = arr.slice();
// console.log(newArr, newArr1);

// ----> which one to use ? all are same and its up to you..

*/

//Topic 🤖 method: splice()  it will give same resutl as slice but it will effect the orginal one..
/*
let arr = ['a', 'b', 'c', 'd', 'f'];
console.log(arr.splice(3));                  //[ "d", "f" ]
console.log(arr);                            //[ "a", "b", "c" ] the left from the splice cutting

console.log(arr.splice(1, 1));               //[ "b" ]
console.log(arr);                            //[ "a", "c" ] the left from the splice cutting
 */

//Topic 🤖 method: reverse() and effect on the orginal one
/* 
let arr = ['a', 'b', 'c', 'd'];
const arr2 = ['j', 'i', 'h', 'j', 'f'];

console.log(arr2.reverse()); //[ "f", "j", "h", "i", "j" ]
*/

//Topic 🤖 method: concat() -----> same as [...arr1, ...arr2];
/*
// doesnt effect the orgianl one
// FirstArr.concat(SecondInOrderArr);
 
let arr = ['a', 'b', 'c', 'd'];
const arr2 = ['j', 'i', 'h', 'j', 'f'];
console.log(arr.concat(arr2)); //[ "a", "b", "c", "d", "j", "i", "h", "j", "f" ]

// ----------> same as we did before

console.log([...arr, ...arr2]); //[ "a", "b", "c", "d", "j", "i", "h", "j", "f" ]

*/

//Topic 🤖 join()
/* 
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.join('-')); //a-b-c-d
*/

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

//Topic 🤖 forEach method : forEach(callBack Func) higher order func tell it each iter what to do
// 1 (continue and break doesnt work with it )
// 2 when every foreachcall array , it get 3 arguments avaialable in order: value index arrayItSelf
/*
//Note💎 normal for loop:
{
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (let i = 0; i < movements.length; i++) {
  movements.at(i) < 0 &&
    console.log(`account withdrew ${Math.abs(movements.at(i))}`);
  movements.at(i) > 0 && console.log(`account deposited ${movements.at(i)}`);
}}

//Note💎 for of method 

{const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (let i of movements) {
  i < 0 &&
    console.log(`account withdrew ${Math.abs(i)}`);
  i > 0 && console.log(`account deposited ${i}`);
}}

//Note💎 forEach 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (i) {
  // loop on movments and let the function take each iter an i varaiable of the array
  if (i < 0) {
    console.log(`account withdrew ${Math.abs(i)}`);
  } else {
    console.log(`account deposited ${i}`);
  }
});

//Note💎 going back to for of loop when we need the index we used .Entires() or .keys()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, val] of movements.entries()) {}

//Note💎 how to find the index in foreach looper: keep the order of the parameters where  value --> index --> arrayItSelf

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (value , index , arrayItSelf) {
  if (value < 0) {
    console.log(`No.${index} account withdrew ${Math.abs(value)}`);
  } else {
    console.log(`No.${index} account deposited ${value}`);
  }
  console.log(arrayItSelf); //Array(8) [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]  print it each time loop
})

//Note💎 what if i have an object and i want to loop it

const obj = { name: 'Kenan', age: 26, friends: 'ahmad' };
console.log(Object.entries(obj));     //[['name', 'Kenan'], ['age', 26], ['friends', 'ahmad']]
for (const [f, x] of Object.entries(obj)) {
  console.log(f, x);
}
//waht about the for each method??

Object.entries(obj).forEach(function ([key, value]) {
  console.log(`the key: ${key}   value :${value}  `);
});

// what's happening ?
// Object.entries(obj) returns an array of key-value pairs.
// forEach(([key, value]) => {  }) destructures each pair and passes the key and value
// directly into the callback function.

*/

//Topic 🤖 forEach works on map and set as well:
/*
const map = new Map([
  ['usd', 'America'],
  ['euro', 'Europe'],
  ['gbp', 'United kingdom'],
  ['frank', 'netherland'],
  ['yen', 'china'],
  ['lira', 'syria'],
]);

//for of method :
for (const [f, x] of map) {
  console.log(x, f);
}
console.log(`-----------`);

// forEach method
map.forEach((value, key, EntieredMap) => {
  //the Func. arguments(value after the key )
  console.log(value, key);
});

// for Set()

const sett = new Set([
  'usd',
  'euro',
  'gbp',
  'frank',
  'yen',
  'lira',
  'euro',
  'euro',
]);

sett.forEach((value) => {
  console.log(value);
});
*/
//Topic 🤖 selector.insertAdjacentHTML(position, text);
/*  
it does take two strings:
beforebegin, afterbegin, afterend , beforeend

<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  theContent
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

//Topic 🤖  innerHTML vs textContent
// innerHTML : return the whole content plus the html itself
// textContent : return only the text

//Topic 🤖 Chalenge #1: (page 23)
/* 
const JuliaData1 = [9, 16, 6, 8, 3];
const KateData1 = [10, 5, 6, 1, 4];

// they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.

const checkDogs = function (dogsJulia, dogsKate) {
  const copyJuliaData = [...dogsJulia];
  const CorrectJuliaData = copyJuliaData.slice(1, -2);

  //combine them
  const combiningData = [...CorrectJuliaData, ...dogsKate];
  console.log(combiningData);
  // looping the values and check the dault and puppy..
  combiningData.forEach(function (Value, number) {
    const result =
      Value >= 3
        ? `Dog number ${number + 1} is an adult, and is ${Value} years old`
        : `Dog number ${number + 1} is still a puppy`;
    console.log(result);
  });
};
checkDogs(JuliaData1, KateData1);
*/

//Topic 🤖
