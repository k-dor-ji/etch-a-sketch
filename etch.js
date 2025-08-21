let gridSize = 256;
let currentColor = "black";
let generateRandomColor = false;
let gridUpperLimit = 256;
let gridLowerLimit = 2;

function hover(){
    let isMouseDown = false;

    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    document.querySelectorAll(".grid").forEach(div => {
        div.addEventListener("mouseover", () => {
            div.classList.add("hovered");
      if (isMouseDown) {
        div.classList.add("clicked");
        if(generateRandomColor){
            currentColor =`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }
        div.style.backgroundColor = currentColor; // paint-on-hover while held
      }
    });
    div.addEventListener("mousedown", () => {
      div.classList.add("clicked"); // immediate press
      if(generateRandomColor){
            currentColor =`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }
        div.style.backgroundColor = currentColor;
    });
    div.addEventListener("mouseout", () => {
      div.classList.remove("hovered");
    });
  });
}

function gridCreate(gridSize){
    for (let i = 0; i < gridSize; i++){
    const div = document.createElement("div");
    div.setAttribute('id', `pixel-${i}`);
    div.setAttribute('class', 'grid');
    div.style.flexBasis = `${100/Math.sqrt(gridSize)}%`;
    container.appendChild(div);
    }
    hover();
}

const container = document.querySelector("#container");
const gridBtn = document.querySelector(".grid-size");
const randomColorBtn = document.querySelector(".randomColorButton");

gridCreate(gridSize);

gridBtn.addEventListener("click", () => {
    let gridValue = false;
    while(!gridValue){
        gridSize = prompt("Enter the grid size: "); // fix to ensure input is always a number and is below 100
        if(gridSize > gridUpperLimit || gridSize < gridLowerLimit){
            alert("Please enter a value between 2 and 100")
        }else{
            gridValue = true;
        }
    }
    
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    gridCreate(gridSize);
    hover();

})

randomColorBtn.addEventListener("click", ()=> {
    generateRandomColor = true;
})

