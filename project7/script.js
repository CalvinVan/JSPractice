

function calculateTime() {
  var date = new Date();
  var dayNumber = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();

  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var day = date.getDate();
 

  var ampm = hour >= 12 ? 'PM' : 'AM';
  var dayNames = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];

  hour = hour % 12;
  hour = hour ? hour : 12;
  hour = hour < 12 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  document.getElementById("monthDate").innerHTML = month;
  document.getElementById("dayDate").innerHTML = day;
  document.getElementById("yearDate").innerHTML = year;

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 200);
}

window.addEventListener('load',calculateTime)
