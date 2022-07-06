var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");




//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
    deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
function toggle(){
var list = document.getElementsByTagName("li");
for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liClick);
}
}
function liClick(){
  this.classList.toggle("done");
}

toggle();

//adding new items:

function inputLength(){
    return input.value.length;
}

function createListElement() {
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(btn);

    ul.appendChild(li);
    input.value="";
    toggle();
}


function addToListAfterClick(){
    if(inputLength() > 0){
            createListElement();
        }
}

function addToListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);