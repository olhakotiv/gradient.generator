var css = document.querySelector('h3'),
    color1 = document.querySelector('.color1'),
    color2 = document.querySelector('.color2'),
    body = document.getElementById('gradient'),
    style = getComputedStyle(document.body),
    random = document.getElementById('random');


css.appendChild(document.createTextNode(style.background));

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
    var a = getRandomColor();
    var b = getRandomColor();
    body.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
    css.textContent = body.style.background + ";";
    color1.setAttribute("value", a);
    color2.setAttribute("value", b);

});