const artboard = document.getElementById("artboardContainer");
const eraser = document.getElementById("eraser");
const black = document.getElementById("currentColor");
const clear = document.getElementById("clear");
const btns = document.querySelectorAll(".tool-btn");

const createGrid = function (rows, cols) {
  artboard.style.setProperty("--grid-rows", rows);
  artboard.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "grid-squares");
    artboard.appendChild(cell);
  }
};

createGrid(16, 16);

let pixel = document.querySelectorAll(".grid-squares");
let activeBtn = "black";

black.addEventListener("click", function () {
  eraser.classList.remove("active");
  black.classList.add("active");
  activeBtn = "black";
});

eraser.addEventListener("click", function () {
  black.classList.remove("active");
  eraser.classList.add("active");
  activeBtn = "eraser";
});

clear.addEventListener("click", function () {
  pixel.forEach((element) => {
    element.style.setProperty("background-color", "initial");
  });
});

pixel.forEach((element) => {
  element.addEventListener("click", function () {
    if (activeBtn === "black") {
      element.style.setProperty("background-color", "black");
    } else if (activeBtn === "eraser") {
      element.style.setProperty("background-color", "initial");
    }
  });
});
