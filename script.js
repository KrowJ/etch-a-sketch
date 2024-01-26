let MouseDown = false;

const containerSize = 500;
let gridSize =  16;

document.addEventListener("mousedown", () => {
  MouseDown = true;
});

document.addEventListener("mouseup", () => {
  MouseDown = false;
});


function container() {
  const container = document.getElementById("grid-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let itemSize = containerSize / gridSize;

  container.style.width = containerSize + "px";
  container.style.height = containerSize + "px";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("flex-item");
    gridItem.style.width = itemSize + "px";
    gridItem.style.height = itemSize + "px";
    container.appendChild(gridItem);

    gridItem.addEventListener("mousedown", () => {
      if (!MouseDown) {
        gridItem.style.backgroundColor = "black";
      }
    });
    gridItem.addEventListener("mousemove", () => {
      if (MouseDown) {
        gridItem.style.backgroundColor = "black";
      }
    });
  }
  addButtons()
} container()

const setGrid = document.querySelector('#set-grid-size');
setGrid.addEventListener("input", updateGridSize);

function updateGridSize() {
  gridSize = parseInt(setGrid.value);
  container();
}

function addButtons() {
const eraseBtn = document.querySelector("#erase-btn");
const resetBtn = document.querySelector("#reset-btn");
const setColor = document.querySelector(".color-picker");
const offGrd = document.querySelector('#set-off-grid');
const onGrd = document.querySelector('#set-on-grid');
const grids = document.querySelectorAll(".flex-item");
const paintBtn = document.querySelector("#paint-btn")
  
resetBtn.addEventListener("click", resetButton);
eraseBtn.addEventListener("click", eraseButton);
offGrd.addEventListener('click', offGrids);
onGrd.addEventListener('click', onGrids);
setColor.addEventListener("input", colorPicker);
paintBtn.addEventListener("click", paintButton);

function resetButton() {
  for (i = 0; i < grids.length; i++) {
  const item = grids[i];
    item.style.backgroundColor = "white";
  }
}

function eraseButton() {
  for (let i = 0; i < grids.length; i++) {
    const item = grids[i];

    item.addEventListener("mousedown", eraseMouseDownHandler);
    item.addEventListener("mousemove", eraseMouseMoveHandler);
  }

  function eraseMouseDownHandler() {
    if (!MouseDown) {
      this.style.backgroundColor = "white";
    }
  }

  function eraseMouseMoveHandler() {
    if (MouseDown) {
      this.style.backgroundColor = "white";
    }
  }
}

function paintButton() {
  colorPicker()
}

function offGrids() {
  for (i = 0; i < grids.length; i++) {
    const item = grids[i];
      item.style.border = "none";
    }
}

function onGrids() {
  for (i = 0; i < grids.length; i++) {
    const item = grids[i];
      item.style.border = "1px solid black";
    }
}

function colorPicker() {
  const setColor = document.querySelector(".color-picker");
  const coloredElement = document.querySelectorAll(".flex-item");
  let selectedColor = setColor.value;

  for (let i = 0; i < coloredElement.length; i++) {
    const item = coloredElement[i];

    item.addEventListener("mousedown", eraseMouseDownHandler);
    item.addEventListener("mousemove", eraseMouseMoveHandler);
  }

  function eraseMouseDownHandler() {
    if (!MouseDown) {
      this.style.backgroundColor = selectedColor;
    }
  }

  function eraseMouseMoveHandler() {
    if (MouseDown) {
      this.style.backgroundColor = selectedColor;
    }
  }
}
}