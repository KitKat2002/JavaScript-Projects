//Creates a function that uses a while loop
function Call_Loop () {
    var Number = "";
    var R = 1;
    while (R < 4) {
        Number += "<br>" + R;
        R++;
    }
    document.getElementById("Loop").innerHTML = Number;
};

//Creates a for loop
var Instruments = ["Guitar", "Piano", "Flute", "Recorder", "Saxophone", "Harpsichord", "Trombone"];
var Content = "";
var B;
function for_Loop() {
    for (B = 0; B < Instruments.length; B++) {
        Content += Instruments[B] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
};
//Creates a function that uses an array
function array_Function() {
    var Horse_Ears = [];
    Horse_Ears[0] = "Neutral";
    Horse_Ears[1] = "Alert/Excited";
    Horse_Ears[2] = "Annoyed/Listening Behind";
    Horse_Ears[3] = "Angry";
    document.getElementById("Array").innerHTML = "When a horse's ears are forward, the horse is "
     + Horse_Ears[1] + ".";
};
//Creates a function that uses const to declare a variable
function constant_function() {
    const Car = {Make:"Buick", Model:"Roadmaster", Year: "1995", Color: "Tan"};
    Car.color = "Maroon";
    Car.price = "$2,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Car.Model + " was "
     + Car.price;
};

let plant = "Rose Bush";
document.write(plant);

//Creates a function that contains a loop that uses the break statement
function break_trial() {
let text = "";
for (let k = 0; k < 19; k++) {
    if (k === 5) {break; }
    text += "We're using a break method " + k + "<br>";
    }
    document.getElementById("break").innerHTML = text;
};

//Creates a funtion that contains a loop that uses the continue statement
function continue_trial() {
    let con = "";
    for (let t = 0; t < 8; t++) {
        if (t === 4) {continue; }
        con += "We're using a continue method " + t + "<br>";
    }
    document.getElementById("continue").innerHTML = con;
};
