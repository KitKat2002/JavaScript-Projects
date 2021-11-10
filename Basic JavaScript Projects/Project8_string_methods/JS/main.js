// Creates a function that uses the concat() method
function rainbowColors() {
    var color_1 = "red,";
    var color_2 = " orange,";
    var color_3 = " yellow,";
    var color_4 = " green,";
    var color_5 = " blue,";
    var color_6 = " indigo,";
    var color_7 = " violet.";
    var whole_message = color_1.concat(color_2, color_3, color_4, color_5, color_6, color_7);
    document.getElementById("Colors").innerHTML = "The colors of a ranbow are: " + whole_message;
};
// Creates a function that uses  the slice() method
function Slice_Me() {
    var random = "I don't know what to say.";
    var piece = random.slice(8,12);
    document.getElementById("singleSlice").innerHTML = piece;
};
// Creates a function that uses the .toUpperCase method
function YES() {
    var yell = "Welcome to Kathryn's random bout of insanity!"
    document.getElementById("Yelling").innerHTML = yell.toUpperCase();
};
// Creates a function that uses the .toString method
function firstRound() {
    var A =75;
    document.getElementById("What_Am_I_doing").innerHTML = A.toString();
};
// Creates a function that uses the .toPrecision method
function Precision_Function() {
    var B = 27843.397101;
    document.getElementById("numberTest").innerHTML = B.toPrecision(8);
};
// Creates a function that uses the .toFixed() method
function to_fixed() {
    var number = 5.3241;
    var n = number.toFixed(3);
    document.getElementById("Fixed").innerHTML = n;
};
// Creates a function that uses the .toValue method
function to_Value() {
    var why = "Why am I here?"
    document.getElementById("Value").innerHTML = why.valueOf();
}