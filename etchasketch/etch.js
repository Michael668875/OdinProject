function grid() {
    const container = document.getElementById("grid");

    for (let j = 0; j < 16; j++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let i = 0; i < 16; i++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

grid();
