// const drawButton = document.getElementById("drawButton");
// const wheel1 = document.getElementById("wheel1");
// const wheel2 = document.getElementById("wheel2");
// const wheel3 = document.getElementById("wheel3");

// function getRandomValidNumber() {
//     return Math.floor(Math.random() * 501);
// }

// function animateWheel(wheel, finalNumber, delay) {
//     let iterations = 35;
//     let count = 0;

//     const interval = setInterval(() => {
//         const randomValue = Math.floor(Math.random() * (wheel.id === "wheel1" ? 5 : 10));
//         wheel.textContent = randomValue;

//         wheel.classList.add("scaling");
//         setTimeout(() => {
//             wheel.classList.remove("scaling");
//         }, 400);

//         count++;
//         if (count > iterations) {
//             clearInterval(interval);
//             setTimeout(() => {
//                 wheel.textContent = finalNumber;

//                 wheel.classList.add("resolved");
//                 setTimeout(() => wheel.classList.remove("resolved"), 500);
//             }, delay);
//         }
//     }, 100);
// }

// drawButton.addEventListener("click", () => {
//     const randomNumber = getRandomValidNumber();
//     const hundreds = Math.floor(randomNumber / 100);
//     const tens = Math.floor((randomNumber % 100) / 10);
//     const ones = randomNumber % 10;

//     animateWheel(wheel1, hundreds, 0);
//     animateWheel(wheel2, tens, 200);
//     animateWheel(wheel3, ones, 400);
// });

const drawButton = document.getElementById("drawButton");
const wheel1 = document.getElementById("wheel1");
const wheel2 = document.getElementById("wheel2");
const wheel3 = document.getElementById("wheel3");

function getRandomValidNumber() {
    return Math.floor(Math.random() * 501); 
}

function animateWheel(wheel, targetNumber, delay) {
    let currentNumber = 0;
    const interval = setInterval(() => {
        currentNumber = (currentNumber + 1) % 10;
        wheel.textContent = currentNumber;
    }, 80);
    
    setTimeout(() => {
        clearInterval(interval); 
        wheel.textContent = targetNumber; 
    }, delay);
}

drawButton.addEventListener("click", () => {
    const randomNumber = getRandomValidNumber();
    const hundreds = Math.floor(randomNumber / 100);
    const tens = Math.floor((randomNumber % 100) / 10);
    const ones = randomNumber % 10;

    animateWheel(wheel1, hundreds, 3000);
    animateWheel(wheel2, tens, 6000);
    animateWheel(wheel3, ones, 9000);
});