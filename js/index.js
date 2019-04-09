// Your code goes here

//Selectors
const funBus = document.querySelector('.intro img');

//Listeners
funBus.addEventListener('mouseover', event => {
    event.target.style.filter = "invert(100%)";
    TweenMax.to(".intro img", 3, {rotationY:180});
});

funBus.addEventListener('mouseleave', event => {
    event.target.style.filter = "invert(0%)";
    TweenMax.to(".intro img", 3, {rotationY:0});
});

