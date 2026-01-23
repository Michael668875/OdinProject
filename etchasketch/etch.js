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
                cell.classList.add("active");
            });

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

