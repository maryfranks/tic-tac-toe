document.addEventListener('DOMContentLoaded', function() {

  var squares = document.querySelectorAll('.square');
  var ticTacToe = document.querySelector('.tic-tac-toe');
  var playerOneGo = document.querySelector('#player-one');
  var playerTwoGo = document.querySelector('#player-two');
  var turn = 0;

  ticTacToe.addEventListener('click', function(e) {
    if (e.target.classList.contains("square") && e.target.classList.contains("open")) {
      if (turn % 2 === 0) {
        e.target.style.backgroundImage = "url(images/xmark.png)";
        turn += 1;
        e.target.classList.remove("open");
        playerOneGo.style.display = "none"
        playerTwoGo.style.display = "inherit"
      } else {
        e.target.style.backgroundImage = "url(images/omark.png)";
        turn += 1;
        e.target.classList.remove("open");
        playerTwoGo.style.display = "none"
        playerOneGo.style.display = "inherit"
      }
    }
  });

});
