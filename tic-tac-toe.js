
document.addEventListener("DOMContentLoaded", function() {

    var squares = document.querySelectorAll("#board div");
    var status = document.getElementById("status");
    var newGame = document.querySelector(".btn");

    var originalMessage = status.textContent;
    var currentPlayer = "X";
    var board = ["", "", "", "", "", "", "", "", ""];
    var gameOver = false;

    var winningMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner() {

        for (var i = 0; i < winningMoves.length; i++) {
            var a = winningMoves[i][0];
            var b = winningMoves[i][1];
            var c = winningMoves[i][2];

            if (board[a] == currentPlayer &&
                board[b] == currentPlayer &&
                board[c] == currentPlayer) {

                status.textContent = "Congratulations! " +
                    currentPlayer + " is the Winner!";

                status.classList.add("you-won");
                gameOver = true;
                return;
            }
        }
    }

    squares.forEach(function(square, index) {

        square.classList.add("square");

        square.addEventListener("click", function() {

            if (gameOver) {
                return;
            }

            this.textContent = currentPlayer;
            this.classList.add(currentPlayer);

            board[index] = currentPlayer;

            checkWinner();

            if (currentPlayer == "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

        square.addEventListener("mouseenter", function() {
            this.classList.add("hover");
        });

        square.addEventListener("mouseleave", function() {
            this.classList.remove("hover");
        });

    });

    newGame.addEventListener("click", function() {

        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

        for (var i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
            squares[i].classList.remove("X", "O", "hover");
        }

        status.textContent = originalMessage;
        status.classList.remove("you-won");

    });

});
