//variables
    let container = document.querySelector(".container");
    //rainbow mode off initially
    let rainbow = false;    
    //default brush colour    
    let brush = document.getElementById("colorPick").value;
    defaultValue = `background-color: ${brush};`;
    //eraser colour
    let eraserValue = `background-color: rgb(216, 212, 212);`;
    let eraser = false;

//event listeners
    document.getElementById("restart").addEventListener("click", resetPage = () => {window.location.reload();});
    document.getElementById("rainbowPick").addEventListener("click", rainbowToggle);
    document.getElementById("eraserPick").addEventListener("click", eraserToggle);
    document.getElementById("colorPick").addEventListener("input" , changeBrush);

//Function to create the drawing screen

    function createGrid(rows, columns){
        // Updates CSS variables for columns/rows
        container.style.setProperty("--grid-rows", rows);
        container.style.setProperty("--grid-cols", columns);
        // Loop to create rows/columns and attach to the grid container
        for (let index = 0; index < (rows*columns); index++) {
            let element = document.createElement("DIV");    
            element.setAttribute("class", "innerDiv");
            element.addEventListener("mouseover", changeColour = () => {element.style = defaultValue})   
            container.appendChild(element);    
        }        
    }

//slider code

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value * slider.value; // Display the slider value
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {output.innerHTML = this.value * this.value;};

//rainbow mode toggle

    function rainbowToggle(){
        if (rainbow) {
            rainbow = false;             
            console.log("rainbow:" + rainbow);
            let defaultValue = `background-color: black;`
            //make a loop to make drawing black from now on
            let div = document.querySelectorAll(".innerDiv");
            for (let index = 0; index < div.length; index++) {
                const element = div[index];
                element.addEventListener("mouseover", changeColour = () => {element.style = defaultValue})            
            }
        }
        else{
            rainbow = true;             
            console.log("rainbow" + rainbow)
            let div = document.querySelectorAll(".innerDiv");
            // defaultValue = rainbowValue;
            for (let index = 0; index < div.length; index++) {
                const element = div[index];
                let random1 = Math.floor((Math.random() * 255) + 1);
                let random2 = Math.floor((Math.random() * 255) + 1);
                let random3 = Math.floor((Math.random() * 255) + 1);
                let rainbowValue = `background-color: rgb(${random1}, ${random2}, ${random3})`;                  
                element.addEventListener("mouseover", changeColour = () => {element.style = rainbowValue;});           
                                           
            }            
        }
    }

//eraser mode toggle

    function eraserToggle(){    
        if (eraser) 
        {
            if (rainbow) 
            {
                eraser = false; 
                console.log("eraser2:" + eraser);
                //make a loop to make drawing black from now on
                let div = document.querySelectorAll(".innerDiv");
                for (let index = 0; index < div.length; index++) 
                {
                    const element = div[index];
                    let random1 = Math.floor((Math.random() * 255) + 1);
                    let random2 = Math.floor((Math.random() * 255) + 1);
                    let random3 = Math.floor((Math.random() * 255) + 1);
                    let rainbowValue = `background-color: rgb(${random1}, ${random2}, ${random3})`;                  
                    element.addEventListener("mouseover", changeColour = () => {element.style = rainbowValue;});            
                }
            }
            else
            {
                eraser = false; 
                console.log("eraser2:" + eraser);
                //make a loop to make drawing black from now on
                let div = document.querySelectorAll(".innerDiv");
                for (let index = 0; index < div.length; index++) 
                {
                    const element = div[index];
                    element.addEventListener("mouseover", changeColour = () => {element.style = defaultValue});            
                }    
            }
        }       
        else    
        {
            eraser = true; 
            console.log("eraser3" + eraser)
            let div = document.querySelectorAll(".innerDiv");
            for (let index = 0; index < div.length; index++) 
            {
                const element = div[index];
                element.addEventListener("mouseover", changeColour = () => {element.style = eraserValue;})            
            }
        }
    }
    
//initialising function
let size = slider.value;
createGrid(size, size);

//function for when brush color is changed
 function changeBrush()
{    
    let div = document.querySelectorAll(".innerDiv");
    for (let index = 0; index < div.length; index++) 
    {    
    let brush = document.getElementById("colorPick").value;
    defaultValue = `background-color: ${brush};`
    div[index].addEventListener("mouseover", changeColour = () => {div[index].style = defaultValue})                  
    console.log("background blank")
    }
}