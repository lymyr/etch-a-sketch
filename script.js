const btn = document.querySelector("button");
const body = document.querySelector("body");
let pixels = 1280;
let maxSlices = 100;

body.setAttribute("style", "display: flex; flex-direction: column; align-items:center;")
let gridSize = 0;
btn.setAttribute("style", "padding: 9px 54px; margin:16px;");
btn.addEventListener("click", () => {
    gridSize = parseInt(prompt(`How many squares do you want per side? (max ${maxSlices})`));
    if (gridContainer.hasChildNodes()) {
        gridContainer.innerHTML = "";
    }
    addGrid();
});


gridContainer = document.createElement("div");
gridContainer.setAttribute("style", `width:${pixels}px; height:${pixels}px; background-color:lightgray; display:flex; flex-wrap:wrap;`);
body.append(gridContainer);

function addGrid() {
    if (gridSize > maxSlices) {
        boxSize = pixels/maxSlices;
    }
    else {
        boxSize = pixels/gridSize;
    }
    for (j = 0; j < gridSize && j < maxSlices; j++) {
        for (i = 0; i < gridSize && i < maxSlices; i++) {
            const box = document.createElement("div");
            box.setAttribute("style", `width:${boxSize}px; height:${boxSize}px; display:flex; justify-content:center; align-items:center; flex-shrink:0; opacity:0;`);
            // box.textContent = i+1;
            // box.addEventListener("mouseover", (e) => {
            //     e.target.style.transition = "0.2s";
            //     e.target.style.backgroundColor = "yellow";
            // });
            box.addEventListener("mouseover", (e) => {
                e.target.style.transition = "0.2s";
                e.target.style.backgroundColor = "rgb(74, 247, 242)";
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            });
            // box.addEventListener("mouseout", (e) => {
            //     e.target.style.transition = "0.05s";
            //     e.target.style.backgroundColor = "";
            // });
            gridContainer.append(box);
        }
    }
}