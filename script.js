let MouseDown = false;

document.addEventListener('mousedown', () => {
  MouseDown = true;
});

document.addEventListener('mouseup', () => {
  MouseDown = false;
});
 
 function container() {
 // JavaScript code to dynamically create a grid
  const container = document.getElementById("grid-container");
  const containerSize = 600; // Set the initial size of the container (adjust as needed)
  const gridSize = 16;

  // Calculate the size of each grid item based on the container size and desired grid size
  const itemSize = containerSize / gridSize; 

  // Set the container size
  container.style.width = containerSize + 'px';
  container.style.height = containerSize + 'px';

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("flex-item");
    gridItem.style.width = itemSize + 'px';
    gridItem.style.height = itemSize + 'px';
    container.appendChild(gridItem);

    // Change background when hover with mouse
    gridItem.addEventListener('mousemove', () => {
        if (MouseDown) {
          gridItem.style.backgroundColor = 'black'; // Change the color to black when mouse is down
        } 
      });

      gridItem.addEventListener('mousedown', () => {
        if (!MouseDown) {
          gridItem.style.backgroundColor = 'black'; // Change the color to black when mouse is down
        }
      });
  }
 }
  
 container()

 const eraseBtn = document.querySelector('#erase-btn');
 const resetBtn = document.querySelector('#reset-btn');
 const grids = document.querySelector('.flex-item');

 resetBtn.addEventListener('click', resetButton)

 function resetButton() {
    const grids = document.querySelectorAll('.flex-item');
    grids.forEach(item => {
        item.style.backgroundColor = 'white';
    })
}

eraseBtn.addEventListener('click', eraseButton);

function eraseButton() {
    const grids = document.querySelectorAll('.flex-item');

      // Toggle the 'toggled' class on the button
    eraseBtn.classList.toggle('toggled');

    // If the button is toggled, do something
    if (eraseBtn.classList.contains('toggled')) {
      // Add your toggle behavior here
      grids.addEventListener('mousedown', (e) => {
       
        e.style.backgroundColor = 'white'; // Change the color to black when mouse is down
      
    });
      console.log('Button is toggled');
    } else {
      // Add your untoggle behavior here
      console.log('Button is not toggled');
    }

}
