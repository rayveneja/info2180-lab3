document.addEventListener('DOMContentLoaded', function () {
    let currentPlayer = 'X';
  
    function checkForWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let line of lines) {
        const [a, b, c] = line;
        if (
          squares[a].classList.contains('X') &&
          squares[b].classList.contains('X') &&
          squares[c].classList.contains('X')
        ) {
          document.getElementById('status').textContent = 'Congratulations! X is the Winner!';
          document.getElementById('status').classList.add('you-won');
          return;
        } else if (
          squares[a].classList.contains('O') &&
          squares[b].classList.contains('O') &&
          squares[c].classList.contains('O')
        ) {
          document.getElementById('status').textContent = 'Congratulations! O is the Winner!';
          document.getElementById('status').classList.add('you-won');
          return;
        }
      }
    }
  
    const squares = document.querySelectorAll('#board > div');
    const newGameButton = document.querySelector('.btn');
  
    squares.forEach(function (square) {
      square.classList.add('square');
      square.addEventListener('click', function () {
        if (!square.classList.contains('X') && !square.classList.contains('O')) {
          square.classList.add(currentPlayer);
          square.textContent = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          checkForWinner();
        }
      });
  
      square.addEventListener('mouseenter', function () {
        square.classList.add('hover');
      });
  
      square.addEventListener('mouseleave', function () {
        square.classList.remove('hover');
      });
    });
  
    newGameButton.addEventListener('click', function () {
      squares.forEach(function (square) {
        square.classList.remove('X', 'O');
        square.textContent = '';
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won');
        currentPlayer = 'X';
      });
    });
  });
  