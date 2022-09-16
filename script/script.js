var cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    card.addEventListener('click', function () {
        console.log('hahah');
        card.classList.toggle('is-flipped');      
});
});
//variables
let isPhliped = false;
const cssCard = document.getElementById("css-card");
const jsCard = document.getElementById("js-card");
const phpCard = document.getElementById("php-card");

cssCard.addEventListener('click', function () {
    if (isPhliped == true) {
        
    }
    isPhliped = true;

});















// const cards = document.querySelectorAll('.memory-card');

// function flipCard() {
//     this.classList.toggle('flip');
// }

// cards.forEach(card => card.addEventListener('click', flipCard));