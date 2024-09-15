'use strict';

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', ['Pasta', 'Risotto']],
  testNested: [
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
  ],
  openingHours: {
    thu: {
      open: 7,
      close: 22,
    },
    fri: {
      open: 8,
      close: 23,
    },
    sat: {
      open: 9,
      close: 24,
    },
  },
  order: function (index1, index2) {
    return [this.starterMenu[index1], this.mainMenu[index2]];
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////////////////
// main idea we look what we want to de-struct and start with it {} or []...

//Topic 🤖  Destructuring Arrays – Extracting elements into variables
/* 
// Destructuring arrays allows you to unpack values into separate variables.

 //Note💎 1: Extract the first and second values from an array
// Example:
let [first, second] = restaurant.categories;
console.log(first, second); // Logs the first and second categories


//Note💎 2: Skip values in the array by leaving commas
// If you want to skip the second value and get the first and third:
// Example:
let [first, , third] = restaurant.categories;
console.log(first, third); // Logs the first and third categories


//Note💎 3: Swap two values using destructuring
// Traditional swapping would use a temporary variable; destructuring is cleaner:
// Example:
[first, second] = [second, first];
console.log(first, second); // Swapped values


//Note💎 4: Destructuring nested arrays
// When you have arrays within arrays, you can destructure them as well:
// Example:
const [one, [two, three]] = restaurant.mainMenu;
console.log(one, two, three); // Logs values from nested arrays


//Note💎 5: Initialize variables with default values
// This avoids undefined values if the array has fewer elements than expected:
// Example:
const [a = 1, b = 1, c = 1] = [10, 11];
console.log(a, b, c); // Logs 10, 11, 1 (default value for c)


//Note💎 6: Returning multiple values from a function and destructuring
// You can return an array from a function and destructure it upon receiving:
// Example:
const [starter, mainMeal] = restaurant.order(0, 1);
console.log(`The starter: ${starter}, and main meal: ${mainMeal}`);


//Note💎 7: Destructuring nested objects within arrays
// If you have an array of objects, you can destructure the objects and their properties:
// Example:
const [{ name: name1, age: age1 }, { name: name2, age: age2 }] = restaurant.testNested;
console.log(name1, age1, name2, age2); // Logs properties from the nested objects
*/

//Topic 🤖 Destructuring Objects – Extracting properties into variables
/* 
// Destructuring objects allows you to unpack values into separate variables.

//Note💎 0: Basic object destructuring
// Extract properties directly by using the object keys:
const { name, categories, openingHours: { thu, fri, sat } } = restaurant;
console.log(name, categories, thu, fri, sat); // Logs values from the object


//Note💎 1: Destructuring with a single property
// Example:
const { Name } = restaurant;
console.log(Name); // Logs the value of 'Name' property


//Note💎 2: Renaming properties during destructuring
// You can assign new variable names to properties:
const { name: restaurantName, categories: food, openingHours: hour } = restaurant;
console.log(restaurantName, food, hour); // Logs with new variable names


//Note💎 3: Setting default values
// Set default values if a property is not present in the object:
const {
  name: restaurantName = [],
  categories: food = [],
  openingHours: hour = [],
  menu: menufood = ['no exist !'], // Default value if 'menu' is missing
} = restaurant;
console.log(restaurantName, food, hour, menufood); // Logs values with defaults


//Note💎 4: Destructuring nested objects
// Access nested properties directly:
const { fri } = restaurant.openingHours;
console.log(fri); // Shows the 'fri' object


//Note💎 5: Renaming nested properties
// Assign new variable names to nested properties:
const { fri: { open: o, close: c } } = restaurant.openingHours;
console.log(o, c); // Logs open and close times with new variable names


//Note💎 6: Destructuring arrays within objects
// Access array elements nested within an object:
const { name, categories: [one, two] } = restaurant;
console.log(name, one, two); // Logs values from the array within the object


//Note💎 7: Destructuring arrays of objects
// When you have an array of objects, you can destructure both arrays and objects:
const [{ name: firstName, age: firstAge }, { name: secondName, age: secondAge }] = restaurant.testNested;
console.log(firstName, firstAge, secondName, secondAge); // Logs values from nested array of objects


//Note💎 8: Passing an object to a function and destructuring it within the function
// You can destructure an object directly within a function's parameters:
function printRestaurantInfo({ name, categories }) {
  console.log(name, categories);
}
printRestaurantInfo(restaurant); // Calls function with destructured object
*/

//Topic 🤖 Spread Operator in Arrays and (not completely works for Objects)
/* 
// The spread operator (...) is used to unpack elements from arrays, sets, maps, and strings into individual elements, or to copy and merge arrays. It does not work directly with objects, but you can use a similar syntax to create shallow copies of objects.

//Note💎 1: Copying an Array with Spread Operator
// Instead of manually copying elements, use the spread operator to create a new array:
const arr = [7, 8, 9];
const arrNew = [...arr]; // Creates a new array with the same elements as 'arr'
console.log(arrNew); // [7, 8, 9]


//Note💎 2: Avoid Direct Assignment for Copying Arrays
// Direct assignment does not create a new copy; it creates a reference to the same array:
const newArr = arr; // Points to the same array as 'arr'
newArr.push(10); // Modifies 'newArr' which is 'arr'  
console.log(arr); // [7, 8, 9, 10]
console.log(newArr); // [7, 8, 9, 10]


//Note💎 3: Adding New Items to an Array
// You can add new items to an array using the spread operator:
const newMenu = [...restaurant.mainMenu, 'potatoes'];
console.log(newMenu); // ["Pizza", ["Pasta", "Risotto"], "potatoes"]


//Note💎 4: Creating a New Copy of an Array
// Use the spread operator to create a new copy of an array:
const newCopyArr = [...restaurant.mainMenu];
console.log(newCopyArr); // Creates a new array identical to 'restaurant.mainMenu'


//Note💎 5: Merging Multiple Arrays
// Combine two or more arrays using the spread operator:
const newMergeArr = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMergeArr); // Merges 'mainMenu' and 'starterMenu' arrays


//Note💎 6: Using Spread Operator with Iterables
// The spread operator works with iterables such as arrays, strings, maps, and sets, but not objects:
//EX 📢 with string:
const str = 'kenan';
const newStr = [...str, '', 's'];
console.log(newStr); // ["k", "e", "n", "a", "n", "", "s"]


//Note💎 7: Creating a Shallow Copy of an Object
// Use the spread operator to create a shallow copy of an object:
const newRestaurantObject = { ...restaurant };
console.log(newRestaurantObject); // Copies 'restaurant' into a new object


//Note💎 8: Adding New Properties to an Object
// Add new properties to an object while copying it:
const newRestaurantObject1 = { ...restaurant, age: 26 };
console.log(newRestaurantObject1); // Includes all properties of 'restaurant' plus 'age'


//Note💎 9: Examples of Modifying Arrays in Objects
///EX 📢 Adding an array to an object:
const arr = [1, 2, 3, 4];
const obj = { ...restaurant, arr }; // Adds 'arr' to a new object created from 'restaurant'
console.table(obj); // Shows 'arr' added to the new object
console.table(restaurant); // Original 'restaurant' remains unchanged


//Note💎 10: Differences Between Spread Operator and Direct Assignment
// 1. Spread Operator (e.g., const one = [...restaurant.mainMenu]):
// Creates a shallow copy; modifications to 'one' do not affect 'restaurant.mainMenu'.

// 2. Direct Assignment (e.g., const two = restaurant.mainMenu):
// Creates a reference; modifications to 'two' affect 'restaurant.mainMenu'.

// Use the spread operator when you need a new array or object that is independent of the original.
*/

//Topic 🤖 Rest Operator - Gathering Remaining Elements or Properties
/* 
// The rest operator (...) is used to gather the remaining elements or properties into an array or object.
// It is the opposite of the spread operator, which is used to unpack elements from arrays or objects.

//Note💎 1: Rest Operator in Array Destructuring
// Gather remaining elements into an array:
const nestedArr = [1, [2, 3, 4], 5];
const [a, [b, ...rest], d] = nestedArr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4]
console.log(d); // 5


//EX 📢 with a flat array:
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a); // 1
console.log(b); // 2
console.log(others); // [3, 4, 5, 6, 7, 8, 9]


//EX 📢 with combined arrays:
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza); // Pizza
console.log(risotto); // Risotto
console.log(otherFood); // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]


//Note💎 2: Rest Operator in Object Destructuring
// Gather remaining properties into a new object:
const { Name, ...rest } = restaurant;
console.log(Name); // Restaurant's name
console.log(rest); // Object containing remaining properties

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // Object with all weekdays except Saturday


//Note💎 3: Rest Operator in Functions
// Gather function arguments into an array:
const add = function (...numbers) {
  console.log(numbers); // Array of arguments
};
add(2, 3); // [2, 3]
add(5, 3, 7, 2); // [5, 3, 7, 2]
add(8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 2, 1, 4]


//EX 📢 of summing the arguments:
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum); // Sum of the arguments
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

// Using the spread operator to pass array elements as function arguments:
const x = [23, 5, 7];
add(...x); // Equivalent to add(23, 5, 7)


//EX 📢 with function calls:
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

//Topic 🤖 Short-Circuiting with `&&` and `||` Operators
/*
// Short-circuiting refers to the behavior of logical operators where the second operand is not evaluated if the result can be determined from the first operand alone.


//Note💎 || (OR) Operator
// (Returns the first truthy value or the last value if none are truthy.)

// Ex:
console.log(3 || "kenan");   // Output: 3 (3 is truthy, so "kenan" is not evaluated)
console.log('' || 'Jonas');  // Output: 'Jonas' ('' is falsy, so 'Jonas' is returned)
console.log(true || 0);      // Output: true (true is truthy, so 0 is not evaluated)
console.log(undefined || null); // Output: null (both are falsy, so the last value is returned)

// Short-circuiting with multiple values:
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Output: 'Hello' (first truthy value)

// Setting default values using OR operator:
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // Output depends on restaurant.numGuests

// Shorter way to set default values:
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // Output depends on restaurant.numGuests


//Note💎 && (AND) Operator
// (Returns the first falsy value or the last value if none are falsy.)

// Ex:
console.log(0 && "ward");  // Output: 0 (0 is falsy, so "ward" is not evaluated)
console.log(1 && "ward");  // Output: "ward" (1 is truthy, so "ward" is returned)

// Practical Example:
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// Shorter way using AND operator:
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Usage Summary:
// - OR operator (||) is useful for setting default values or returning the first truthy value.
// - AND operator (&&) is useful for executing code conditionally based on the truthiness of the first operand:
*/

//Topic 🤖 logical assignment ??= ||=  &&= operators:
/* 
// example for what we have learned before:if we have two object ..
// const test1 = {
//   name: 'kenan',
//   numGuest: 20,
// };
// const test2 = {
//   name: 'ward',
//   owner: 'zain',
// };
// from before :
// test1.numGuest = test1.numGuest || 1;
// test2.numGuest = test2.numGuest || 1; // becasue there is no numGuest we return the 1
// console.table(test1);
// console.table(test2);

//Note💎 lets write it in logical operator in new way:

// test1.numGuest ||= 1;
// test2.numGuest ||= 1; // becasue there is no numGuest we return the 1

//Note💎 but yeah OR doesnt work with false if the value was 0 , so we can use ??
// test1.driver = 0 ;
// test1.driver ??= 1;
// test2.driver ??= 1; // becasue there is no numGuest we return the 1
// console.table(test1);
// console.table(test2);

//Note💎 see how as well work with &&:
// test1.owner &&= "no such a thing!";
// console.table(test1);  //becuse the first part false take the first part
// test2.owner &&= "no such a thing!";
// console.table(test2);  //becuse the first part true we go to run the second one
*/

//Topic 🤖 Nullish Coalescing Operator (??)
/* 
//// `??` takes 0 and "" as a true values  ....... false values are undefine and  null

let user;
console.log(user ?? "Guest"); // "Guest"

user = null;
console.log(user ?? "Guest"); // "Guest"

user = undefined;
console.log(user ?? "Guest"); // "Guest"

user = ""; 
console.log(user ?? "Guest"); // "" (empty string, not nullish)

user = 0;
console.log(user ?? "Guest"); // 0 (not nullish)

//EX 📢
// Consider the following setup:
restaurant.numGuests = "";  // Assigns an empty string to numGuests
restaurant.numtest;         // numtest is undefined

// Output for restaurant object:
console.table(restaurant);

// Using the Nullish Coalescing Operator to handle null or undefined values:
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2); // Output: "" (Empty string is not null or undefined, so it's used)

// Handling undefined values:
const guests3 = restaurant.numtest ?? 10;
console.log(guests3); // Output: 10 (numtest is undefined, so default value 10 is used)

// Summary:
// - `??` takes 0 and "" as a true values  ....... false values are undefine and  null

*/

//Topic 🤖 #CHALLENGE 1 :
/* 
{
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// de-costruct the arrays
const [players1, players2] = game.players;
// console.log(players1, players2);

//team 1
const [gk, ...filedPlayers] = players1;
// console.log(gk, filedPlayers);

//all players:
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
// console.log(team1 ,draw , team2  );

//No.6 Write a function
const printGoals = function (...names) {
  console.log(`${names.length} they scored!`);
};
printGoals(...game.scored);

//check for who will win
team1 < team2 && console.log(`the team1 most likely to win`);
team2 < team1 && console.log(`the team2 most likely to win`);
}
*/

//Topic 🤖 Looping Arrays: The for-of Loop (VERY IMPORTANT)
/*
//The `for-of` loop is a modern and convenient way to iterate over iterable objects such as arrays. It allows you to access each element directly without needing an index.

//EX 📢 1: Basic usage of for-of loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) {
  console.log(item); // Logs each item in the menu array
}


//Note💎: You can still use `continue` and `break` within a `for-of` loop to control the flow
//EX 📢
for (const item of menu) {
  if (item === 'Pizza') continue; // Skip 'Pizza'
  if (item === 'Pasta') break; // Stop loop when 'Pasta' is encountered
  console.log(item);
}

//EX 📢 2: Getting the index along with each element
// The `for-of` loop does not provide the index directly, but you can use `entries()` to get both index and element
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`); // Logs the index (1-based) and element
}

console.log([...menu.entries()]); // Converts the entries iterator into an array of [index, element] pairs
// Output entries as an array of arrays
*/

//Topic 🤖 Enhanced Object Literals : ES6 introduce 3 diffrent way to do the Object :
/*
//Note💎 WAY1:  if we have the same object and we took out the openingHours out to a spreate object :
//const openingHours = {
//   thu: {
//     open: 7,
//     close: 22,
//   },
//   fri: {
//     open: 8,
//     close: 23,
//   },
//   sat: {
//     open: 9,
//     close: 24,
//   },
// };
// const restaurant = {
//   Name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //Note💎 1 we can just add it names and the jsvascript will automatically add it
//   openingHours,
//   //note2 removing the function and : keyword
//   order(index1, index2) {
//     return [this.starterMenu[index1], this.mainMenu[index2]];
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

//Note💎 WAY2: no longer need to do properities and add to function in es6, by removing the function and : keyword
//  instead of this :
// order: function (index1, index2) { return [this.starterMenu[index1], this.mainMenu[index2]];
// we can use :
// order(index1, index2) { return [this.starterMenu[index1], this.mainMenu[index2]];

//Note💎 WAY3 : we could use array and use it to name the properities:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [days[3]]: {
    //set the name by this way
    open: 7,
    close: 22,
  },
  [days[4]]: {
    open: 8,
    close: 23,
  },
  [day ${1 + 1}]: {
    // we can still modify the name as well
    open: 9,
    close: 24,
  },
};
console.log(openingHours);

// output:
// "day 2": Object { open: 9, close: 24 }
// fri: Object { open: 8, close: 23 }
// thu: Object { open: 7, close: 22 }
*/

//Topic 🤖 Optional Chaining (?.)
/* 
//if a certain optional doesnt exist return undefine immediately
//Note💎 let explain before start by saying if we want to know if the resturant open on monday ? we'll do the following:
// if (restaurant.openingHours.mon) {   // if the mon exisit then show on screen the hour
//   console.log(restaurant.openingHours.mon.open);
// }

//Note💎 we could do it in diffrent way as well:
//  restaurant.openingHours.thu && console.log(restaurant.openingHours.thu.open);

//Note💎 now by using the chaining  ?.
// console.log(restaurant.openingHours.mon?.open); //if the mon properitie exist then continue to .open or send undefined

//EX 📢
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//  const open = restaurant.openingHours[day]?.open || "closed" ;
//  console.log(`the resturant on ${day}  ${open}`);
// }

//Note💎 works with methods:

//EX 📢 console.log(restaurant.order?.(0,0) ?? "exist");
//EX 📢 console.log(restaurant.OrderLOL?.(0,0) ?? "not exist");

//Note💎 works with array:
//EX 📢
// const kenan = [{ name: 'kenan', age: 26, work: false }];
// const check1 = kenan[0]?.name ?? 'user array empty';
// console.log(check1);
*/

//Topic 🤖 how to iterable in infromal way in object using for : Object.keys() Object.values() Object.entires()
/*
//Note💎 to get property Names ONLY of object: we use Object.keys() ;
// console.log(Object.keys(restaurant));
//Array(8)["Name","location","categories","starterMenu","mainMenu","openingHours","order","orderPizza" ]
//it gives back an array❗

//EX 📢
// const prop = Object.keys(restaurant.openingHours);
// let openStr = `we have ${prop.length} : `;
// for (const i of prop) {
//   openStr += `${i}, `;
// }
// console.log(openStr);

//Note💎 to get property values ONLY of object we use Object.values() ;
//it gives back an array❗
//EX 📢
// const values = Object.values(restaurant.openingHours);
// console.log(values);
// outPut: [ {…}, {…}, {…} ]
// 0: Object { open: 7, close: 22 }
// 1: Object { open: 8, close: 23 }
// 2: Object { open: 9, close: 24 }
// LOOP it :
// const values = Object.values(restaurant.openingHours);
// // Loop through the values array
// for (let i = 0; i < values.length; i++) {
//   const { open, close } = values[i]; // Destructure open and close
//   console.log(`Day ${i + 1}: Open at ${open}, Close at ${close}`);

//Note💎 to get property Names AND values of object, we use :Object.entires();
//it gives back an array❗
//normally there is no iteration in object we deal with it in this way: it change every {} to []
//EX 📢
// const entire = Object.entries(restaurant);
// console.log(entire);
// output for each property will give me the following: array and has it info nd name.
// [[ "Name", "Classico Italiano" ],
//  [ 'location', 'Via Angelo Tavanti 23, Firenze, Italy' ], etc...
//] 

//EX 📢
// const entire = Object.entries(restaurant.openingHours);
// console.log(entire);
// Output:
// Array(3) [ (2) […], (2) […], (2) […] ]
// 0: Array [ "thu", {…} ]
// 1: Array [ "fri", {…} ]
// 2: Array [ "sat", {…} ]

//it will give array remember
// for (const x of entire) {
//   console.log(x);
// }
// //let de-Construct it 😊
// for (const [name, { open, close }] of entire) {
//   console.log(`day:${name} openAt:${open} closeAt:${close}`);
// }

//EX 📢
// const  a  = [restaurant.mainMenu[0] , ...restaurant.mainMenu[1] ];
// console.log(a);
// for (const [name,value] of Object.entries(a)) {
//   console.log(name, value);
// }
   */

//Topic 🤖 Challenge#2:
/*
 const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Note💎1:
//   const scored = Object.entries(game.scored);
// for( const [num , name] of scored){
// console.log(`goal ${Number(num)+1} = ${name}`);
// }
//Note💎2:
/////////////////1
// const avg1 = (game.odds.team1 + game.odds.team2 + game.odds.x) / 3;
// console.log(`avg1: ${avg1}`);
/////////////////2
// const { team1, x, team2 } = game.odds;
// const avg2 = (team1 + team2 + x) / 3;
// console.log(`avg2: ${avg2}`);
/////////////////3
// let count = 0;
// const odd = Object.values(game.odds);
// for (const value of odd) {
//   count += value;
// }
// console.log(`avg3: ${count / odd.length}`);
// console.log(odd);
//Note💎3:

// for (let [team , result] of Object.entries(game.odds)) {

//   const teamName = team ==="x" ? team = "draw" : game[`${team}`];
//   console.log(teamName , result);
//  }
*/

//Topic 🤖 Set – Collection of unique values, returns an array-like structure
/*
//Note💎 Sets are collections of unique values, which means no duplicate values are allowed.
//    Sets also have no index, so you cannot access elements like arrays (e.g., set[0] doesn’t work).


//Note💎 1: Initialize a Set with unique values
const orderSet = new Set(['pasta', 'pizza', 'rezota', 'makrone', 'pizza', 'pizza']);
console.log(orderSet); 
// Output: Set(4) [ "pasta", "pizza", "rezota", "makrone" ]


//Note💎 2: Create a Set from a string
console.log(new Set('kenan')); 
// Output: Set(4) [ "k", "e", "n", "a" ]


//Note💎 3: Use Set.size to get the number of unique values (similar to array.length)
console.log(orderSet.size); 
// Output: 4


//Note💎 4: Use Set.has(value) to check if a value exists (similar to array.includes())
console.log(orderSet.has('pizza')); 
// Output: true

//Note💎 5: Use Set.add(value) to add new values (similar to array.push())
console.log(orderSet.add('garlic')); 
// Output: Set(5) [ "pasta", "pizza", "rezota", "makrone", "garlic" ]


//Note💎 6: Use Set.delete(value) to remove a value (like array.pop() but you specify the value)
console.log(orderSet.delete('rezota'));
console.log(orderSet); 
// Output: Set(4) [ "pasta", "pizza", "makrone", "garlic" ]


//Note💎 7: Use Set.clear() to delete all values from the Set
orderSet.clear();
console.log(orderSet); 
// Output: Set []

//Note💎 8: Set has no index, so orderSet[0] doesn't work, but you can still iterate through it:
for (const x of orderSet) {
  console.log(x);
}


//Note💎 9: Example: Dealing with duplicate entries in an array
// Let's say we have a restaurant staff list:
const arr = ['waiter', 'waiter', 'chef', 'manager'];
// We want to know the unique staff positions, so:
const staffPosition = new Set(arr); // Refers to the original Set
const staffPositionArray = [...new Set(arr)]; // Creates a whole new array with unique values
console.log(staffPositionArray); 
// Output: [ "waiter", "chef", "manager" ]
 */

//Topic 🤖 Map – Returns New array it has two elements (key, value) (:
/* 
//Note💎 Keys or values can be strings, numbers, or any data type.
//    Note: In objects, keys are always strings.


//Note💎 1: Initialize an empty Map:
const resta = new Map();


//Note💎 2: Use Map.set() to add key-value pairs:
// Example:
// resta.set('name', 'kenan');
// resta.set('age', 1998);

//Note💎 Note: Map.set() returns the entire Map, so you can chain multiple .set() calls.
// Example:
console.log(resta.set("sd", 878)); // Map(3) { "name" → "kenan", "age" → 1998, "sd" → 878 }


//Note💎 You can also store arrays as values:
// resta.set('love', ['dogs', 'vicky', 'cats']);
// console.log(resta);
// OUTPUT:
// 0: "name" → "kenan"
// 1: "age" → 1998
// 2: "sd" → 878
// 3: "love" → Array(3) [ "dogs", "vicky", "cats" ]


//Note💎 You can chain multiple sets in a single call:
resta
  .set('love', ['dogs', 'vicky', 'cats'])
  .set('sex', 12)
  .set(1, 2)
  .set(true, "we're open")
  .set(false, "we're closed");
console.log(resta);
// OUTPUT:
// Map(6) { 
//   "name" → "kenan", 
//   "age" → 1998, 
//   "love" → Array(3) […], 
//   "sex" → 11, 
//   1 → 2, 
//   true → "we're open", 
//   false → "we're closed"
// }


//Note💎 3: Use Map.get(key) to retrieve values (since Map has no index like arrays):
console.log(resta.get('name'));  // "kenan" (remember: ' name' != 'name', spaces matter!)
console.log(resta.get(1));       // 2
console.log(resta.get(true));    // "we're open"


//Note💎 4: Use Map.has(key) to check if a key exists:
console.log(resta.has('sex'));   // true


//Note💎 5: Use Map.delete(key) to delete a key-value pair:
console.log(resta.delete(1));    // true (1 → 2 is deleted)
console.log(resta.delete('eat')); // false (if key doesn’t exist)
console.log(resta);               // Map after deletion


//Note💎 6: Use Map.size to get the number of key-value pairs in the Map:
console.log(resta.size);  // Outputs the number of entries (size)


//Note💎 7: Use Map.clear() to remove all key-value pairs:
resta.clear();            // Empties the Map
console.log(resta);       // Outputs Map(0)

//Note💎 mapArr.keys()   .......  mapArr.values()
// console.log(question.keys());
// console.log(question.values());

*/

//Topic 🤖 Map with (array or object.entires):
/* 

//Note💎 Object.entries() returns the same structure as Map, i.e., [ [key, value], [key, value] ]
// Example: 
// const marr = Object.entries(restaurant.openingHours);
// console.log(marr);
// for (const [key, {open, close}] of marr) {
//   console.log(`Key: ${key}, Open: ${open}, Close: ${close}`);
// }


//Note💎 Error Handling
// It will result in an error because Map expects an iterable (like an array of key-value pairs), not a plain object.
// Example of incorrect usage:
// const marr = new Map(restaurant.openingHours);
// console.log(marr);


//Note💎 Object.entries(restaurant.openingHours) has the same structure as Map([key], [value])
// This means we can convert from Object.entries back to Map.
// Example: 
// console.log(Object.entries(restaurant.openingHours));
// const HoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(HoursMap);


//Note💎 Using for loop (Example for a simple game logic)
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(key, value);
//   }
// }
// const answer = Number(prompt('Enter the value:'));
// const finalAnswer = question.get(answer === question.get('correct'));
// console.log(finalAnswer);


//Note💎 Sometimes we need to unpack the Map into an array again
// Example: 
// const newArr = [...question];
// console.log(newArr);


//Note💎 Key Differences Between Object and Map:
// 1. Object.entries(object) method:
// Example: 
// const obj = { name: 'Kenan', surname: 'Zak' };
// console.log(Object.entries(obj)); // Output: [['name', 'Kenan'], ['surname', 'Zak']]

// 2. new Map(Object.entries(object)) method:
// Example: 
// const obj = { name: 'Kenan', surname: 'Zak' };
// const marr = new Map(Object.entries(obj));
// console.log(marr);  // Output: Map(2) { 'name' => 'Kenan', 'surname' => 'Zak' }


//Note💎 Note: 2nd way of initializing a Map
// const question = new Map([
//   ['question', 'What is the best programming language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct! 🪄'],
//   [false, 'Try again!'],
// ]);
// console.log(question);


// Summary of Key Differences:
// - Objects only allow strings or symbols as keys.
// - Maps allow any type of key, including objects, functions, or primitives.
// - Objects use traditional property access (dot notation or []),
// - Maps provide special methods like .set(), .get(), .has(), and .delete().
*/

//Topic 🤖 which one to use :
/* 
// need simple list values :           we use  array or set
// need the key/value pair as well :   we use  object or map

//array: Use when you need ordered list of values (might contain duplicates)
//set: Use when you need to work with unique values, Use when high-performance is really important, Use to remove duplicates from arrays.
////////////////////////////////////
//object: More “traditional” key/value store (“abused” objects) Easier to write and access values with . and []

//1 Use when you need to include functions (methods)
//2 Use when working with JSON (can convert to map)
////////////////////////////////////
//Map:
// Better performance, Keys can have any data type, Easy to iterate, Easy to compute size

//1 Use when you simply need to map key to values
//2 Use when you need keys that are not strings
*/

//Topic 🤖 #Coding Challenge 3
/* 

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

console.log(gameEvents); //see the values

//Note💎 sol.1:
// const events = new Set([...gameEvents.values()]);
// console.log(events);


//Note💎 sol.2:
// for (const [key, value] of gameEvents) {

//   if(key >= 64 && value==='Yellow card'){
//     gameEvents.delete(value);
//   }
// }
// console.log(gameEvents);
////////////////////OR the instructor did:///////////////////////////
gameEvents.delete(64);



//Note💎 sol.3:
// const avrage = `An Events avg happened eveery ${92/gameEvents.size}`;
// console.log(avrage);


//Note💎 sol.4:

// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

//////////////////another way///////////////////////////////////////
// for (const [key, value] of gameEvents) {
// const res = key <= 45 ? `FIRST` : `SECOND`;
// console.log(`[${res}] ${key}: ${value}`);
// }
*/
/////////////////////////////////////////////////////////////////////
//Topic 🤖 Strings part1....
/*
//Note💎  string works as array
const airline = 'fly syria';
const plane = 'B37B33B';

//how to access it of course as an array
console.log(plane[0]); //B
console.log('Directly from console'[2]); //r


//Note💎 read the length:
console.log(plane.length); //7
console.log('Directly from console'.length); //21


//Note💎 Methods:
//1: the first index :::  indexOf()
console.log(plane.indexOf('B')); //index is: 0


//2: the last index :::  indexOf()
console.log(plane.lastIndexOf('B')); //index is: 6


//3: index of starting the word: (cse sensitive)
console.log( airline.lastIndexOf('syria')); //index start at: 4


//4: slice method: slice(where sliceing will start included , End od sliceing not included  )
const newStr1 = airline.slice(4);
console.log(newStr1); //syria
const newStr2 = airline.slice(4, 6);
console.log(newStr2); //sy


//5: what if i want the first word?
console.log(airline.slice(0, airline.indexOf(' '))); // Output: 'fly' , notice we added space in (' ')


//6: what if i want the last word?
console.log(airline.slice(airline.lastIndexOf(' '))); // Output: ' syria'  , notice that it gave an space begining og the word... to fix it:
console.log(airline.slice(airline.lastIndexOf(' ')+1)); // Output: 'syria'


//7: using the Negative values in slice:
console.log( airline.slice(-1)); //a start counting from the END..
console.log( airline.slice(0 ,-1));  //fly syri ....start from index 0 and end in counting from back index -1


//EX 📢1: practice:
//write a function to check if the Seat in the Middle of the plane:
const middleSeat = function (seat) {
  //if the seat E or B it is in middle.
  const checkSeat =
    seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
      ? `it is in middle`
      : `it is not in middle`;
  console.log(checkSeat);
};
middleSeat('11B');
middleSeat('28C');
middleSeat('05E');
*/

//Topic 🤖 Strings part2....
/*
// const plane = 'Turkish Air Line';
//Note💎 methods

//8:  tranform to toUpperCase() or toowerCase():
// console.log(plane.toUpperCase()); //TURKISH AIR LINE
// console.log(plane.toLowerCase()); //turkish air line

//EX 📢  fix the customer name. lets say user Entered: kEnAn we should shange it to Kenan
// const Name = 'kEnAn';
// const toLower = Name.toLowerCase(); //kenan
// const correct = toLower[0].toUpperCase() + toLower.slice(1);
// console.log(correct);

//Note💎 trim(): to remove the white space from both sides..
//EX 📢  comperaing Emails:

// const registeredEmail = 'kenanalzakout@gmail.com';
// const logedInEmail = '  KenanAlzakout@gmail.com \n';
// const correction = logedInEmail => {
//   const fixed = logedInEmail.toLowerCase().trim();
//   if (fixed === registeredEmail) {
//     return `correct , ${fixed}`;
//   }
// };
// console.log(correction(logedInEmail));


//Note💎 replace(,) replaceAll(,) :

// const annocument = 'all pasenger hed to door 21, door 21 immedietly!';
// console.log(annocument.replace('door', 'Gate')); //all pasenger hed to Gate 21, door 21 immedietly!
// console.log(annocument.replaceAll('door', 'Gate')); //all pasenger hed to Gate 21, Gate 21 immedietly!


//EX 📢 change the currance payment:
// const paymentDollar = '20,5 $';
// const paymentTL =paymentDollar.replace("$","TL").replace(",",".");
// console.log(paymentTL); //20.5 TL


//Note💎: 3 methods can return Booleans:include() startstWith()   endWith()
//1: include
// console.log(plane.includes('Turkish')); //true
// console.log(plane.includes('Tur')); //true , it doesnt matter the whole word

//2: startsWith()
// console.log(plane.startsWith('Air')); //false
// console.log(plane.startsWith('Tur')); //true

//3: endWith()
// console.log(plane.endsWith('Line')); //false
// console.log(plane.endsWith('ne')); //true
 

//EX 📢
// const checkBaggage = function (items) {
//   //FIRST convert everything to small latters
//   items = items.toLowerCase();
//   console.log(items);
//   if (items.includes('gun') || items.includes('knief')) {
//     console.log('you are not allowed abroad !');
//   } else {
//     console.log('welcome abroad ');
//   }
// };

// checkBaggage('I have Gun , Water , 2 baggages');
// checkBaggage('we Have Camera and socks');
// checkBaggage('knief and belts');
*/

//Topic 🤖 Strings part3....
/* 

//Note💎 split() :gives array....inside the (" ") we can use space or ---- or anything to split it

// console.log('welcome+new+life+here'.split('+')); //Array(4) [ "welcome", "new", "life", "here" ]
// console.log('kenan alazkout'.split(' ')); //Array [ "kenan", "alzakout" ]

///////so we can use it in this way:////////////////
// const [name, lastName] = 'kenan alzakout'.split(' ');


//Note💎 join() :from array to string again...inside the(" ") we can use space OR ---- or anything to join it
// const newName = ['Mr.', name, lastName.toUpperCase()].join(' ');
// console.log(newName); //Mr. kenan ALZKOUT


//EX 📢WAY1: now how to capitilize the first letter of ech word:
// const capitil = function (string) {
//   const modify = string.split(" ");
//   console.log(modify);   // [ "my", "name", "is", "kenan", "alzakout" ]
//   const newString =[];
// for (const X of modify) {
//   newString.push(X[0].toUpperCase()+X.slice(1));
// }
// console.log(newString.join(" "));  //My Name Is Kenan Alzakout
// };
// capitil('my name is kenan alzakout');


//EX 📢WAY2:
const capitil = function (string) {
  const strArr = string.split(' '); //Array(5) [ "my", "name", "is", "kenan", "alzakout" ]
  let newstr = '';
  for (const word of strArr) {
    newstr += `${word.replace(word[0], word[0].toUpperCase())} `;
  }
  console.log(newstr);
};
capitil('my name is kenan alzakout');



//Note💎 padding : padStart( , )  padEnd( , )

//padStart(TotalNumberOfCharecter,theCharecter) .......padEnd(TotalNumberOfCharecter , theCharecter)

// const message = 'Hello Love';
// console.log(message.padStart(20, '+')); //++++++++++Hello Love  = total 20 char
// console.log('kenanSex'.padStart(20, '+').padEnd(30, '!')); //++++++++++++kenanSex!!!!!!!!!!

//EX 📢 if you add your creditCard info to a website you can see last 4 Digit and rest are *****
//how to do it ??

// const maskCreditNumnber = function (number) {
//   const str = String(number);
//   const lastFourLetters = str.slice(-4);
//   return lastFourLetters.padStart(str.length, '*');
// };

// console.log(maskCreditNumnber(4887881245568100)); //************8100
// console.log(maskCreditNumnber(48878812)); //****8812

//Note💎 repeat ();
// const message2 ="all departures delayed!";
// console.log(`${message2.repeat(5) }`);
*/

//Topic 🤖 #Coding Challenge 4
/** 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//Note💎 way 1:
//1: connect DOM to TextArea And Click:
document.querySelector('button').addEventListener('click', function () {
  let userInput = document.querySelector('textarea').value;
  let i = 0;
  //2: split the poem
  userInput = userInput.split('\n');
  //3: loop on each sentance
  for (let word of userInput) {
    //4: to lower case and trim the white space
    //5: split on "_"
    let [first, second] = word.toLowerCase().trim().split('_');
    //6: replace the first letter to Capital
    const new_Word = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

    console.log(`${new_Word.padEnd(20)}${'✅'.repeat(++i)}`);
  }
});
*/

//Topic 🤖 practice string
/* 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
for (const flight of flights.split('+_')) {
  const [status, fromm, too, time] = flight.split(';'); // [ "_Delayed_Departure", "fao93766109", "txl2133758440", "11:25" ]

  const outPut = `${status.replaceAll('_', ' ')} ${fromm
    .slice(0, 3)
    .toUpperCase()} ${too.slice(0, 3).toUpperCase()} ${time.replace(':', 'h')}`;

  console.log(outPut.padStart(60, ' '));
}
  */

////////////////////////////END///////////////////////////////////
