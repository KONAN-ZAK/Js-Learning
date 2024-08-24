//topic Object with []:

/////////////////// MUST USE []////////////////////////////

//Note💎 2.  Dynamic Property Names: If the property name is stored in a variable,
//you MUST use bracket notation to access the property.
//EX 📢
// const user = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// const key = "city";  //cause there is a variable
// console.log(user[key]);  // "New York"   // must use []

//Note💎 Invalid Identifiers or Special Characters:
//If the property name contains spaces, dashes, or special characters, you MUST use bracket notation.
//EX 📢
// const team = {
//   "team-name": "Bayern Munich",
//   "total players": 11
// };

// console.log(team["team-name"]);      // "Bayern Munich"  beacuse of the name declaration
// console.log(team["total players"]);  // 11

//////////////////COULD USE [] OR . ////////////////////////////

//Note💎 1. Accessing Object Properties Using Brackets or . :
//EX 📢
// const user = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(user["name"]);  OR  // console.log(user.name);

//Note💎 3. Modifying Object Properties Using Brackets OR . :
// You can also modify the value of a property using bracket notation OR .
//EX 📢
// const user = {
//   name: "John",
//   age: 30
// };
// user["name"] = "Jane";  //  OR user.name= "Jane";
// console.log(user["name"]);  // "Jane"

//Note💎 4. Adding New Properties Using Brackets OR . :
// You can add a new property to an object using bracket OR . notation.
//EX 📢
// const user = {
//   name: "John"
// };

// user["city"] = "New York";  // user.city = "New York";
// console.log(user.city);     // "New York"
