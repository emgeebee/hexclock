//lets display the current time
var d, h, m, s, color;
function displayTime() {
    d = new Date();

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    //add zero to the left of the numbers if they are single digits
   var hourmins = parseInt(60 * h);
   var totmins = hourmins + m;
   var sfraction = s/60;

    totmins = (totmins < 10) ? 0 + totmins : totmins;

console.log(totmins);

    var bluefraction = totmins < 60*12 ? parseInt(256 * Math.sin(totmins * Math.PI / (12 * 60))) : 0;
    var redfraction = totmins > 60*12 ? parseInt(256 * Math.sin((totmins - 60*12)* Math.PI / (12 * 60))) : 0;
    var yellowfraction = (totmins > 60*6 && totmins < 60*18) ? parseInt(256 * Math.sin((totmins - 60*6)* Math.PI / (12 * 60))) : 0;
    
console.log(redfraction, yellowfraction, bluefraction);

    var bluehex = bluefraction.toString(16);
    var redhex = redfraction.toString(16);
    var yellowhex = yellowfraction.toString(16);
    
    bluehex = bluehex < 10 ? 0 + bluehex : bluehex;
    redhex = redhex < 10 ? 0 + redhex : redhex;
    yellowhex = yellowhex < 10 ? 0 + yellowhex : yellowhex;
    
    var hexval = parseInt(totmins / 60).toString(16);
    hexval = hexval < 10 ? 0 + hexval : hexval;

console.log(yellowhex + redhex + bluehex);
    
    color = "#" +yellowhex + redhex + bluehex;
    //set background color
    document.body.style.background = color;
    document.body.style.opacity = sfraction;
    //set time
    document.getElementsByClassName("hex")[0].innerHTML = color + '<br /><span class="time">' + h + ':' + m + ':'  + s + '</span>';
}

//retrigger the function every second
setInterval(displayTime, 1000);
//call the function
displayTime();
