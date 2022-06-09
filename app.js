
const name = Egor;
let age = 30;
let boo=true;

const navLinks = document.querySelector("#header");
const header = document.getElementByALL(".imgleft");
const testBtn = document.querySelector('#testBtn');

console.log( typeof header);

function sayhello() {
    let message = "Hello " + name;
    console.log("message");
}

sayHello();

function simpleMath(a, b) {
    let result = a + b
    console.log(result);
}

let sum = simpleMath(999, 444);

console.log(sum);

 window.addEventListener("scroll", function(){
     console.log("scrolled")
 });

 document.addEventListener("DOMContentLoaded", function() {
     let scrollPos = window.scrolly;

     if(scrollPos > 0) {
         header.classlist.add('red');
     } else {
         header.classlist.remove('red');
     }
 });

function checkScroll() {
    let scrollPos = window.scrolly;

    if(scrollPos > 0) {
        header.classlist.add('red');
    } else {
       header.classlist.remove('red');
    }
    };

    
 testbtn.addEventListener("click", function() {
     console.log('clicked');
 });

 navlinks.addEventListener("click", function() {
    console.log('link clicked');
});

for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
       console.log('link clicked');
    });
    }

