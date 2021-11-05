// Returns the type of the variable "7"
document.write(typeof "7");
// Returns 8117
document.write("81" + 17);
// Returns negative infinity
document.write(-4E420);
// Returns positive infinity
document.write(4E420);
// Returns false
document.write(10 > 12);
// Returns true
document.write(14 < 15);
// Logs 544 to the console
console.log(32 * 17);
// Logs true to the console
console.log(37 > 50);
// Returns false
document.write(20 == 30);
// Returns true
document.write(20 + 20 == 40);
// Returns true
document.write(55 > 44 && 33 < 72);
// Returns false
document.write(55 > 44 && 33 > 72);
// Returns true
document.write(30 > 20 || 24 < 30);
// Returns false
document.write(31 > 32 || 33 > 34);

let E = 25;
let F = 27;

let G = 32;
let H = 32;

let I = "17";
let J = 21;

let K = 50;
let L = "50";

// Returns false
document.write(F===E);
// Returns true
document.write(G===H);
// Returns false 
document.write(I===J);
// Returns true
document.write(K===L);

// Creates a function that returns NaN
function NanFunction() {
    document.getElementById("NanFu").innerHTML = 0/0;
};
// Creates a function that returns true
function NanTrue() {
    document.getElementById("NanTrue").innerHTML = isNaN('Chicken')
};
// Creates a function that returns false
function NanFalse() {
    document.getElementById("NanFalse").innerHTML = isNaN("9")
};
// Returns true
function notOne() {
    document.getElementById("NotOne").innerHTML = ! (30 > 40);
};
// Returns false
function notTwo() {
    document.getElementById("NotTwo").innerHTML = ! (40 > 30);
}

