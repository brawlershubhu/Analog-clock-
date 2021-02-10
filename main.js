console.log('Hello World!');
let hours = document.getElementById('hours');
let seconds = document.getElementById('seconds');
let mins = document.getElementById('mins');
var date2 = document.getElementById('date2').innerHTML;
setInterval(() => {
  d = new Date();
  hour = d.getHours();
  sec = d.getSeconds()
  min = d.getMinutes()
  let day = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
    ]
  let dayr = day[d.getDay()]
  document.getElementById('date2').innerHTML = d.getDate();
  document.getElementById('day2').innerHTML = dayr

  let hourrot = hour*30 + min / 2
  let minrot = min*6
  let secrot = sec*6

  hours.style.transform = `rotate(${hourrot}deg)`;
  mins.style.transform = `rotate(${minrot}deg)`;
  seconds.style.transform = `rotate(${secrot}deg)`;



}, 20)
