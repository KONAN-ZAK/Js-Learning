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
/* 

//  ____________ insertAdjacentHTML _______________
// we did in Bankist app before
// Selector... .insertAdjacentHTML(position , text);
/*  
it does take two strings:
beforebegin, afterbegin, beforeend, afterend 

<-- beforebegin -->   ( <p>   <-- afterbegin -->    TheContent     <-- beforeend -->   </p> )    <-- afterend -->

//EX : 
   const a = `<h1>hello Mother Fucker!!<button>click</button></h1>`;  ////// string
   document.querySelector('.header').insertAdjacentHTML('beforebegin', a);


//  __________innerHTML vs textContent____________

// innerHTML : return the whole content plus the html itself
// textContent : return only the text


//  __________createElement____________
create new Element.

//EX : 

const message = document.createElement('div'); //create message

message.classList.add('cookie-message'); // add a class name to it
//message.textContent = 'hello, we are using cookies! ';              // add a text

//OR:

message.innerHTML =
  'hello, we are using cookies! <button class =" btn btn--close--cookie">Got it</button>';

// after all we need to present it
const header = document.querySelector('.header');

// header.prepend(message);        //same as afterbegin but to insert DOM             <p>prepend    </p>
// header.append(message);         //same as beforeend but to insert DOM              <p>     append</p>
// header.before(message);         //same as beforebegin but to insert DOM     before <p>   </p>
// header.after(message);          //same as afterend but to insert DOM               <p>   </p> after

header.append(message);

// <---------------->
//💎 this doesnt work, cause it work only on (((inserting string)))....
// header.insertAdjacentHTML('beforebegin', message);

// <---------------->
//💎 what if we want to insert maultipl elements at the same time:
//means copy it and display it

// header.prepend(message.cloneNode(true));

// <---------------->
//💎 lets us try to remove it when we click on it ??

document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove();
});
*/

//Topic🤖 (styling) Elements
/* 
// in styling we use the camel case and removing the
// lets start again from our cookies creating the div.

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'we are using kookies! <button class =" btn btn--close--cookie">GOT IT</button> ';
document.querySelector('.header').append(message);

  // <-------------->
  //💎
  message.style.backgroundColor = '#37383d';
  message.style.width = '100vw';

  // <-------------->
  //💎 setProperties:
  message.style.setProperty('height', '7rem');
  // document.querySelector('.body').style.setProperty('padding-top', '20rem');

  // <-------------->
  //💎 Attributes :
  // everything inside the Element are attributes ex:
  // <img   the attributes are : src , alt , id , class ..... />
  //EX
  const logo = document.querySelector('.nav__logo');
  console.log(logo.alt); //Bankist logo
  console.log(logo.className); //nav__logo

  logo.setAttribute('alt', 'helloooLogo');

  //getAttribute:

  console.log(logo.src); //http://127.0.0.1:5500/6-Advanced-DOM-Bankist/starter/img/logo.png
  console.log(logo.getAttribute('src')); //img/logo.png

  //don't use ::::: logo.className = "logo_hello"; cause it remove all old class Names (Write over)

  // <-------------->
  //💎 Data attributes : to store the data in userInterface
  // allow to store extra info directly on HTML elements using attributes that begin with data-
  
  // in HTML inside the element as attribute : data-version-number: '3.0'
  // in Js : console.log(logo.dataset.versionNumber);
  logo.dataset.versionNumber = '4.0';

  // <-------------->
  //💎 calsslist :
  logo.classList.add('c', 'j');
  logo.classList.remove('c');
  logo.classList.toggle('c');
  logo.classList.contains('j'); //return true OR false

*/

//Topic🤖 Smooth Scrolling
/* 
//💎 two ways : the old School ..... the new school(works on modern browser)
// ((we're gonna select the button and add eventListener and select the section that we want to go to..))

// <------------------oldSchool-------------------->

1<------Select the elements---->

// const scrollFromLearnMore = document.querySelector('.btn--scroll-to');
// const scrollToSection1 = document.querySelector('#section--1');

2<------Event Listener---->
// scrollFromLearnMore.addEventListener('click', e => {
//   const s1 = scrollToSection1.getBoundingClientRect(); // it shows the boundery based on the port view

//   console.log(s1);
//   //  DOMRect { x: 30, y: 665.7000122070312,
//   //  width: 109.78334045410156, height: 29.2166748046875,
//   //  top: 665.7000122070312, right: 139.78334045410156, bottom: 694.9166870117188, left: 30 }

//   //💎 if we want the x and y for the section or spesific thing
//   console.log(`current Scroll  (X: ${window.pageXOffset} , Y: ${window.pageYOffset})`);

//   //💎 we are intersted in left and top
//   window.scrollTo(s1.left + window.pageXOffset, s1.top + window.pageYOffset);

//   // <--------------------------------->
//   //💎 better way by object :
//   window.scrollTo({
//     left: s1.left + window.pageXOffset,
//     top: s1.top + window.pageYOffset,
//     behavior: 'smooth',
//   });
// });
// <-------------------New School--------------------->
{
  const scrollFromLearnMore = document.querySelector('.btn--scroll-to');
  const scrollToSection1 = document.querySelector('#section--1');

  scrollFromLearnMore.addEventListener('click', e => {
    scrollToSection1.scrollIntoView({ behavior: 'smooth' });
  });
}
*/

//Topic🤖 EventListener Types
/* 
// mdn eventlistener

//<------------------>
////💎 the Old way
h1.onmouseenter = e => {
  alert('you Enter the heading :D ');
};

//<------------------>
//💎 the New way
{
  const h1 = document.querySelector('h1');
  h1.addEventListener('mouseenter', e => {
    alert('you Enter the heading :D ');
  });
}

//<------------------>
//💎 we can add spreate function and remove Event

const h1 = document.querySelector('h1');
const H1Move = e => {
  alert('you Enter the heading :D ');
  h1.removeEventListener('mouseenter', H1Move);
};

h1.addEventListener('mouseenter', H1Move);


//<------------------>
//💎 we can still use the remove Event at any part

const h1 = document.querySelector('h1');
const H1Move = e => {
  alert('you Enter the heading :D ');
};

h1.addEventListener('mouseenter', H1Move);
setTimeout(() => {
  h1.removeEventListener('mouseenter', H1Move);
}, 3000);
*/

//Topic🤖 EventListener Propagation
/*

document
  .querySelector('.section__title')
  .addEventListener('mouseover', function (e) {
   console.log(this === e.currentTarget)  //// same as this   TRUE
    console.log('target :  ', e.target);
    console.log('Currenttarget :  ', e.currentTarget);
    this.style.backgroundColor = 'red';
  });

 
//e.target : it show where the event happened.
//e.currentTarget : it show which element its tragetting.


*/

//Topic🤖 DOM Traversing:
/* 
const h1 = document.querySelector('h1');


//__________________________________________________
//<--------- Going downWards: child ------------->

// < ---------------------->
// it works on the root no matter how deep it is the Dom tree

//console.log(h1.querySelectorAll('.highlight'));

// < ---------------------->
// we can use the childNodes  : it gives everything event the comments

//console.log(h1.childNodes);
// NodeList(9) [ #text, <!--  Green highlight effect  -->, #text, span.highlight, #text, br, #text, span.highlight, #text ]

// < ----------IMP------------>
// we use children BUT only work for direct children

//console.log(h1.children); //HTMLCollection { 0: span.highlight, 1: br, 2: span.highlight, length: 3 }

// < ----------IMP------------>
// we can use the lastElementChild ,  firstElementChild

// console.log(h1.firstElementChild, h1.lastElementChild);



//__________________________________________________
//<--------- Going upWards: parents ------------->

// < ---------------------->
// it gives the parent of the childern

//console.log(h1.parentNode);   // <div class="header__title">

// < ----------IMP------------>
// for the spesific parent of the element h1:

//console.log(h1.parentElement); // in this example is the same   <div class="header__title">

// < ----------IMP------------>
// closest : 
// select the closest parent of the root

console.log(h1.closest('h1')); //<h1>

console.log(h1.closest('header'));



//__________________________________________________
//  querySelector : Find Children no matter how deep down in the dom tree
//  closest  : find the parent no matter how far up in the dom tree



//__________________________________________________
//<--------- Going Sideway: siblings ------------->
// we can access the previous and next one
console.log(h1.previousElementSibling); //null   because there is no sibling before the h1
console.log(h1.nextElementSibling); // <h4>      because there is a sibling after the h1


// we can do this trick if we want all the siblings of h1

const h1 = document.querySelector('h1').parentElement.children;
console.log(h1);
const ab = [...h1];
console.log(ab);

*/
  