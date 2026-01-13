console.log("Script Running");




const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);


let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;








const pepperoniscooter = document.querySelector("#pepperoni-scooter");
const pepperonibtn = document.querySelector("#pepperoni-button");
const veggiescooter = document.querySelector("#veggie-scooter");
const veggiebtn = document.querySelector("#veggie-button");
const bbqscooter = document.querySelector("#bbq-scooter");
const bbqbtn = document.querySelector("#bbq-button");
const winner = document.querySelector("#winner");


function movepepperoni () {
    pepperoni_step += 1;
    shift(pepperoniscooter, pepperoni_step)
}
function moveveggie () {
    veggie_step += 1;
    shift(veggiescooter, veggie_step)
}
function movebbq () {
    bbq_step += 1;
    shift(bbqscooter, bbq_step)
}


function checkwinner1 () {
 if (pepperoni_step > 6) {
    winner.textContent = `the pepperoni scooter won!`;
 }
}
function checkwinner2 () {
 if (veggie_step > 6) {
    winner.textContent = `the veggie scooter won!`;
 }
}
function checkwinner3 () {
 if (bbq_step > 6) {
    winner.textContent = `the bbq scooter won!`;
 }
}


pepperonibtn.addEventListener("click",movepepperoni );
pepperonibtn.addEventListener("click",checkwinner1 );
veggiebtn.addEventListener("click",moveveggie );
veggiebtn.addEventListener("click",checkwinner2 );
bbqbtn.addEventListener("click",movebbq );
bbqbtn.addEventListener("click",checkwinner3 );
