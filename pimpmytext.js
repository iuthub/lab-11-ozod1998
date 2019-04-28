var textArea = document.getElementById("text");
var checkBox = document.getElementById("ch1");

function buttonclick() {
	//document.getElementsByClassName("");
	textArea.style.fontSize = "24pt";
	textArea.style.color = "red";
}

function checkboxclick() {
	if(ch1.checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "green";
		textArea.style.textDecoration = "underline";
		textArea.style.fontFamily = "Verdana";
	}
	else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
		textArea.style.fontFamily = "Times New Roman";
	}
}

function button2click() {
	var txt = textArea.value;
	var arr = txt.toUpperCase().split(".");
	arr.forEach(function(element) {
		element = element.concat();
	});
	textArea.value = arr.join("-izzle!");
}