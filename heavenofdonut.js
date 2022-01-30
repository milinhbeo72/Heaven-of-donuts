//set the date we are counting down to
var countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();
//update time every second
var x = setInterval(function(){
    //Get Today's date and time
    var today = new Date().getTime();
    //Find the gap between countdown day and today
    var gap = countDownDate - today;
    //Time calculation for days, hours, minutes, seconds
    var d = Math.floor(gap/(24*60*60*1000));
    var h = Math.floor((gap%(24*60*60*1000))/(1000*60*60));
    var m = Math.floor((gap%(60*60*100))/(1000*60));
    var s = Math.floor((gap%(60*1000))/(1000));

    document.getElementById("day").innerHTML= d;
    document.getElementById("hour").innerHTML= h;
    document.getElementById("minute").innerHTML= m;
    document.getElementById("second").innerHTML= s;
    console.log(d);
},1000);