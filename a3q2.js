function validateVariable(argument) {
	// body...
	for (var i = 0; i < elements.length; i++) {
		if(argument == elements[i]) return false; 
	}
	if ((/^[a-z]\w*$/).test(argument)) return true;
	else return false;
}

var elements = new Array();

function addVariable() {
	// body...
	var argument = document.getElementById("variable").value;
	if(validateVariable(argument)){
		elements.push(argument);
		var node = document.createElement("LI");
		var textNode = document.createTextNode(document.getElementById("variable").value);
		node.appendChild(textNode);
		document.getElementById("list").appendChild(node);
		document.getElementById("variable").className = "";
	}else{
		document.getElementById("variable").className = "error";
	}
}