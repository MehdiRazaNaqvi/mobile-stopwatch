var min = 00;
var sec = 00;
var msec = 00;


var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;


document.getElementById("result").style.display = "none";


function start() {
    msec++
    msecHeading.innerHTML = msec;

    if(msec >= 59) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
        }
    if (sec >= 59) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
          }
              
}


function timer() {
interval = setInterval(start,16.66666666);
document.getElementById("startbtn").disabled = true;
document.getElementById("result").style.display = "none";


}


function pause () { 
clearInterval(interval);
document.getElementById('startbtn').innerHTML = "Restart"
document.getElementById("startbtn").disabled = 0;



}

function reset() {
    pause();
    result();   
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    document.getElementById('startbtn').innerHTML = "Start"
    
}







function result () {
    document.getElementById("minres").innerText = min;
    document.getElementById("secres").innerHTML = sec;
    document.getElementById("msecres").innerText = msec;
    document.getElementById("dltbtn").innerHTML = "delete" 
    document.getElementById("dotone").innerHTML = ":";
    document.getElementById("dottwo").innerHTML = ":";
    document.getElementById("result").style.display = "flex";

    


}



function dlt() {
    document.getElementById("result").style.display = "none";
}