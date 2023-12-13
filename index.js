
function addToList() {
let inputValue = document.getElementById("itemInput").value;
console.log(inputValue);
if (inputValue.trim() !== "") {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = inputValue;


li.addEventListener('click', function() {
    this.remove();
});

ul.appendChild(li);
document.getElementById("itemInput").value = "";
}
}

let buttonClick = document.getElementById("addButton")
buttonClick.addEventListener('click', addToList)
