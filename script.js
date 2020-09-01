var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listLi = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("X"));
	delButton.classList.add("delBtn")
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(delButton);
	//li.appendChild(document.createTextNode( <button class="Delete">Delete</button>));
	ul.appendChild(li);
	input.v1alue = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markListItem(ev){
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	  }
}

for (i = 0; i < listLi.length; i++) {
	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("X"));
	delButton.classList.add("delBtn")
	listLi[i].appendChild(delButton);
  }

function deleteListItem(event){
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.style.display = "none";
	  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//New one
ul.addEventListener("click", markListItem, false);

//old one
// ul.addEventListener("click", function(ev) {
// 	if (ev.target.tagName === "LI") {
// 		  ev.target.classList.toggle("done");
// 		}
// 	  }, false);

ul.addEventListener("click", deleteListItem, false);
