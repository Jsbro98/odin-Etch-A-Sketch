const  gridContainer = document.createElement('div');
gridContainer.classList.add("grid-container");
const gridWrapper = document.querySelector('.grid-wrapper');
const inputButtonContainer = document.querySelector('.input-button-container');


const createGrid = (columns, rows, color) => {    
    gridWrapper.appendChild(gridContainer)
    for (i = 0; i < columns; i++) {
        const div = document.createElement('div');
        div.style.cssText = "height: 50px; width: 50px; display: inline-block;";
        div.setAttribute('id', `column-${i}`);
        gridContainer.appendChild(div);
        for (j = 0; j < rows; j++) {
            const divColumn = document.querySelector(`#column-${i}`);
            const div = document.createElement('div');
            div.style.cssText = "height: 50px; width: 50px; border: 1px solid black;";
            div.setAttribute('id', `cell-${i}-${j}`);
            divColumn.appendChild(div);
            const cell = document.querySelector(`#cell-${i}-${j}`);
            cell.addEventListener('mouseover', (e) => {e.target.style.backgroundColor = `${color}`});
        }
    }
}
const resetAll = (e) => {
    const columns = document.querySelectorAll('[id*="column"]');
    const cells = document.querySelectorAll('[id*="cell"]');
    cells.forEach(index => index.removeAttribute('id'));
    cells.forEach(index => index.remove());
    columns.forEach(index => index.removeAttribute('id'));
    columns.forEach(index => index.remove());
    gridContainer.remove();

}


const resetButton = document.createElement('button');
resetButton.classList.add("reset-button");
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetAll);
inputButtonContainer.appendChild(resetButton);

const readAndCreateFromUserInput = () => {
let rowValue;
let columnValue;
let colorValue;

    (function readUserInput() {
        const rowInput = document.querySelector('.rows-input');
        const columnInput = document.querySelector('.columns-input');
        const colorInput = document.querySelector('.color-input');
        
        colorValue = colorInput.value;
        rowValue = rowInput.value;
        columnValue = columnInput.value;
        return rowValue, columnValue, colorValue;
    }) ();

    resetAll();

    createGrid(columnValue, rowValue, colorValue);
}

const submit = document.getElementById("submit");
submit.addEventListener('click', readAndCreateFromUserInput);