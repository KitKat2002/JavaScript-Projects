function Form_Validation() {
    let v = document.forms["Form_One"] ["Name", "Email", "Message"].value;
    if (v == "") {
        alert("All fields must be filled out");
        return false;
    }
}