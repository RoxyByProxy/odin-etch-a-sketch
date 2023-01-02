//initialize button and container div
const board = document.querySelector('#board');
const change = document.querySelector('#newBoard');
const randColors = document.querySelector('#randColors');
const grey = document.querySelector('#greyscale');

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
            //facilitate darken feature
            pix.setAttribute('data-opacity', 0)
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
function color(id) {
    const self = document.querySelector(`#${id}`);
    self.classList.add('color');
    self.classList.remove('clear');
    self.style.backgroundColor = ('rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')');
}
function darken(id) {
    const self = document.querySelector(`#${id}`);
    self.classList.add('dark');
    self.classList.remove('clear');
    const opacity = ((self.getAttribute('data-opacity') * 10) + 1) / 10;
    self.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    self.setAttribute('data-opacity', opacity);
}
function clear(id) {
    const self = document.querySelector(`#${id}`);
    self.classList.add('clear');
    self.classList.remove('black', 'color', 'dark');
    self.style.backgroundColor = '';
    self.setAttribute('data-opacity', 0);
}

//make a listener for debugging reasons
function listenIn() {
    blacken(this.id);
}
function listenOut() {
    const identify = this.id;
    setTimeout(clear, 5000, identify);
}

//set up listeners on squares
function eventListeners(style = '0') {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((unit) => {
        if (style === 'darken') {
            unit.addEventListener('mouseover', () => {
                darken(unit.id);
            })
        }
        else if (style === 'colors') {
            unit.addEventListener('mouseover', () => {
                color(unit.id);
            })
        }
        else {
            unit.addEventListener('mouseover', listenIn)
        }
    })
    pixels.forEach((unit) => {
        unit.addEventListener('mouseout', listenOut)
    })
}

//initalize board
drawPixels(16);
eventListeners();

//proceed to button and prompt
//clear existing grid with function
function boardClear() {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((unit) => {
        board.removeChild(unit);
    })
}

//function to prompt user for grid size
function buttonPrompt(style = '0') {
    let size = parseInt(prompt('What scale would you like to resize the board to? Respond with a single number between 1 and 100 representing one row of pixels.'));
    if (size > 100) {
        console.log('error: input greater than 100');
        size = 100;
    }
    else if (typeof(size) != 'number' || size < 1) {
        console.log('error: input not a number, or less than 1');
        size = 16;
    }
    boardClear();
    drawPixels(size);
    eventListeners(style);
}

//allow drawPixels() to set width of blocks and width/height of pixels
//setup event listener on button
change.addEventListener('click', buttonPrompt);

//initialize colorful button
//workaround for needing to pass an arg with buttonPrompt() not elegent, but successful
function colorClick () {
    buttonPrompt('colors');
}
randColors.addEventListener('click', colorClick);

//initialize darken button
//same janky workaround
function greyClick() {
    buttonPrompt('darken');
}
grey.addEventListener('click', greyClick);