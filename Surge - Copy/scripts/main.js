
function hidediv() {
    var options = document.getElementById("options");
    options.style.display = "none";
}

function test() {

    //Hides testing setup box   
    document.getElementById('modal-wrapper').style.display='none'

    setTimeout(function(){
        speechSynthesis.speak(new SpeechSynthesisUtterance("Will read out all of the information on the screen"))
        //Information Area
        document.getElementById("type").innerHTML = document.getElementById("testtype").value
        document.getElementById("location").innerHTML = document.getElementById("testlocation").value
        document.getElementById("description").innerHTML = document.getElementById("testdescription").value
        document.getElementById("brigades").innerHTML = document.getElementById("testbrigades").value
    
        //Starts audio
        document.getElementById('audioalert').play();

        //Opens div element
        if (options.style.display === "none") {
            options.style.display = "block";
        } else {
         options.style.display = "none";
        }
    
        //Hides test buttom
        var testbutton = document.getElementById("testbutton");
        testbutton.style.display = "none";


    }, document.getElementById("testdelay").value);
}

function accept() {

}

function deny() {

    //Makes the options hide
    options.style.display = "none";

    document.getElementById("type").innerHTML = "Incident Type";
    document.getElementById("location").innerHTML = "Incident Location";
    document.getElementById("description").innerHTML = "Incident Description";
    document.getElementById("brigades").innerHTML = "Responding Brigades";

    //Makes test buttom div appear
    testbutton.style.display = "block";

    //Stops audio
    document.getElementById('audioalert').pause();
    document.getElementById('audioalert').currentTime = 0;

}

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Sets date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = dd + '/' + mm + '/' + yyyy;

//Chnages date on body load
function date() {
    document.getElementById("date").innerHTML = today;                
}


