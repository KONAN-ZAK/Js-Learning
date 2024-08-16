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
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

//topic de-constructuring THE  array...
//cut it down into pices to use someof them better than call all the object or array everytime.
/*
// let [first, second] = restaurant.categories;
//console.log(first, second);

// note if i need the third option leave only the , ,
// let [first, ,second] = restaurant.categories;
// console.log(first, second);

// note switching the first with second ?we used before the temp
// [first, second] = [second, first];
// console.log(first, second);

// note nice way to return from function a multipe values in array and destructuring it later
// const [starter, mainMale] = restaurant.order(0, 1);
// console.log(`the starter: ${starter} and mainMeal: ${mainMale}`);

// note what if we have nested arraies:
 // const [a, b, c] = [10, 11, [12, 13]];
 // console.log(a, b, c);
 // but what if i want to deconstruct as well the inner array?

// const [a, b, [c, d]] = [10, 11, [12, 13]];
// console.log (a, b, c, d);

// note now we can init the values of decostructing values to avoid mistakes and undefined
// const [a = 1, b = 1, c = 1] = [10, 11];
// console.log(a, b, c);    // 10 , 11 , 1
*/

/////////////////////////////////////////////////////////

//topic what about destructuring the object?V96
// how to destruct the object
// by using the object name...
/*
// const {name , categories , openingHours }= restaurant ;
// console.log(name , categories , openingHours);

//note what if i want to give it another names to easy use from API :

//const {
//   name: restaurantName,
//   categories: food,
//   openingHours: hour,
// } = restaurant;
// console.log(restaurantName, food, hour);

// note what if we want to set default value if the value not exist in API: by =[]
// useful if the dont have the object and we are getting it from somewhere else...
// const {
//   name: restaurantName = [],
//   categories: food = [],
//   openingHours: hour = [],
//   menu: menufood = ['no exist !'], //if we dont have menu in our object
// } = restaurant;
// console.log(restaurantName, food, hour, menufood);

// note what if i want to get the nested object (fri object) :
// const { fri } = restaurant.openingHours;
// console.log(fri); // shows the fri object

//get the values inside the nested object
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close); // 8  23

// even we can give a new name variable :
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// note creating the func manually and pass the object to function
//as an rguments and function will de-constructing that object...

////i didnt understant the end of //note video 96.
*/

/////////////////////////////////////////////////////////

//topic the spread opertor on array using (...) ?V97 used for iterable iteration(array , set , map , string ....etc)
//to unpack the array into elements and copy it completely
/*
//bad habits : if we have array and we want to add the begining of it numbers?
// ex:
//  const arr = [7,8,9];
//  const newArreay = [1,2,arr[0],arr[0],arr[1],arr[2]];
//  console.log(newArreay);

// note now we have new way using the spread operator
// we use the ...arr the name to expand it where we want.
// ex:
// const arr = [7, 8, 9];
// const arrNew = [...arr]; // copy the array  completely

// note  Dont use this ==> const newarr = arr ; becuse it doesnt make new copy it give a referance to main one if we mofdifiy it
// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr); // [ 1, 2, 7, 8, 9 ]
// and if we use it in consol.log it will expand it out of the array:
// ex
// console.log(...newGoodArr); //1 2 7 8 9

// note  // note dont dont use this it make a shell copy affect on the main one if we push for example arr.push(5);
// const arr = restaurant.mainMenu;
// console.log(arr);

// note we can create new varaiables from object and add new items,
// ex:
// const newMenu = [...restaurant.mainMenu, 'potatoes'];
// console.log(newMenu); //Array(4) [ "Pizza", "Pasta", "Risotto", "potatoes"]
// console.log(...newMenu); //Pizza Pasta Risotto potatoes

// note creat new copy array:
// const newCopyarr = [...restaurant.mainMenu];

// note marge two or more array:
// const newMergearr = [...restaurant.mainMenu , ...restaurant.starterMenu];
// console.log(newMergearr);

// note (...) can work on iterable : arrays ,strings ,maps ,sets , not opjects
//as we know the string is an array so :
// const str = 'kenan';
// const newstr = [...str, '', 's'];
// console.log(newstr); //Array(7) [ "k", "e", "n", "a", "n", "", "s" ]
// console.log(...newstr); //k e n a n <empty string> s
// console.log(typeof restaurant); // object

// note noted we can make a completely copy for an object in the following way :
// const newRestaurantObject = {...restaurant};
// console.log(newRestaurantObject);
console.log(restaurant);
// ex:
// const arr = [1, 2, 3, 4];
// const obj = restaurant; //took the referance
// obj.arr = arr;
// console.table(obj); //the array exist
// console.table(restaurant); //the array exist

// ex: 
// const arr = [1, 2, 3, 4];
// const obj = {...restaurant ,arr} // add the arr in {} or spreately obj.arr = arr ;
// console.table(obj);
// console.table(restaurant); 

// note read this:
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

/////////////////////////////////////////////////////////

//topic rest pattern: use to collect multiply elements and condense into an array:
// rest pattern to pack element into Array
// spread operator to Un pack elements from array
// opposite of spread operator
/*
// note compearing the :
// spread: ... after the =
// const arr= [1,2,...[3,4,5]];  //[1,2,3,4,5]

// rest: ... before the =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(others);
// console.log(a, b, others);

// Ex:
//  deconstruct and there is pack up to array the rest = pack the elements into array
// const [pizza , , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); //Pizza Risotto Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// note in Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// note in Functions

// ex:
// const add = function (...numbers) {
//   console.log(numbers);
// }
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// output: Array(2) [ 2, 3 ]
// Array(4) [ 5, 3, 7, 2 ]
// Array(7) [ 8, 2, 5, 3, 2, 1, 4 ]
 
// note ex:
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

// ex:
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
*/

////////////////////////////////////////////////////////////////

//topic Short circuting && ||
// it use any datatype , return  any datatype, short circuting
// here we can see there is no boolean value
// so bewacuse its OR operator it will take the first if its true and the "kenan " not evaluated at all
/*
// console.log(3 || "kenan"); //output:  3
// console.log('' || 'Jonas');   // jonas
// console.log(true || 0); // true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello cause at least one operator is true to take it

// note the following way is more easier to set a default values away from if else or ternay operator
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //10

// in another way:


const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// note the && operator it takes the first value if its 0
// if the first is 1 then it continue to second to check it  and it true it take it

// ex:
// console.log(0 && "ward"); //0
// console.log(1 && "ward"); //ward

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // same as we can do :
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// note we can use the OR operator to set a default values
// while the AND to execute a code in the second operand..
*/

/////////////////////////////////////////////////

//topic Nullish Coalescing Operator (??)
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

/////////////////////////////////////////////////////

//topic logical assignment ??= ||=  &&= operators:
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

// note lets write it in logical operator in new way:

// test1.numGuest ||= 1;
// test2.numGuest ||= 1; // becasue there is no numGuest we return the 1

// note but yeah OR doesnt work with false if the value was 0 , so we can use ??
// test1.driver = 0 ;
// test1.driver ??= 1;
// test2.driver ??= 1; // becasue there is no numGuest we return the 1
// console.table(test1);
// console.table(test2);

// note see how as well work with &&:
// test1.owner &&= "no such a thing!";
// console.table(test1);  //becuse the first part false take the first part
// test2.owner &&= "no such a thing!";
// console.table(test2);  //becuse the first part true we go to run the second one
*/

//////////////////////////////////////////////////////////

//topic  #CHALLENGE 1 :
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

//////////////////////////////////////////////

//topic Looping Arrays: The for-of Loop
/*
// note you still can use continue and break
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu)
  console.log(item);

// note what if we want to get the index too, but we can use here the normal for:
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

 console.log([...menu.entries()]);
*/

///////////////////////////////////////////////

//topic Enhanced Object Literals : ES6 introduce 3 diffrent way to do the Object :
/*
// note WAY1:  if we have the same object and we took out the openingHours out to a spreate object :
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

//   // note 1 we can just add it names and the jsvascript will automatically add it
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

// note WAY2: no longer need to do properities and add to functoin in es6, by removing the function and : keyword
//  instead of this :
// order: function (index1, index2) { return [this.starterMenu[index1], this.mainMenu[index2]];
// we can use :
// order(index1, index2) { return [this.starterMenu[index1], this.mainMenu[index2]];

// note WAY3 : we could use array and use it to name the properities:
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

////////////////////////////////////////////////

//topic
