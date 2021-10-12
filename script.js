let container = document.querySelector(".container");

function createGrid(num){
for (let index = 0; index < num; index++) {
    let element = document.createElement("DIV");
    
    element.setAttribute("class", "individualSquare");
    element.addEventListener("mouseover", changeColour = () => {element.style = "background-color: red"});
    container.appendChild(element);
    
}

}



createGrid(16*16);
    
