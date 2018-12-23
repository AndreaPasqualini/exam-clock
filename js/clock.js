function clk() {
  var now = new Date();

  var hour = now.getHours();
  var mins = ( "0" + now.getMinutes() ).slice(-2);

  document.getElementById("time").innerHTML = hour + ":" + mins
}

function dt() {
  var now = new Date();

  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  var monthIx = now.getMonth();

  var day = now.getDate();
  var month = monthNames[monthIx];
  var year = now.getFullYear();

  document.getElementById("date").innerHTML = day + " " + month + " "  + year
};

window.onload = function() {
  setInterval(clk, 1000);
  dt();
};
