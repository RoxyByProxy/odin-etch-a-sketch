//initialize button and container div
const board = document.querySelector('#board');
const change = document.querySelector('#newBoard');
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
            pix.classList.add('pixel', 'clear');
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
    self.classList.remove('clear');
}
function clear(id) {
    const self = document.querySelector(`#${id}`);
    self.classList.add('clear');
    self.classList.remove('black');
}

//draw board for first time
drawPixels(16);

//make a listener for debugging reasons
function listenIn() {
    blacken(this.id);
}
function listenOut() {
    const identify = this.id;
    setTimeout(clear, 5000, identify);
}
//set up listeners on squares
const pixels = document.querySelectorAll('.pixel');
pixels.forEach((unit) => {
    unit.addEventListener('mouseover', listenIn)
})
pixels.forEach((unit) => {
    unit.addEventListener('mouseout', listenOut)
})
//proceed to button and prompt
