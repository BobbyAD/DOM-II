// Your code goes here

//Variables
var amountPercent = 100;

//Selectors
const funBus = document.querySelector('.intro img');
const mapImg = document.querySelectorAll('.img-content img')[0];
const nav = document.querySelector('nav');


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
};


//Listeners
//Count: 3
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

//This is in the assignment, but it seems evil
nav.addEventListener('click', event => {
    event.preventDefault();
})