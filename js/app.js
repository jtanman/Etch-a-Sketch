let numSquares = 16;

const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(numSquares) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < numSquares; i++) {
    const row = createRow(numSquares);
    grid.appendChild(row);
  }
  container.appendChild(grid);
}

function createRow(numSquares) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
  return row;
}

button.addEventListener("click", () => {
  const grid = document.querySelector(".grid");
  container.removeChild(grid);
  numSquares = prompt("Enter the number of squares per side:");
  createGrid(numSquares);
});

createGrid(numSquares);
