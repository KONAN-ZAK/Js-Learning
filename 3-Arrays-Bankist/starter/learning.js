'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const values = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////

//Topic 🤖 slice()
/* 
// method : it return new array without effecting on the orgin one !
// it work in string butttt the strings are array at the end !

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

//Topic 🤖 splice()
/*
it will give same result as slice but it will effect the orginal one...
let arr = ['a', 'b', 'c', 'd', 'f'];
console.log(arr.splice(3));                  //[ "d", "f" ]
console.log(arr);                            //[ "a", "b", "c" ] the left from the splice cutting

console.log(arr.splice(1, 1));               //[ "b" ]
console.log(arr);                            //[ "a", "c" ] the left from the splice cutting
 */

//Topic 🤖 reverse()
/* 
and effect on the orginal one
let arr = ['a', 'b', 'c', 'd'];
const arr2 = ['j', 'i', 'h', 'j', 'f'];

console.log(arr2.reverse()); //[ "f", "j", "h", "i", "j" ]
*/

//Topic 🤖 concat() -----> same as [...arr1, ...arr2];
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
//___________________________________________________________________

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

//Topic 🤖 forEach()
/*
// forEach(callBack Func) higher order func tell it each iter what to do
// 1 (continue and break doesnt work with it )
// 2 when every foreach call array , it get 3 arguments avaialable in order: value index arrayItSelf
// 3 Pros: Clear and simple for looping over elements.
// 4 Cons: Does not create or return a new array. It's just for iterating.

//Note💎 normal for loop:
{
  const values = [200, 450, undefined, 3000, -650, -130, 70, 1300];
  for (let i = 0; i < values.length; i++) {
    values?.at(i) < 0 &&
      console.log(`account withdrew ${Math.abs(values.at(i))}`);
    values?.at(i) > 0 && console.log(`account deposited ${values.at(i)}`);
  }
}

//Note💎 for of method

{
  const values = [200, 450, -400, 3000, -650, -130, 70, 1300];
  for (let i of values) {
    i < 0 && console.log(`account withdrew ${Math.abs(i)}`);
    i > 0 && console.log(`account deposited ${i}`);
  }
}

//Note💎 going back to for of loop when we need the index we used .Entires() or .keys()
{
  const values = [200, 450, -400, 3000, -650, -130, 70, 1300];
  for (const [i, val] of values.entries()) {
  }
}

//Note💎 forEach:  
// keep the order of parameters value --> index --> arrayItSelf
{
  const values = [200, 450, -400, 3000, -650, -130, 70, 1300];

  values.forEach(function (value, index, arrayItSelf) {
    if (value < 0) {
      console.log(`No.${index} account withdrew ${Math.abs(value)}`);
    } else {
      console.log(`No.${index} account deposited ${value}`);
    }
    console.log(arrayItSelf); //Array(8) [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]  print it each time loop
  });
}

//Note💎 what if i have an object and i want to loop it

const obj = { name: 'Kenan', age: 26, friends: 'ahmad' };
console.log(Object.entries(obj)); //[['name', 'Kenan'], ['age', 26], ['friends', 'ahmad']]
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

//Topic 🤖 forEach() works on map and set as well:
/*
const map = new Map([
  ['usd', 'America'],
  ['euro', 'Europe'],
  ['gbp', 'United kingdom'],
  ['frank', 'netherland'],
  ['yen', 'china'],
  ['lira', 'syria'],
]);
// ____________for of method ___________________

for (const [f, x] of map) {
  console.log(x, f);
}
console.log(`-----------`);

// ____________forEach method___________________

map.forEach((value, key, EntieredMap) => {
  //the Func. arguments(value after the key )
  console.log(value, key);
});

// _____________for Set()__________________

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
// ______________forEach__________________

sett.forEach((value) => {
  console.log(value);
});
*/

//Topic 🤖 Document.insertAdjacentHTML(position, text);
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

//  ____________innerHTML vs textContent_______________

// innerHTML : return the whole content plus the html itself
// textContent : return only the text

*/

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

//_____(((if we want to return new array we use (Map) ..... if we jsut want to modifiy the orginal one use (forEach) one..)))_______

//Topic 🤖 Map , filter , reduce
/* 
//______________________________________________
// <---- Map ---->
//______________________________________________

// 1 Pros: Ideal for transforming data.
// 2 Cons: Returns a new array, even if you don't need it (use forEach() for side-effects without returning).

// const arr = [0, 1, 2, 3];
// const newMap = arr.map(function (value, index) {
//   return value + 10;
// });

//EX 📢 convert it to arrrow function which is one linne of code
// const newMap = arr.map((value) => value + 10);

// console.log(arr); //[0, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(newMap); //[ 10, 12, 13, 14, 15, 16, 17, 18, 19 ]

//EX 📢
// const numbers = [10, 20, 30];
// const withIndex = numbers.map((num, index) => `Index ${index}: ${num}`);
// console.log(withIndex);  // Output: ['Index 0: 10', 'Index 1: 20', 'Index 2: 30']

//EX 📢 i want to print kna

// const createUserName = function (user) {
//   const userName = user
//     .toLowerCase()
//     .split(' ')
//     .map(function (value) {
//       return value[0];
//     })
//     .join('');
//   return userName;
// };
// console.log(createUserName('Kenan Nahi Alzakout'));

// what if we make it arrow ?
// const neName = Name.toLowerCase().split(' ').map(value=> value[0]).join('');
// console.log(neName);

//______________________________________________
// <---- filter ---->
//______________________________________________

// will loop for each item and add cndition for it, Ex: item > 2
// return new array
// why not for Of or forEach ? because in normal for loop we need a new empty array and push to it in each time

//EX 📢 here we want to get new array that have negative values :
// const arr = [10, -12, 13, -14, -15, -16, 17, -18, 19];

// const negativeArr = arr.filter(function (value) {
//   return value < 0;
// });
// console.log(negativeArr); // [ -12, -14, -15, -16, -18 ]

// //arraw mthod:
// const negativeAr = arr.filter((value) => value < 0);

//______________________________________________
// <---- reduce ---->
//______________________________________________

//all array elements reduce to one single value.

// const arr = [10, -12, 13, -14, 15, 16, 17, -18, 19];

// const newArr = arr.reduce(function (accumilator, value, index, arrItSelf) {
//   console.log(`accumilator: ${accumilator} value: ${value}`);
//   return accumilator + value;
// }, 0);
//Note💎 why 0 becuase i want to start counting from 0 ..

//Note💎 arrow function version
// const newAr = arr.reduce((accumilator, value) => accumilator + value, 0);
// console.log(newAr)

//______________________________________________
// <---- Combining them, lets do calculator the currance ---->
//______________________________________________
// const usdToGbp = 1.5;
// const moenyFromUsdToGbp = values
//   .filter((mov, i , arr) => {
//     i === 0 && console.log(arr); // good way to know what does the filter does in our work
//     return mov > 0;
//   })
//   .map((mov) => mov * usdToGbp);
// console.log(moenyFromUsdToGbp);
*/

//EX 📢 Chalenge #2 on map , reduce , filter method
/* 
const calcAverageHumanAge = (ages) => {
  // ______________________________________
  const calc = ages.map((age) => {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });
  // ______________________________________
  const ExcludeAges = calc.filter((age) => {
    return age >= 18;
  });
  // ______________________________________

  const avg = ExcludeAges.reduce((acc, age) => {
    return acc + age;
  }, 0)/ExcludeAges.length;
  // ______________________________________

  console.log(calc);
  console.log(ExcludeAges);
  return avg;
};

const ages = [5, 2, 4, 1, 15, 8, 3];
console.log(`Human Avg Ages: ${calcAverageHumanAge(ages)}`);


// _______________New way by chaning Method_______________________
{
  const calcAverageHumanAge = (ages) => {
    let a;
    const calc = ages
      .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((acc, age, index, arr) => {
        if (index === arr.length - 1) {
          return (acc + age) / arr.length;
        } else {
          return acc + age;
        }
      }, 0);

    return calc;
  };

  const ages = [5, 2, 4, 1, 15, 8, 3];
  console.log(`Human Avg Ages: ${calcAverageHumanAge(ages)}`);
}
*/

//Topic 🤖 find() - findIndex()
/* 
//______________________________________________
// <---- Find() ---->
//______________________________________________
//find method loop over the array and return first value that meet the our condition
//EX 📢
// const firstValue = values.find((val) => val < 0);
// console.log(firstValue);  //-400

//______________________________________________
// <---- FindIndex() ---->
//______________________________________________
//find method loop over the array and return first index that meet the our condition.
*/

//Topic 🤖 some - every
/* 
//Note💎 <---- some ---->
//as same as arr.include(value) which return TRUE , FALSE : one at least meet the condition
console.log(values.includes(1300)); // true

//WHAT if we want to add an conditons ? we use some ....

{
  const val = values.some((v) => v > 1000);
  console.log(val); //true
}

//Note💎 <---- every ---->
// it return TRUE , FALSE : all values should meet the condition
{
  const val = values.every((v) => v > -1000); //all are above the -1000
  console.log(val); //true
}
*/

//Topic 🤖 flat(deepLevel) - flatMap(func)
/* 
// flat(): goes one level deep in flat array by default.

//<--- Before we could do --->
//EX 📢
{
  const arr = [1, 2, [3, 4], 5, [6, 7], 8];
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      arr1 = [...arr1, ...arr[i]];
    } else {
      arr1.push(arr[i]);
    }
  }
  console.log(arr1); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]
}

//<--- flat() --->
//EX 📢
{
  const arr = [1, 2, [3, 4], 5, [6, 7], 8];
  const newArr = arr.flat();
  console.log(newArr); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]
}
//EX 📢
//complex array;

const arr = [1, 2, [3, 4], 5, [6, [7, [8, 10]], 11], 12, 13];
console.log(arr.flat()); //[ 1, 2, 3, 4, 5, 6, (2) […], 11, 12, 13 ]
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6, 7, (2) […], 11, 12, … ]
console.log(arr.flat(3)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13  ]

//EX 📢 in the BankSystem, if we want to know all the money in my bank ?
//<--- way1 without flat --->
{
  const balances = accounts
    .map((account) => {
      const a = account.movements
        .filter((v) => v > 0)
        .reduce((acc, v) => acc + v, 0);
      return a;
    })
    .reduce((acc, v) => acc + v, 0);
  console.log(balances);
}
//<--- way2 with flat() --->
{
  const balances = accounts
    .map((acc) => acc.movements)
    .flat()
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0);
  console.log(balances);
}
//<--- way3 flatMap() ---> 
//notice that flatMap cant use with it more than one level deeper.
{
  const balances = accounts
    .flatMap((acc) => acc.movements)
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0);
  console.log(balances);
}
*/

//Topic 🤖 sort()
/* 
//it does change the orginal array

// <------ sort the strings ------->
const arr = ['ward', 'ahmad', 'zain', 'kenan'];
console.log(arr.sort()); //[ "ahmad", "kenan", "ward", "zain" ]

// <------ sort the numbers ------->
//[ -130, -400, -650, 1300, 200, 3000, 450, 70 ]becasue it sort based on stings
console.log(values.sort());

// ___________________________
// RULES :
// values.sort((a,b)=>{});
//if we  return something < 0  so A => B
//if we  return something > 0  so B => A
// ___________________________

//EX 📢 sorting upWard
values.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log(values); //[ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

//EX 📢 sorting downWord
values.sort((a, b) => {
  if (b > a) {
    return 1;
  }
  retrun - 1;
});
console.log(values); //[ 3000, 1300, 450, 200, 70, -130, -400, -650 ] 
*/

// <_____________ Summary _____________>
// forEach():   When you need to iterate over an array (e.g., logging, modifying variables outside the array). Does not return a value.
// filter():    When you need to select elements based on a condition and return a new array with those elements.
// map():       When you need to transform each element in the array and return a new array of transformed elements.
// reduce():    When you need to reduce the array to a single value (e.g., sum, product, object) by accumulating results across elements.
// find():      method loop over the array and return first value that meet the our condition
// findIndex(): method loop over the array and return first index that meet the our condition
// some():      method loop over the array and return true, false that (one) value meet the our condition at least
// every():     method loop over the array and return true, false that (all) values should meet the our condition
// flat(num):   goes on array levels deep to flat array, on level deep by default arr.flat();
// flatMap():   goes on array levels deep to flat array, on level deep by default arr.flat();
// sort():      sort strings array by default(), on numbers we need a function to return from a to b or reverse
