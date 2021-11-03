function mathOne() {
    let a = 3 + 4;
    document.getElementById("Math").innerHTML = "3 + 4 = " + a;
};

function subtraction() {
    let subtractionProblem = 12 - 10;
    document.getElementById("Subtraction").innerHTML = "12 - 10 = " + subtractionProblem;
};

function multiplication() {
    let multiplicationProblem = 5 * 15;
    document.getElementById("Multiplication").innerHTML = "5 x 15 = " + multiplicationProblem;
};

function division() {
    let divisionProblem = 20/4;
    document.getElementById("Division").innerHTML = "20 / 4 = " + divisionProblem;
};

function multipleStepMath() {
    let multipleStepProblem = (4 + 8) * (57/3) + 3 - 21;
    document.getElementById("MSMath").innerHTML = "(4 + 8) x (57/3) + 3 -21 = " + multipleStepProblem;
};

function remainder() {
    let remainderProblem = 18 % 5;
    document.getElementById("Remainder").innerHTML = "The remainder of 18/5 = " + remainderProblem;
};

function negation() {
    let negationProblem = 37;
    document.getElementById("Negation").innerHTML = "The negation of 37 = " + -negationProblem;
};

function increments() {
    let incrementProblem = 7;
    incrementProblem++;
    document.getElementById("Increments").innerHTML = "7 incremented by 1 is " + incrementProblem;
};

function decrements() {
    let decrementProblem = 7;
    decrementProblem--;
    document.getElementById("Decrements").innerHTML = "7 decremented by 1 is " + decrementProblem;
};
function mathRandom() {
   let L = Math.random() * 100;
    document.getElementById("Random").innerHTML = " " + L;
};

window.alert(Math.floor(4.25 * 5.75));