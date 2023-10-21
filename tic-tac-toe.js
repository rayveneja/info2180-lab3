document.addEventListener('DOMContentLoaded', function () {
    const sq = document.querySelectorAll('#board > div');
    let currentPlayer = 'X';
    
    sq.forEach(function (square) {
        square.classList.add('square');
        // question 2

        square.addEventListener('click', function(){
            if(!square.classList.contains('X') && !square.classList.contains('O')){
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;
                if(currentPlayer === 'X'){
                    currentPlayer = 'O';
                }else{
                    currentPlayer = 'X';
                }
            }
        });

    });
});
