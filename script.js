const createGrid = (columns, rows) => {
    for (i = 0; i < columns; i++) {
        const gridContainer = document.querySelector('.grid-container');
        const div = document.createElement('div');
        div.style.cssText = "height: 50px; width: 50px; display: inline-block;";
        div.classList.add(`column-${i}`)
        gridContainer.appendChild(div);
        for (j = 0; j < rows; j++) {
            const divColumn = document.querySelector(`.column-${i}`)
            const div = document.createElement('div');
            div.style.cssText = "height: 50px; width: 50px; border: 1px solid black;"
            div.classList.add("cell")
            divColumn.appendChild(div);
        }
    }
}
