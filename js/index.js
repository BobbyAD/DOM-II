// Your code goes here

//Variables
var amountPercent = 100;
var amountPercentZero = 0;

//Selectors
const funBus = document.querySelector('.intro img');
const mapImg = document.querySelectorAll('.img-content img')[0];
const boatImg = document.querySelectorAll('.img-content img')[1];
const nav = document.querySelector('nav');
const navLink = document.querySelector('.nav-link');
const logo = document.querySelector('.logo-heading')


//Functions
function rotationYComplete(event) {
    TweenMax.to(".intro img", 3, {rotationY:0});
    event.target.style.filter = "invert(0%)";
};

function percentCheck() {
    if (amountPercent > 100) {
        amountPercent = 100;
    };
    if (amountPercent < 0) {
        amountPercent = 0;
    };
    if (amountPercentZero > 100) {
        amountPercentZero = 100;
    };
    if (amountPercentZero < 0) {
        amountPercentZero = 0;
    };
};


//Listeners
//Count: 6
funBus.addEventListener('mouseover', event => {
    event.target.style.filter = "invert(100%)";
    TweenMax.to(".intro img", 3, {rotationY:180, onComplete: rotationYComplete, onCompleteParams:[event]});
});

mapImg.addEventListener('wheel', event => {
    //Var check
    percentCheck();

    //Transitions
    if (event.deltaY < 0) {
        amountPercent = amountPercent + 5;
        event.target.style.filter = `opacity(${amountPercent}%)`;
        // console.log(amountPercent);
    };
    if (event.deltaY > 0) {
        amountPercent = amountPercent - 5;
        event.target.style.filter = `opacity(${amountPercent}%)`;
        // console.log(amountPercent);
    };
    event.preventDefault();
});

boatImg.addEventListener('click', event => {
    //Var check
    percentCheck();
    console.log(event);

    //Transitions
    if (event.layerX > 260) {
        amountPercentZero += 10;
        event.target.style.filter = `invert(${amountPercentZero}%)`;
    };
    if (event.layerX < 260) {
        amountPercentZero -= 10;
        event.target.style.filter = `invert(${amountPercentZero}%)`;
    };
    event.preventDefault();
});

//You can nest these :O
logo.addEventListener('mouseover', event => {
    var original = event.target.textContent;
    event.target.textContent = 'YOYOYOYO';
    logo.addEventListener('mouseleave', event => {
        event.target.textContent = original;
    })
});

//This is in the assignment, but it seems evil
nav.addEventListener('click', event => {
    event.preventDefault();
});

navLink.addEventListener('mouseover', event => {
    event.stopPropagation();
    var original = event.target.style.color;
    event.target.style.color = 'red';
    navLink.addEventListener('mouseleave', event => {
        event.target.style.color = original;
    });
});

