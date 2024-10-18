// <------- INTRO -------->
// DOM :
/* 
allowed us to make JS interact with Browser
DOM is a very Complex API that contain alot of Methods

we Can Write Js to
( Create, Modify, Delete HTML elements ,,, Set styles, calsses, Attibutes and Add Listen , response Events)

<______________________>

Accessing Elements:

    By ID: document.getElementById('myElement')
    By Class: document.getElementsByClassName('myClass')
    By Tag Name: document.getElementsByTagName('div')
    Query Selector: document.querySelector('.myClass') or document.querySelectorAll('.myClass')

<______________________>

Manipulating Content:

1 Changing Text:

const element = document.getElementById('myElement');
element.textContent = 'New Text';

2 Changing HTML:

element.innerHTML = '<span>New HTML Content</span>';

<______________________>
Modifying Attributes:

1 Set Attribute:
element.setAttribute('src', 'image.jpg');

2 Get Attribute:
const src = element.getAttribute('src');

<______________________>

Styling Elements:

element.style.color = 'blue';
element.style.display = 'none';

<______________________>

Creating and Removing Elements:

Create Element:

const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
document.body.appendChild(newDiv);

Remove Element:

    const element = document.getElementById('myElement');
    element.parentNode.removeChild(element);

<______________________>

Handling Events:

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button Clicked!');
});

*/

//Topic🤖 (Selecting) Elements
/* 

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//<---- querySelector, querySelectorAll ------>
console.log(document.querySelector('.header'));
const a = document.querySelectorAll('.section');
console.log(a);

//<---- ById, ByTagName, ByClassName------>

document.getElementById('section--1');
console.log(document.getElementsByTagName('button')); //create a htmlCollection Can update Automatically
document.getElementsByClassName('btn'); //create a htmlCollection Can update Automatically
*/

//Topic🤖 (Creating Inserting) Elements
/* */

// we did in Bankist app:
// containerMovements.insertAdjacentHTML('afterbegin', html);

