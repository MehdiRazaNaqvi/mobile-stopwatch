var min = 00;
var sec = 00;
var msec = 00;


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
document.getElementById("startbtn").disabled = true;



}


function pause () { 
clearInterval(interval);
document.getElementById('startbtn').innerHTML = "Restart"
document.getElementById("startbtn").disabled = 0;



}

function reset() {
    pause();   
    var ediv = document.createElement("div");
    var rdiv = document.getElementById("resultdiv");
    
    rdiv.appendChild(ediv);
    ediv.setAttribute("id","ediv")
    var dot = document.createTextNode(":")
    var dot2 = document.createTextNode(":")

    var edivtext1 = document.createTextNode(min)
    
    var edivtext2 = document.createTextNode(sec)
    
    var edivtext3 = document.createTextNode(msec)

    ediv.appendChild(edivtext1)
    ediv.appendChild(dot2)
    ediv.appendChild(edivtext2)
    ediv.appendChild(dot)
    ediv.appendChild(edivtext3)

    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    document.getElementById('startbtn').innerHTML = "Start"
    
}





