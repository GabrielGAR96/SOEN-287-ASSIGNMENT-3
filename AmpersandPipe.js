var dom;

function getElementAmpersandPipe() {
	dom = document.getElementById("field");
	dom.addEventListener("blur", convertAmpersandPipe(), false);
}

function convertAmpersandPipe() {
	var value = dom.value.replace("&", "and").replace("|", "or");
	document.getElementById("result").value = value;
}

window.addEventListener( "load", getElementAmpersandPipe, false); 