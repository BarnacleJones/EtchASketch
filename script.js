

//variables
let container = document.querySelector(".container");


//event listeners
document.getElementById("restart").addEventListener("click", resetPage = () => {window.location.reload();});

//Function to create the grid for drawing
function createGrid(rows, columns){

    // Updates CSS variables for columns/rows
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", columns)

    // Loop to create rows/columns and attach to the grid container
    for (let index = 0; index < (rows*columns); index++) {
        let element = document.createElement("DIV");    
        element.setAttribute("class", "innerDiv");
        element.addEventListener("mouseover", changeColour = () => {element.style = "background-color: red"});
        container.appendChild(element);    
    }
}

//initial setup
let size = prompt("How many squares (<100) on each side?");
while (size>100) {
    let size = prompt("Read the instructions. How many squares (<100) on each side?")
    if (size<=100) {
        break;        
    }}
createGrid(size, size)