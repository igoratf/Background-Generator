var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg-gradient");


(function setDefaultBackground() {
    body.style.background = "linear-gradient(to right, #ff0000, #ffff00)";
    css.textContent = body.style.background + ";";
})()

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

function changeBackground() {
    body.style.background =
     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

     css.textContent = body.style.background + ";";
}
