const container = document.getElementById("grid");
const button = document.getElementById("squares");
let darkeningEnabled = true;

const toggleButton = document.getElementById("toggle-darkening");

toggleButton.addEventListener("click", () => {
    darkeningEnabled = !darkeningEnabled;
    toggleButton.textContent = darkeningEnabled ? "Shading ON" : "Shading OFF";
});


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

                if (!cell.dataset.darkness) {
                    cell.dataset.darkness = 0;
                }

                let darkness = parseFloat(cell.dataset.darkness);

                if (darkeningEnabled) {
                    if (darkness >= 1) return;

                    darkness = Math.min(1, darkness + 0.1);
                    cell.dataset.darkness = darkness;
                } else {
                    // if darkening is off, set darkness to full immediately
                    darkness = 1;
                    cell.dataset.darkness = darkness;
                }
                if (getMode() === "color") {                    
                    cell.style.backgroundColor = pickRgbaColor(darkness);
                } else {
                    cell.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
                }
            });


            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function pickRgbaColor(alpha) {
    const colors = [
        '#ff0000', '#00ff00', '#0000ff',
        '#ff3333', '#ffff00', '#ff6600'
    ];

    const hex = colors[Math.floor(Math.random() * colors.length)];

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


function getMode() {
    return document.querySelector('input[name="mode"]:checked').value;
}
