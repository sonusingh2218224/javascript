// multiply by 1000 because Date() requires miliseconds
var date = new Date();
var hh = date.getHours();
var mm = date.getMinutes();
var ss = date.getSeconds();
// If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
// if (hh > 12) {hh = hh % 12;}
// These lines ensure you have two-digits
if (hh < 10) {
  hh = "0" + hh;
}
if (mm < 10) {
  mm = "0" + mm;
}
if (ss < 10) {
  ss = "0" + ss;
}
// This formats your string to HH:MM:SS
var t = hh + ":" + mm + ":" + ss;
console.log(t);
//
