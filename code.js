var showanswer = document.getElementById("disp");

var expression = "";
var signs = document.getElementsByClassName("sign");
for(var i = 0; i < signs.length; i++) {
    signs[i].onclick = function() {
        if(expression !== "") {
            expression += this.value;
            showanswer.innerHTML = expression; // Update the display with the current expression
        }
    }
}

var numbers = document.getElementsByClassName("number");
for(var i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function() {
        expression += this.value;
        showanswer.innerHTML = expression; // Update the display with the current expression
    }
}
var total=0,temp=0;
document.getElementById("nu").onclick = function() {
    try {
        var total = eval(expression);
        showanswer.innerHTML = total;
        expression = ""; // Update the expression with the calculated total
    } catch(e) {
        showanswer.innerHTML = "Error";
        expression = "";
    }
}