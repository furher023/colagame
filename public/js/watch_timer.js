window.addEventListener("load", () => {
  var game_time = new Date("May 17, 2021 23:53:25").getTime();

  function timer() {
    var current_time = new Date().getTime();

    var time_gap = game_time - current_time;

    var days = Math.floor(time_gap / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (time_gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((time_gap % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time_gap % (1000 * 60)) / 1000);
    console.log("hii");
    document.getElementById("timerWatch").innerHTML =
      "Game Will start in  " +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";

    return time_gap;
  }

  var y = setInterval(() => {
    var x = timer();
    if (x < 0) {
      document.getElementById("timerWatch").innerHTML = "Game is started";
      clearInterval(y);
    }
  }, 1000);
});
