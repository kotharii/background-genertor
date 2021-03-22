var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
body.style.background ="radial-gradient("+ 
color1.value + ", " + color2.value + ")";

h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var button = document.querySelector("#random");

var numbers= "0123456789ABCDEF"; 
var colora = "#";
var colorb = "#";
function setrandomcolor(){
	for(var i=0; i<6; i++){
	colora = colora + numbers[(Math.floor(Math.random() * 16))];
	colorb = colorb + numbers[(Math.floor(Math.random() * 16))];
	}
	color1.value = colora;
	color2.value = colorb;
	colora="#";
	colorb="#";
	setGradient();
}
button.addEventListener("click", setrandomcolor);