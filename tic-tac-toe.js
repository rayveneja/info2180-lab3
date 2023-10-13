document.addEventListener('DOMContentLoaded', function () {
    const sq = document.querySelectorAll('#board > div');
    sq.forEach(function (square) {
        square.classList.add('square');
    });

});
