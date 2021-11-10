var A = 14;
function addNumbersOne() {
    document.write(50 + A + "<br>");
};

function addNumbersTwo () {
    document.write(A + 31);
};
addNumbersOne ();
addNumbersTwo ();

function addNumbersThree () {
    var B = 25;
    console.log(20 + B + "<br>");
};

function addNumbersFour () {
    console.log(30 + B);
};

function displayDate() {
    if (new Date().getHours() < 12) {
    document.getElementById("Clock").innerHTML = "How's your morning going?"
    }
    else {
        document.write("How's your day going?")
    }
};

function Coin_Amount() {
    Coins = document.getElementById("Coins").value;
    if (Coins >= 20) {
        Price = "You have enough coins to purchase the item.";
    }
    else {
       Price = "You do not have enough coins to purchase the item"
    }
    document.getElementById("Cost").innerHTML = Price;
};

function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
};

//function Error_Code() {
 //   var var = 37;
  //  var E = 34;
   // console.log(var + E);
//};

