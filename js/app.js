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

  const squares = document.querySelectorAll(".square");
  let opacity = 0.1;
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      square.style.opacity = opacity;
      if (opacity < 1) {
        opacity = opacity + 0.1;
      } else {
        opacity = 1;
      }
      square.style.backgroundColor = randomColor;
    });
  });
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
  if (numSquares > 100) {
    numSquares = 100;
    alert("Maximum number of squares per side is 100.");
  }
  createGrid(numSquares);
});

createGrid(numSquares);
