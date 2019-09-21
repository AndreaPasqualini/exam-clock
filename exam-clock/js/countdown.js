function format(minutes, seconds) {
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = minutes + ':' + seconds;
};

function countdown() {
  var timer = new CountDownTimer();
  var timeObj = CountDownTimer.parse();

  format(timeObj.minutes, timeObj.seconds);
  timer.onTick(format);

  document.getElementById('cdStartButton').addEventListener('click', function () {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    document.getElementById('startTime').innerHTML = hour + ":" + minute + ":" + second;
    timer.start();
  });
};
