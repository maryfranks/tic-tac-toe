document.addEventListener('DOMContentLoaded', function() {

  var squares = document.querySelectorAll('.square');
  var ticTacToe = document.querySelector('.tic-tac-toe');
  var turn = 0;

  ticTacToe.addEventListener('click', function(e) {
    if (e.target.classList.contains("square") && e.target.classList.contains("open")) {
      if (turn % 2 === 0) {
        e.target.style.backgroundColor = "blue";
        turn += 1;
        e.target.classList.remove("open");
      } else {
        e.target.style.backgroundColor = "red";
        turn += 1;
        e.target.classList.remove("open");
      }
    }
  });

});
