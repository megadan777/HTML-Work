let gridContainer = document.querySelector('.grid');

let rowtot = 16;
let celltot = rowtot * rowtot;

gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;

let row = 1;
let column = 1;
for (let i = 1; i <= celltot; i++) {
  let cell = document.createElement('div');
  cell.style.border = '1px solid black';
  cell.style.gridRow = row;
  cell.style.gridColumn = column;
  cell.textContent = i;
  column += 1;
  if (column === rowtot + 1) {
    row += 1;
    column = 1;
  }
  gridContainer.appendChild(cell);
}


var color = [, "#3C9EE7", "#E7993C",
			"#E73C99", "#3CE746", "#E7993C"];

document.querySelector("div").addEventListener(
	"mouseover", function () {

		document.querySelector("div").style.background
			= color[(Math.floor(Math.random() * color.length))];
	})
