window.setInterval(function(){
   const CORSplease = "https://cors-anywhere.herokuapp.com/";
    fetch(CORSplease + "https://mazzanet.net.au/cfa/pager-cfa-all.php")
  }, 500000);


function hidediv() {
    var options = document.getElementById("options");
    options.style.display = "none";
}

function test() {
    //Information Area
    document.getElementById("type").innerHTML = "Structure Fire";
    document.getElementById("location").innerHTML = "16 Traminer Row, Werribee 3030";
    document.getElementById("description").innerHTML = "Smoke seen in back of house";
    document.getElementById("brigades").innerHTML = "Werribee, Hoppers Crossing Staff, Hoppers Crossing";
    
    //Var for timer seconds
    var sec = 0;
    //Starts timer
    function pad ( val ) { return val > 9 ? val : "0" + val; }
        setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);

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
}


