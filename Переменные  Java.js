
const username = Егор ;
let age = 30;
let boo=true;

const header = document.getElementById("#header");
const navLinks = document.querySelector(".nav__lik");
const testBtn = document.querySelector('#testBtn');

console.log( navLinks);

function sayhello() {
    let message = "Hello " + name;
    console.log("message")
}

sayHello();

function simpleMath(a, b) {
    let result = a + b
    return result;
}

 let sum = simpleMath(999, 444);

 console.log(sum);

 window.addEventListener("scroll", function() {
    console.log("scrolled");
    header.classList.add('red');
    let scrollPos = window.scrollY;
    console.log(ScrollPos);
    if(scrollPos > ) {

    } else {

    }
 });

 document.addEventListener("DOMcintentLoaded", function(){
    console.log("scrolled");
    header.classList.add('red');
    let scrollPos = window.scrollY;
    console.log(ScrollPos);
    if(scrollPos > ) }

    { else } {

  });

 testBtn.addEventListener("click", function(){
     console.log('clicked');
 });

 navLinks.saddEventListener("click", function(){
    console.log('link clicked');
});

for(let navItem of navLinks) {
    navItem.addEventListener("click", function(){
        console.log(vavItem.text);
    });
}