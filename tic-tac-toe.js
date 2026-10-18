
document.addEventListener("DOMContentLoaded", function() {

    var squares = document.querySelectorAll("#board div");

    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }

});
