//initialize button and container div
const board = document.querySelector('#board');
const change = document.querySelector('#newBoard');
const reset = document.querySelector('#reset');
const randColors = document.querySelector('#randColors');
const grey = document.querySelector('#greyscale');
const blackandwhite = document.querySelector('#blackandwhite');

//create function to draw squares
function drawPixels(resolution) {
    //draw squares and append to container div
    for (let y = 0; y < resolution; y++) {
        //creates sub-holder divs to facilitate alignment of board to grid
        const block = document.createElement('div');
        block.classList.add('block');
        block.setAttribute('id', `b${y}`);
        board.appendChild(block);

        for (let x = 0; x < resolution; x++) {
            //populates current board with pixels
            const pix = document.createElement('div');
            pix.classList.add('pixel', 'blank');
            //allows identification of specific pixels
            pix.setAttribute('id', `p${y}x${x}`);
            block.appendChild(pix);
        }
    }
}

//create function to darken squares by adding a class
function blacken(id) {
    const self = document.querySelector(`#${id}`);
    self.classList.add('black');
    self.classList.remove('blank');
}

//draw board for first time
drawPixels(16);

//make a listener for debugging reasons
function listen() {
    blacken(this.id);
}

//set up listeners on squares
const pixels = document.querySelectorAll('.pixel');
pixels.forEach((unit) => {
    unit.addEventListener('mouseover', listen)
})
//proceed to button and prompt
