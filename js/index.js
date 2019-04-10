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
const logo = document.querySelector('.logo-heading');
const intro = document.querySelector('.intro');
const html = document.querySelector('html');

//Functions
function rotationYComplete(event) {
    TweenMax.to(".intro img", 3, {rotationY:0});
    event.target.style.filter = "invert(0%)";
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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
//Count: 11
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

boatImg.addEventListener('dragstart', event => {
    console.log(event);
    event.target.style.filter = `hue-rotate(${getRandomInt(0,360)}deg)`;
})

//You can nest these :O
logo.addEventListener('mouseover', event => {
    var original = event.target.textContent;
    event.target.textContent = 'YOYOYOYO';
    logo.addEventListener('mouseleave', event => {
        event.target.textContent = original;
    })
});

intro.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
    event.target.style.color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
})

intro.addEventListener('mousedown', event => {
    event.preventDefault();
})

window.addEventListener('focus', event => {
    html.style.backgroundColor = 'white';
    window.addEventListener('blur', event => {
        html.style.backgroundColor = 'grey';
    })
})

window.addEventListener('keydown', event => {
    if (event.key == 'r') {
        html.style.backgroundColor = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`;
    }
})

//This is in the assignment, but it seems evil
nav.addEventListener('click', event => {
    event.preventDefault();
});

//stopPropogation challenge
navLink.addEventListener('mouseover', event => {
    event.stopPropagation();
    var original = event.target.style.color;
    event.target.style.color = 'red';
    navLink.addEventListener('mouseleave', event => {
        event.target.style.color = original;
    });
});