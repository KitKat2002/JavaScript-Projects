// Creates a function that adds 3 and 4
function mathOne() {
    let a = 3 + 4;
    document.getElementById("Math").innerHTML = "3 + 4 = " + a;
};

// Creates a function that subtracts 12 and 10
function subtraction() {
    let subtractionProblem = 12 - 10;
    document.getElementById("Subtraction").innerHTML = "12 - 10 = " + subtractionProblem;
};

// Creates a function that multiplies 5 and 15
function multiplication() {
    let multiplicationProblem = 5 * 15;
    document.getElementById("Multiplication").innerHTML = "5 x 15 = " + multiplicationProblem;
};

// Creates a function that divides 20 and 4
function division() {
    let divisionProblem = 20/4;
    document.getElementById("Division").innerHTML = "20 / 4 = " + divisionProblem;
};

// Creates a function that uses multiple steps to find the answer to the math problem
function multipleStepMath() {
    let multipleStepProblem = (4 + 8) * (57/3) + 3 - 21;
    document.getElementById("MSMath").innerHTML = "(4 + 8) x (57/3) + 3 -21 = " + multipleStepProblem;
};

// Creates a function that finds the remainder when 18 is divided by 5
function remainder() {
    let remainderProblem = 18 % 5;
    document.getElementById("Remainder").innerHTML = "The remainder of 18/5 = " + remainderProblem;
};
// Creates a function that negates 37.  In otherwords, turns it negative
function negation() {
    let negationProblem = 37;
    document.getElementById("Negation").innerHTML = "The negation of 37 = " + -negationProblem;
};

// Creates a function that increments 7 by 1
function increments() {
    let incrementProblem = 7;
    incrementProblem++;
    document.getElementById("Increments").innerHTML = "7 incremented by 1 is " + incrementProblem;
};

// Creates a function that decrements 7 by 1
function decrements() {
    let decrementProblem = 7;
    decrementProblem--;
    document.getElementById("Decrements").innerHTML = "7 decremented by 1 is " + decrementProblem;
};

// Creates a function that multiplies a random number by 100
function mathRandom() {
   let L = Math.random() * 100;
    document.getElementById("Random").innerHTML = " " + L;
};
// Causes a window alert to display the answer to this problem, rounded down to a whole number
window.alert(Math.floor(4.25 * 5.75));