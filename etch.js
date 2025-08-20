let gridSize = 256;

function hover(){
    const div = document.querySelectorAll(".grid");
    div.forEach(div => {
        div.addEventListener("mouseover", ()=>{
            div.classList.add("hovered");
        })
        div.addEventListener("mouseout", () => {
            div.classList.remove("hovered");
        })
    })
}

function gridCreate(gridSize){
    for (let i = 0; i < gridSize; i++){
    const div = document.createElement("div");
    div.setAttribute('class', 'grid');
    div.style.flexBasis = `${100/Math.sqrt(gridSize)}%`;
    container.appendChild(div);
    }
    hover();
}

const container = document.querySelector("#container");
const gridBtn = document.querySelector(".grid-size");

gridCreate(gridSize);

gridBtn.addEventListener("click", () => {
    gridSize = prompt("Enter the grid size: "); // fix to ensure input is always a number and is below 100
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    gridCreate(gridSize);
    hover();

})