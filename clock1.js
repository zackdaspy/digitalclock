let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let digitalEl = document.getElementById("digital");
let dateEl = document.getElementById("date");
let monthsEl = document.getElementById("months");
let yearsEl = document.getElementById("years");
let dayEl = document.getElementById('day');

let monthName = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 
    'Nov', 'Dec'
] 
let dayName = [
    'Sun', 'Mon', 'Tues',
    'Wed', 'Thur', 'Fri',
    'Sat'
]
function clock() {

    let currentTime = new Date();
    let hr = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let date = currentTime.getDate();
    let month = currentTime.getMonth(); 
    let year = currentTime.getFullYear();
    let day = currentTime.getDay();
 
    if (hr >= 12){
        digitalEl.textContent = "PM";
    }
    
    let mName = monthName[month];
    let dName = dayName[day];

    hoursEl.textContent = hr;
    minutesEl.textContent = min;
    secondsEl.textContent = sec;
    dateEl.textContent = date;
    monthsEl.textContent = mName;
    yearsEl.textContent = year;
    dayEl.textContent = dName;
}

setInterval(clock,1000);