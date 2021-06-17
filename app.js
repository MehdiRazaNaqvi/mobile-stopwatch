var min = 0;
var sec = 0;
var msec = 0;


var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;



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
document.getElementById("startbtn").disabled = "true"
}

function pause () { 
clearInterval(interval);
document.getElementById('startbtn').innerHTML = "Restart"
document.getElementById("startbtn").disabled = 0;

}

function reset() {
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    pause();
    document.getElementById('startbtn').innerHTML = "Start"
    



}