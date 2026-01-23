const container = document.getElementById("grid");
const button = document.getElementById("squares");

button.addEventListener("click", () => {
    let size = prompt("Enter grid size (4 - 100):");

    size = Number(size);

    if (isNaN(size) || size < 4 || size > 100) {
        alert("Enter a number between 4 and 100");
        return;
    }

    grid(size);
});

function grid(size) {  
    // cell size
    const gridSize = 800
    const cellSize = gridSize / size;

    // clear old container
    container.innerHTML="";    

    for (let j = 0; j < size; j++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let i = 0; i < size; i++) {
            const cell = document.createElement("div");
            cell.className = "cell";

            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;

            // add hover behavior
            cell.addEventListener("mouseover", () => {
                
    
                if (!cell.dataset.opacity) cell.dataset.opacity = 0;
                cell.style.opacity = 0;

                if (getMode() === "color") {
                    cell.style.backgroundColor = pickColor();
                } else {
                    cell.style.backgroundColor = "black";
                }

                let opacity = parseFloat(cell.dataset.opacity);
                if (opacity >= 1) return;

                
                opacity = Math.min(1, opacity + 0.1);
                cell.dataset.opacity = opacity;
                cell.style.opacity = opacity;                          
                                
            });

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function pickColor() {
    const colors = [
        '#ff0000', '#00ff00', '#0000ff',
        '#ff3333', '#ffff00', '#ff6600'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

function getMode() {
    return document.querySelector('input[name="mode"]:checked').value;
}
