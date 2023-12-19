let t = 0;
let intervalId;
function logTime() {
  ++t;
  console.log(t);
}
setInterval(logTime, 1000);
