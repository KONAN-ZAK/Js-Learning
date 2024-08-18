'use strict';

// // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

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
//

///////////////////////////////////////////////////////
// main idea we look what we want to de-struct and start with it {} or []...

//topic 🤖 de-constructuring THE array.
/*
//cut it down into pices to use some part better in new variables.
//note💎1: get the first and second value from array
//we start with [] becaue restaurant.categories is an array
//let [first, second] = restaurant.categories;
//console.log(first, second);

//note💎2: if you need the third option leave only the , ,
// let [first, ,second] = restaurant.categories;
// console.log(first, second);

//note💎3: switching the first with second ?we used before the temp
// [first, second] = [second, first];
// console.log(first, second);

//note💎4: what if we have nested arraies:
// const [one,[two,three]] = restaurant.mainMenu;
// console.log(one,two,three);

//note💎5: now we can init the values of decostructing values to avoid mistakes and undefined
// const [a = 1, b = 1, c = 1] = [10, 11];
// console.log(a, b, c);    // 10 , 11 , 1

//note💎6: nice way to return from function a multipe values in array and destructuring it later
// const [starter, mainMale] = restaurant.order(0, 1);
// console.log(`the starter: ${starter} and mainMeal: ${mainMale}`);

//note💎7: nested 
const [{ name: name1, age: age1 }, { name: name2, age: age2 }] =
  restaurant.testNested;
  */

//topic 🤖 de-constructuring THE object.Video96
/*
//note💎0: how to destruct the object 1)by using the object keys...
// const {name , categories , openingHours:{thu ,fri , sat} }= restaurant ;
// console.log(name , categories , thu, fri , sat);

//note💎1: const {Name} = restaurant;
// console.log(Name);

//note💎2: give it another names to easy use from API :
// const { name: restaurantName,  categories: food, openingHours: hour, } = restaurant;
// console.log(restaurantName, food, hour);

//note💎3: set default value if value not exist in API: by =[]
// useful if the dont have the object and we are getting it from somewhere else.
// const {
//   name: restaurantName = [],
//   categories: food = [],
//   openingHours: hour = [],
//   menu: menufood = ['no exist !'], //if we dont have menu in our object
// } = restaurant;
// console.log(restaurantName, food, hour, menufood);

//note💎4: the nested object:
// const { fri } = restaurant.openingHours;
// console.log(fri); // shows the fri object

//note💎5: new name to use:
// const {fri: { open: o, close: c }} = restaurant.openingHours;
// console.log(o, c);

//note💎6: object nested array:
// const {Name ,categories:[one, two]} = restaurant;
// console.log(Name ,one, two);

//note💎7: array nested object:
// const [{ name: firstName, age: firstAge }, { name: secondName, age: secondAge }] = restaurant.testNested ;

//note💎8: creating the func manually and pass the object to function
//as an rguments and function will de-constructing that object...
*/

//topic 🤖 spread opertor on array exepction for object
/*
//using (...)used for iterable iteration(array , set , map , string ....etc)
//to unpack the array into elements and copy it completely
//ex:📢 bad habits :
//  const arr = [7,8,9];
//  const newArreay = [1,2,arr[0],arr[0],arr[1],arr[2]];  
//  console.log(newArreay);

//note💎1: create new way using spread operator
//ex:📢
// const arr = [7, 8, 9];
// const arrNew = [...arr]; // copy the array completely

//note💎2: Dont use this ==> const newarr = arr ; becuse it doesnt make new copy it give a referance to main one if we mofdifiy it
// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr); // [ 1, 2, 7, 8, 9 ]
// and if we use it in consol.log it will expand it out of the array:
//ex:📢
// console.log(...newGoodArr); //1 2 7 8 9

//note💎  //note💎 dont dont use this it make a shell copy affect on the main one if we push for example arr.push(5);
// const arr = restaurant.mainMenu;
// console.log(arr);

//note💎3: we can add new items
//ex:📢
// const newMenu = [...restaurant.mainMenu, 'potatoes'];
// console.log(newMenu); //Array(3) [ "Pizza", ["Pasta", "Risotto"], "potatoes"]
// console.log(...newMenu); //Pizza [Pasta Risotto] potatoes

//note💎4: creat new copy array:
// const newCopyarr = [...restaurant.mainMenu];

//note💎5: marge two or more array:
// const newMergearr = [...restaurant.mainMenu , ...restaurant.starterMenu];
// console.log(newMergearr);

//note💎6: (...) can work on iterable : arrays ,strings ,maps ,sets , not opjects
//as we know the string is an array so :
// const str = 'kenan';
// const newstr = [...str, '', 's'];
// console.log(newstr); //Array(7) [ "k", "e", "n", "a", "n", "", "s" ]
// console.log(...newstr); //k e n a n <empty string> s

//note💎7: noted we can make a completely copy for an object in the following way :
// const newRestaurantObject = {...restaurant};
// console.log(newRestaurantObject);

//note💎8: add new property to it :
// const newRestaurantObject1 = {...restaurant , age:26};
// console.log(newRestaurantObject1);

//ex:📢
// const arr = [1, 2, 3, 4];
// const obj = restaurant; //took the referance
// obj.arr = arr;
// console.table(obj); //the array exist
// console.table(restaurant); //the array exist

//ex:📢 
// const arr = [1, 2, 3, 4];
// const obj = {...restaurant ,arr} // add the arr in {} or spreately obj.arr = arr ;
// console.table(obj);
// console.table(restaurant); 

//note💎 read this:
// 1. Using the Spread Operator (const one = [...restaurant.mainMenu]):

//     This creates a shallow copy of the restaurant.mainMenu array.
//     If you modify the one array, it will not affect the original restaurant.mainMenu array because it's a separate copy.
//     Example:
//     const one = [...restaurant.mainMenu];
//     one.push('newItem'); // Only 'one' changes, 'restaurant.mainMenu' stays the same.

// 2. Direct Assignment (const two = restaurant.mainMenu):

//     This is a reference to the original restaurant.mainMenu array.
//     Any change made to two will also affect restaurant.mainMenu because they both point to the same memory location.
//     Example:

//     const two = restaurant.mainMenu;
//     two.push('newItem'); // Both 'two' and 'restaurant.mainMenu' will change.

// Which is better?

//     Use the spread operator (const one = [...restaurant.mainMenu])
*/

//topic 🤖 rest operator ... in nested destructuring to gather the remaining elements or properties.
/*
// rest pattern to pack element into Array or object
// spread operator to Un pack elements from array 
// opposite of spread operator

//note💎 
//const nestedArr = [1, [2, 3, 4], 5];
const [a, [b, ...rest], d] = nestedArr;
//ex:📢
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(others);
// console.log(a, b, others);

//ex:📢
//  deconstruct and there is pack up to array the rest = pack the elements into array

// const [pizza , , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu,];
// console.log(pizza, risotto, otherFood); //Pizza Risotto Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

//note💎 in Objects:
// const {Name , ...rest} =restaurant
// console.log(Name ,rest);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//note💎 in Functions:

//ex:📢
// const add = function (...numbers) {
//   console.log(numbers);
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// output: Array(2) [ 2, 3 ]
// Array(4) [ 5, 3, 7, 2 ]
// Array(7) [ 8, 2, 5, 3, 2, 1, 4 ]
 
//note💎 ex:
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); // spread operator

//ex:📢
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
*/

//topic 🤖 Short circuting && ||
/*
// it use any datatype , return  any datatype, short circuting
// here we can see there is no boolean value
// so bewacuse its OR operator it will take the first if its true and the "kenan " not evaluated at all
// console.log(3 || "kenan"); //output:  3
// console.log('' || 'Jonas');   // jonas
// console.log(true || 0); // true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello cause at least one operator is true to take it

//note💎 the following way is more easier to set a default values away from if else or ternay operator
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //10

// in another way:


const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//note💎 the && operator it takes the first value if its 0
// if the first is 1 then it continue to second to check it  and it true it take it

//ex:📢
// console.log(0 && "ward"); //0
// console.log(1 && "ward"); //ward

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // same as we can do :
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//note💎 we can use the OR operator to set a default values
// while the AND to execute a code in the second operand..
*/

//topic 🤖 Nullish Coalescing Operator (??)
/* 
// it work in way that it takes these false values (0 and "") and stop at these false(undefine, null), ex:

// restaurant.numGuests = "";
// restaurant.numtest;
// console.table(restaurant);
// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);
// const guests3 = restaurant.numtest ?? 10;
// console.log(guests3);
*/

//topic 🤖 logical assignment ??= ||=  &&= operators:
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

//note💎 lets write it in logical operator in new way:

// test1.numGuest ||= 1;
// test2.numGuest ||= 1; // becasue there is no numGuest we return the 1

//note💎 but yeah OR doesnt work with false if the value was 0 , so we can use ??
// test1.driver = 0 ;
// test1.driver ??= 1;
// test2.driver ??= 1; // becasue there is no numGuest we return the 1
// console.table(test1);
// console.table(test2);

//note💎 see how as well work with &&:
// test1.owner &&= "no such a thing!";
// console.table(test1);  //becuse the first part false take the first part
// test2.owner &&= "no such a thing!";
// console.table(test2);  //becuse the first part true we go to run the second one
*/

//topic 🤖 #CHALLENGE 1 :
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

//topic 🤖 Looping Arrays: The for-of Loop (VERY IMPORTANT).
/*
//note💎 you still can use continue and break
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu){
  console.log(item);}

//note💎 what if we want to get the index too, but we can use here the normal for:
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

 console.log([...menu.entries()]);
*/

//topic 🤖 Enhanced Object Literals : ES6 introduce 3 diffrent way to do the Object :
/*
//note💎 WAY1:  if we have the same object and we took out the openingHours out to a spreate object :
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

//   //note💎 1 we can just add it names and the jsvascript will automatically add it
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

//note💎 WAY2: no longer need to do properities and add to functoin in es6, by removing the function and : keyword
//  instead of this :
// order: function (index1, index2) { return [this.starterMenu[index1], this.mainMenu[index2]];
// we can use :
// order(index1, index2) { return [this.starterMenu[index1], this.mainMenu[index2]];

//note💎 WAY3 : we could use array and use it to name the properities:
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
  [`day ${1 + 1}`]: {
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

//topic 🤖 Optional Chaining (?.)
/* 
//if a certain optional doesnt exist return undefine immediately
//note💎 let explain before start by saying if we want to know if the resturant open on monday ? we'll do the following:
// if (restaurant.openingHours.mon) {   // if the mon exisit then show on screen the hour
//   console.log(restaurant.openingHours.mon.open);
// }

//note💎 we could do it in diffrent way as well:
//  restaurant.openingHours.thu && console.log(restaurant.openingHours.thu.open);

//note💎 now by using the chaining  ?.
// console.log(restaurant.openingHours.mon?.open); //if the mon properitie exist then continue to .open or send undefined

//ex:📢
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//  const open = restaurant.openingHours[day]?.open || "closed" ;
//  console.log(`the resturant on ${day}  ${open}`);
// }

//note💎 works with methods:

//ex:📢 console.log(restaurant.order?.(0,0) ?? "exist");
//ex:📢 console.log(restaurant.OrderLOL?.(0,0) ?? "not exist");

//note💎 works with array:
//ex:📢
// const kenan = [{ name: 'kenan', age: 26, work: false }];
// const check1 = kenan[0]?.name ?? 'user array empty';
// console.log(check1);
*/

//topic 🤖 how to iterable in infromal way in object using for :
/* 
//note💎 to get property Names ONLY of object: we use Object.keys() ;
// console.log(Object.keys(restaurant));
//Array(8)["Name","location","categories","starterMenu","mainMenu","openingHours","order","orderPizza" ]
//it gives back an array❗

//ex:📢
// const prop = Object.keys(restaurant.openingHours);
// let openStr = `we have ${prop.length} : `;
// for (const i of prop) {
//   openStr += `${i}, `;
// }
// console.log(openStr);

//note💎 to get property values ONLY of object we use Object.values() ;
//it gives back an array❗
//ex:📢
// const values = Object.values(restaurant.openingHours);
// console.log(values);
// outPut:
// 0: Object { open: 7, close: 22 }
// 1: Object { open: 8, close: 23 }
// 2: Object { open: 9, close: 24 }

//note💎 to get property Names AND values of object, we use :Object.entires();
//it gives back an array❗
//normally there is no iteration in object we deal with it in this way: it change every {} to []
//ex:📢
// const entire = Object.entries(restaurant);
// console.log(entire);
//output for each property will give me the following: array and has it info nd name.
// 0: Array [ "Name", "Classico Italiano" ]
// 0: "Name"
// 1: "Classico Italiano"

//ex:📢
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

//ex:📢
const  a  = [restaurant.mainMenu[0] , ...restaurant.mainMenu[1] ];
console.log(a);
for (const [name,value] of Object.entries(a)) {
  console.log(name, value);
}


*/

//topic 🤖 Challenge#2:
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
//note💎1:
//   const scored = Object.entries(game.scored);
// for( const [num , name] of scored){
// console.log(`goal ${Number(num)+1} = ${name}`);
// }
//note💎2:
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
//note💎3:

// for (let [team , result] of Object.entries(game.odds)) {

//   const teamName = team ==="x" ? team = "draw" : game[`${team}`];
//   console.log(teamName , result);
//  }
*/

//topic 🤖 set : return an arr
/* 
// collection of unique values, it never allowed duplicate values and has NO index
// still set diffrent then array because it get aa unique values
//note💎1:
const orderSet = new Set(['pasta','pizza','rezota','makrone','pizza','pizza',]);
console.log(orderSet); //TheOutPut: Set(4) [ "pasta", "pizza", "rezota", "makrone" ]

//note💎2: string
// console.log(new Set('kenan')); //Set(4) [ "k", "e", "n", "a" ]

//note💎3: size  array:(lenght)
// console.log(orderSet.size); //4

//note💎4: has  array:(include)
// console.log(orderSet.has('pizza')); //true

//note💎5: add  array:(push)
// console.log(orderSet.add('garlic')); //Set(5) [ "pasta", "pizza", "rezota", "makrone" , garlic ]

//note💎5: delete(name)  array:(pop() with no value)
// console.log(orderSet.delete('rezota'));
// console.log(orderSet); //Set(4) [ "pasta", "pizza", "makrone", "garlic" ]

//note💎5: .clear() delete all sets values BY  
// orderSet.clear();
// console.log(orderSet); //Set []

//note💎7: notice that set has no index so orderSet[0] doesnt work
//but we still can iterate it by for loop
// for(const x of orderSet){
//   console.log(x);
// }

//note💎8:
// let say we have our restaurant staff:
// const arr = ["waiter","waiter","chef","manager"];
// i want to know the main staff level we have it, so :
// const staffPosition = new Set(arr); // but remember here we did ref.
// const staffPosition = [...new Set(arr)]; //whole copy by spread operator...
// console.log(staffPosition); //[ "waiter", "chef", "manager" ]
*/

//topic 🤖 Map : return array with two places(key , values)  (:
/* 
// keys or values could be string or number or anytihng ...remember keys are strings in object
//note💎1: initilize empty map:
const resta = new Map();

//note💎2:  Map.set() key with values
// resta.set('name', 'kenan');
// resta.set('age', 1998);

//note💎 if we cl at any point, it will give the whole resta acuse set it return directly
// console.log(resta.set("sd",878)); // Map(3) { " name" → "kenan", age → 1998, sd → 878 }

//note💎 we can write array in value area:
// resta.set('love',["dogs",'vicky','cats']);
// console.log(resta);
// OUTPUT:
// 0: " name" → "kenan"
// 1: age → 1998
// 2: sd → 878
// 3: love → Array(3) [ "dogs", "vicky", "cats" ]

//note💎 we can add multiple sets :
resta
  .set('love', ['dogs', 'vicky', 'cats'])
  .set('sex', 11)
  .set(1, 2)
  .set(true, "we're open")
  .set(false, "we're close");
console.log(resta);

// Map(5) { " name" → "kenan", age → 1998, love → (3) […], sex → 11, 1 → 2 ,eat → 2  ,true → "we're open, false → "we're close""}

//note//note💎 3: Map.get() to re get data from map : becuase it has no index to access

// console.log(resta.get('name')); // "kenan" be careful the space is matter in string(' name') diffrent than ('name')
// console.log(resta.get(1)); // 2
// console.log(resta.get(true)); // "we're open"

//note💎 4: has:
// console.log(resta.has('sex')); //true

//note💎 5: delete:
// console.log(resta.delete(1));
// console.log(resta.delete('eat'));
// console.log(resta);

//note💎 6: size:
// console.log(resta.size);  //6

//note💎 7: clear:
// console.log(resta.clear());  //Map(0)
// console.log(resta );
*/

//topic 🤖 Map : array inside Map
/* 
// set it kinda painful if we have many elements to set
//there is another way easier:

// const question = new Map([
//   ['question', 'what is the best ProgressEvent. laguages?'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'correct🪄'],
//   [false, 'try again!'],
// ]);
// console.log(question);
//note💎 remember that object.entires(restaurant.OpeningHours) has same structure of Map([key],[value])
//thats mean we can return from object,enteries to map
//ex:📢
// console.log(Object.entries(restaurant.openingHours));
// const HoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(HoursMap);


//note💎 can use for loop( nice game)

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(key, value);
//   }
// }
// const answear = Number(prompt('Enter the value:'));
// const finalAnswear = question.get(answear === question.get('correct'));
// console.log(finalAnswear);

//note💎 sometimes we need to un pack the map to array again:
// const newArr = [...question];
// console.log(newArr);

//note💎 we have as well : NOT imPORTWANT JUST KNOWS THAT THE ARE EXISTS
// console.log(question.keys());
// console.log(question.values());
*/

//topic 🤖 which one to use :
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

//topic 🤖 #Coding Challenge 3
