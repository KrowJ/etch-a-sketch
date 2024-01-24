let MouseDown = false;

document.addEventListener("mousedown", () => {
  MouseDown = true;
});

document.addEventListener("mouseup", () => {
  MouseDown = false;
});

function container() {
  const container = document.getElementById("grid-container");
  const containerSize = 600;
  const gridSize = 16;

  const itemSize = containerSize / gridSize;

  container.style.width = containerSize + "px";
  container.style.height = containerSize + "px";

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("flex-item");
    gridItem.style.width = itemSize + "px";
    gridItem.style.height = itemSize + "px";
    container.appendChild(gridItem);

    gridItem.addEventListener("mousemove", () => {
      if (MouseDown) {
        gridItem.style.backgroundColor = "black";
      }
    });

    gridItem.addEventListener("mousedown", () => {
      if (!MouseDown) {
        gridItem.style.backgroundColor = "black";
      }
    });
  }
}

container();

const eraseBtn = document.querySelector("#erase-btn");
const resetBtn = document.querySelector("#reset-btn");
const grids = document.querySelector(".flex-item");

resetBtn.addEventListener("click", resetButton);

function resetButton() {
  const grids = document.querySelectorAll(".flex-item");
  grids.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

eraseBtn.addEventListener("click", eraseButton);

function eraseButton() {
  const grids = document.querySelectorAll(".flex-item");
  eraseBtn.classList.toggle("toggled");
  if (eraseBtn.classList.contains("toggled")) {
    grids.forEach((item) => {
      item.addEventListener("mousedown", () => {
        if (!MouseDown) {
          item.style.backgroundColor = "white";
        }
      });
      item.addEventListener("mousemove", () => {
        if (MouseDown) {
          item.style.backgroundColor = "white";
        }
      });
    });
    console.log("Button is toggled");
  } else {
    grids.forEach((item) => {
      item.addEventListener("mousedown", () => {
        if (!MouseDown) {
          item.style.backgroundColor = "black";
        }
      });
      item.addEventListener("mousemove", () => {
        if (MouseDown) {
          item.style.backgroundColor = "black";
        }
      });
    });
    console.log("Button is not toggled");
  }
}
