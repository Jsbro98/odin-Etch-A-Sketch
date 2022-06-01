const body = document.body;
const  gridContainer = document.createElement('div');
gridContainer.classList.add("grid-container");


const createGrid = (columns, rows) => {    
    body.appendChild(gridContainer)
    for (i = 0; i < columns; i++) {
        const div = document.createElement('div');
        div.style.cssText = "height: 50px; width: 50px; display: inline-block;";
        div.classList.add(`column-${i}`)
        gridContainer.appendChild(div);
        for (j = 0; j < rows; j++) {
            const divColumn = document.querySelector(`.column-${i}`)
            const div = document.createElement('div');
            div.style.cssText = "height: 50px; width: 50px; border: 1px solid black;"
            div.classList.add(`cell-${i}-${j}`)
            divColumn.appendChild(div);
            const cell = document.querySelector(`.cell-${i}-${j}`)
            cell.addEventListener('mouseover', (e) => {e.target.style.backgroundColor = "black"})
        }
    }
}

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.style.cssText = "height: 50px; width: 80px; border: pink solid 3px; background: salmon; color: white;";
resetButton.addEventListener('click', () => {gridContainer.remove()})
body.appendChild(resetButton)
