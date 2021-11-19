function topics() {
    var topic_Output;
    var topics = document.getElementById("Topic_Choice").value;
    var topic_response = "is an interesting topic";
    var plural_response = "are an interesting topic";
    switch(topics) {
        case "The weather":
            topic_Output = "The weather" + topic_response;
        break;
        case "Politics":
            topic_Output = "Politics" + plural_response;
        break;
        case "Religion":
            topic_Output = "Religion" + topic_response;
        break;
        case "Pets":
            topic_Output = "Pets" + plural_response;
        break;
        case "Gardening":
            topic_Output = "Gardening" + topic_response;
        break;
        default:
            Topic_Output = "Please enter a topic exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = topic_Output;
};

function Element_Function() {
    var Sounds = document.getElementsByClassName("Clickme");
    Sounds[0].innerHTML = "There is a new sound now";
};

var c = document.getElementById("Sketch");
var c_Context = c.getContext("2d");
c_Context.font = "25px Arial";
c_Context.strokeText("This is cool", 10, 50);

var gradient = c_Context.createLinearGradient(0,0,170,0);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "teal");
c_Context.fillStyle = gradient;
c_Context.fillRect(20,20,150,100);