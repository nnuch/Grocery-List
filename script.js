var button = document.getElementById("buttonAdd");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}


// Create the LI list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);	
	input.value = "";
	toggleClass(li);	

}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement()
	} else {
		alert("Please, input your item!");
	}
}


function addListAfterKeypress(event) {
	// console.log(event); //How to check the keyCode!

	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	} 
}


// Toggles the .done class on click
function toggleClass(li) {
    li.addEventListener("click", function(){
        li.classList.toggle("done");
    })
}


// Adds the toggle (the done class) on the li element
function addClassToLi() {
    li.forEach(toggleClass);
}


// Changing Styles
button.style.color = "white";


// Toggle the 'done' class
addClassToLi();

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)


