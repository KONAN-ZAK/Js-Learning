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

const sett = new Set(['usd', 'euro', 'gbp', 'frank', 'yen', 'lira', 'euro', 'euro']);

sett.forEach((value) => {
  console.log(value);
});

 */

//Topic 🤖

