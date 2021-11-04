function Dictionary_1() {
    var Poultry = {
        Species: "Chicken",
        Color: "White",
        Breed: "Silkie",
        Age: 3,
        Sound: "Cackle"
    };
    delete Poultry.Breed
    document.getElementById("Dictionary").innerHTML = Poultry.Breed;
};

function Dictionary_2() {
    var Poultry = {
        Species: "Chicken",
        Color: "White",
        Breed: "Silkie",
        Age: 3,
        Sound: "Cackle"
    };
    document.getElementById("DictionaryTwo").innerHTML = Poultry.Sound;
};