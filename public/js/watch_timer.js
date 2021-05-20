window.addEventListener("load", () => {
  var get_time = document.getElementById("team_time").innerText;

  var game_time = new Date(get_time).getTime();

  function timer() {
    var current_time = new Date().getTime();

    var time_gap = game_time - current_time;

    var days = Math.floor(time_gap / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (time_gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((time_gap % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time_gap % (1000 * 60)) / 1000);
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

    function toggleStartButton() {
      if (time_gap <= 0) {
        document
          .getElementById("start_gameButton")
          .classList.remove("disabled");
      } else {
        document.getElementById("start_gameButton").classList.add("disabled");
      }
    }

    toggleStartButton();
    return time_gap;
  }

  var y = setInterval(() => {
    var x = timer();
    if (x < 0) {
      document.getElementById("timerWatch").innerHTML = "Game is started";
      var gameId='01';
          var round=1;
          var data ={
            gameId: gameId,
            round: round
          }
          console.log(data);
          $.ajax({
            type:'POST',
            url:'/updateRound',
            data: {
              data: JSON.stringify(data)
            },
            success: function(result){
              console.log("Done")
            }
          });
      clearInterval(y);
    }
  }, 1000);
});
