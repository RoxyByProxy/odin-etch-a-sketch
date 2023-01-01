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
    for (let x = 0; x < resolution; x++) {
        const pix = document.createElement('div');
        pix.classList.add('pixel', 'blank');
        //allows identification of specific pixels
        pix.setAttribute('id', x);
        board.appendChild(pix);
    }
}

//create function to darken squares by adding a class
function blacken(id) {
    const self = document.querySelector('#' + id);
    self.classList.add(black);
}
//set up listeners on squares
//proceed to button and prompt