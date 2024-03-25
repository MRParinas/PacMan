class PacMan {
    constructor(elementId, startPos, startDirection) {
        this.element = document.getElementById(elementId);
        this.pos = startPos;
        this.direction = startDirection; 
        this.focus = 0; 
        this.speed = 20; 
    }

    move() {
        let pageWidth = window.innerWidth;
        this.focus = (this.focus + 1) % 2;
        this.direction = this.checkPageBounds(this.element.width, pageWidth);
      
        this.element.src = pacArray[this.direction][this.focus];
        if (this.direction === 0) {
            this.pos += this.speed;
        } else {
            this.pos -= this.speed;
        }
        this.element.style.left = `${this.pos}px`;
    }

    checkPageBounds(imgWidth, pageWidth) {
        if (this.direction === 0 && this.pos + imgWidth > pageWidth) return 1;
        if (this.direction === 1 && this.pos < 0) return 0;
        return this.direction;
    }
}

const pacArray = [
    ["PacMan1.png", "PacMan2.png"],
    ["PacMan3.png", "PacMan4.png"]
];

let pacMen = [
    new PacMan('PacMan1', 0, 0), 
    new PacMan('PacMan2', window.innerWidth - 200, 1), 
    new PacMan('PacMan3', 0, 0), 
    new PacMan ('PacMan4', window.innerWidth - 200, 1)
]; 

function runAll() {
    pacMen.forEach(pacMan => pacMan.move());
}

setInterval(runAll, 200);

//Please do not change
//module.exports = checkPageBounds;
