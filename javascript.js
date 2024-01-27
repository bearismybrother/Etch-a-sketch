const size = 16; 

const grid = document.querySelector('.Grid');

mouseDown = false; 

for (let step = 0; step < size*size; step++) {
    
    const square = document.createElement('div');
    square.classList.add('box');


    square.addEventListener('mouseenter', () => {
        if (mouseDown)
            square.classList.add('painted');   
        else 
            square.classList.add('hover');
      });

    square.addEventListener('mouseleave', () => {
        square.classList.remove('hover');
    });

    square.addEventListener('mousedown', () => {
        square.classList.add('painted'); 
        mouseDown = true; 
    });

    square.addEventListener('mouseup', () => {
        mouseDown = false; 
    });
    grid.appendChild(square);
  }

  const colors = ['red', 'blue', 'green'];

  const colorButton = document.querySelector('.colorButton');
  colorButton.onclick = () => alert(nextColor());

    i = 0; 
  function nextColor(){
    if (i<2)
        {
            i++; 
            return colors[i];
        }
    else 
        {
            i=0;
            return colors[i];
        }
  }


  const eraser = document.querySelector('eraser');
  eraser.onclick = () => {
    eraseMode = true;
  }

  


  






