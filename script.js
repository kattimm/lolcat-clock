// setting globa variables
var time = new Date().getHours(); // sets time in 24hr clock
var image = "";
var msg = "hello";
var wakeUp = 7;
var work = 9;
var lunch = 12;
var takeBreak = 15;
var partyTime;
var isPartyTime = false;
// linking event elements via DOM
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var workTimeSelector = document.getElementById("workTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var breakTimeSelector = document.getElementById("breakTimeSelector");


// function updates clock
var updateClock = function()
{
    
    var timeEventJS = document.getElementById("timeEvent"); // connects timeEvent in DOM
    var clockImageJS = document.getElementById("lolcat"); // connects lolcat image in DOM

    // function figures out which image and text to display
    function runClock() { 

        if (time == wakeUp) {
            image = "https://c1.staticflickr.com/3/2545/3690526146_80a01c34a5_z.jpg?zz=1";
            msg = "Time to wake up and embrace the day!";
        }
        else if (time == work) {
            image = "https://kittybloger.files.wordpress.com/2012/05/cats-love-computers-7.jpg";
            msg = "Your job training starts now, buttercup! No excuses!";
        }
        else if (time == lunch) {
            image = "http://www.catster.com/wp-content/uploads/2015/06/cat-eats-steak.jpg";
            msg = "Go find something nutritious and tasty!";
        }
        else if (time == takeBreak) {
            image = "https://favim.com/orig/201106/22/black-black-cat-cat-kitten-photo-stretch-Favim.com-79501.jpg";
            msg = "Stretch it out, water the garden, grab a drink!";
        }
        else if (time == partyTime) {
            image = "http://cdn.pet360.com/pet360/Content/Images/CMS/Articles/Happy_Cat_Smiling.jpg";
            msg = "YAAAAAAAAY";
        }
        else if (5 < time && time < 7) {
            image = "http://static.boredpanda.com/blog/wp-content/uploads/2015/09/happy-cat-smiling-6__880.jpg";
            msg = "It's still early. Go back to sleep!";
        }    
        else if (7 < time && time < 12) {
            image = "https://s3.postimg.org/sm8pxcntf/sunshine-smile-cat.jpg";
            msg = "Good morning, sunshine!";
        }
        else if (12 <= time && time < 17) {
            image = "https://s-media-cache-ak0.pinimg.com/736x/c5/8c/ba/c58cba0d3f9feea119146efadd83f14d.jpg";
            msg = "Afternoon, hot stuff!";
        }
        else if (17 < time && time < 21) {
            image = "https://amazinganimalphotos.com/wp-content/uploads/2013/04/cutest-cat-picture-ever.jpg";
            msg = "Good evening, darling.";
        }
        else if (21 <= time || time < 1) {
            image = "http://justcuteanimals.com/wp-content/uploads/2015/02/sleepy-kitty-cute-animals-kitten-cats-pictures-pics.jpg";
            msg = "Good night! Sweet dreams.";
        }
        else { 
           image = "http://1.bp.blogspot.com/-FkI9ns64ayg/Um0OfeHf0fI/AAAAAAAAAVE/CjTnFDpSbk4/s1600/obosit.jpg";
           msg = "Shouldn't you be asleep?";
        }
    
        clockImageJS.src = image; // displays time-sensitive image via DOM
        timeEventJS.innerText = msg; // displays time-sensitive message via DOM
    }; // end function runClock within updateClock



    // function displays time on clock
    var showCurrentTime = function() {
    
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= 12) { 
            meridian = "PM"; 
        }  
        if (hours > 12) { 
            hours = hours - 12; 
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

        clock.innerText = clockTime;

    }; // end function showCurrentTime
    runClock();
    showCurrentTime();
    
}; // end function updateClock
updateClock();


// sets clock to update every second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// party time button function
var partyEvent = function() {
   
   //check isPartyTime
   if (isPartyTime == false) { 
        // if isPartyTime is false, change it to true 
        //so we know the button has been clicked
        isPartyTime = true; 
        var pageJS = document.getElementById("page");
        // set time to partyTime so the lolCat clock 
        //image and message update to the partyTime image and message
        time = partyTime;
        // sets new message on button
        partyTimeButton.innerText = "Okay! Enough Party.";
        // sets party background color
        document.body.style.background = "#00abc1";
        pageJS.style.background = "#00abc1";

        // sets header & time text to party styles
        document.getElementById("mainHeader").innerText = "Party Time!";
        document.getElementById("mainHeader").style.fontSize = "4em";
        document.getElementById("mainHeader").style.lineHeight = "1em";
        document.getElementById("timeEvent").style.fontSize = "4em";
       
    } else { 
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false; 
        // set time back to the current time
        time = new Date().getHours(); 
        // resets message on button
        partyTimeButton.innerText = "Party time!";
        // resets background color
        document.body.style.background = "#f16059";
        document.getElementById("page").style.background = "#f16059";
        // resets header & time text styles
        document.getElementById("mainHeader").innerText = "Lolcat Clock";
        document.getElementById("mainHeader").style.fontSize = "2em";
        document.getElementById("timeEvent").style.fontSize = "2em";
    };
 
}; // end function partyEvent

// functions to set "wake up time" etc. based on user choice
var wakeUpEvent = function() {
    wakeUp = wakeUpTimeSelector.value;
};

var workEvent = function() {
    work = workTimeSelector.value;
};

var lunchEvent = function() {
    lunch = lunchTimeSelector.value;
};

var takeBreakEvent = function() {
    takeBreak = breakTimeSelector.value;
};


// event listeners for party button and time setting events
partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
workTimeSelector.addEventListener("change", workEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
breakTimeSelector.addEventListener("change", takeBreakEvent);


