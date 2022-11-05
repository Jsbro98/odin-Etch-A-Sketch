const  gridContainer = document.createElement('div');
gridContainer.classList.add("grid-container");
const gridWrapper = document.querySelector('.grid-wrapper');
const inputButtonContainer = document.querySelector('.input-button-container');
const eraserToggle = document.querySelector('.eraser-toggle');

let mouseDown = 0;
let mouseInGrid = false;

const makeEraserInactive = function() {
    mouseDown = 0;

    eraserToggle.style.backgroundColor = "red";
    eraserToggle.textContent = "Eraser Inactive";
};

const makeEraserActive = function() {
    mouseDown = 1;

    eraserToggle.style.backgroundColor = "green";
    eraserToggle.textContent = "Eraser Active";
};

document.body.onmousedown = makeEraserActive
document.body.onmouseup = makeEraserInactive

gridWrapper.addEventListener('mouseenter', () => {mouseInGrid = true});
gridWrapper.addEventListener('mouseleave', () => {
    mouseInGrid = false; if (mouseDown === 1) {
        makeEraserInactive();
    };
});


const createGrid = (columns, rows) => {    
    gridWrapper.appendChild(gridContainer)
    const colorInput = document.querySelector('.color-input');

    if (columns > 28 || rows > 50) {
        return alert("Error, please choose a smaller grid")
    };
    for (i = 0; i < columns; i++) {
        const div = document.createElement('div');
        div.style.cssText = "height: 45px; width: 45px; display: inline-block;";
        div.setAttribute('id', `column-${i}`);
        gridContainer.appendChild(div);
        for (j = 0; j < rows; j++) {
            const divColumn = document.querySelector(`#column-${i}`);
            const div = document.createElement('div');
            if (j === rows - 1) {
                div.style.cssText = "height: 45px; width: 45px; background: white; margin-bottom: 20px;";
            } else {
                div.style.cssText = "height: 45px; width: 45px; background: white;";
            }
            div.setAttribute('id', `cell-${i}-${j}`);
            divColumn.appendChild(div);
            const cell = document.querySelector(`#cell-${i}-${j}`);
            cell.addEventListener('mouseover', (e) => {e.target.style.backgroundColor = `${colorInput.value}`});
            cell.addEventListener('mouseover', (e) => { if (mouseDown) {e.target.style.backgroundColor = 'white'}});
            cell.addEventListener('ondragstart', () => {return false});
            
    };
};
};
const resetAll = (e) => {
    const columns = document.querySelectorAll('[id*="column"]');
    const cells = document.querySelectorAll('[id*="cell"]');
    cells.forEach(index => index.removeAttribute('id'));
    cells.forEach(index => index.remove());
    columns.forEach(index => index.removeAttribute('id'));
    columns.forEach(index => index.remove());
    gridContainer.remove();

};


const resetButton = document.createElement('button');
resetButton.classList.add("reset-button");
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetAll);
inputButtonContainer.appendChild(resetButton);

const readAndCreateFromUserInput = () => {
let rowValue;
let columnValue;

    (function readUserInput() {
        const rowInput = document.querySelector('.rows-input');
        const columnInput = document.querySelector('.columns-input');
        
        rowValue = rowInput.value;
        columnValue = columnInput.value;
        return rowValue, columnValue;
    }) ();

    resetAll();

    createGrid(columnValue, rowValue);
};

const submit = document.getElementById("submit");
submit.addEventListener('click', readAndCreateFromUserInput);