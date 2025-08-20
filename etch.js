 const container = document.querySelector("#container");
let gridSize = 256;
for (let i = 0; i < gridSize; i++){
    const div = document.createElement("div");
    div.setAttribute('class', 'grid');
    container.appendChild(div);
    console.log(div);
}