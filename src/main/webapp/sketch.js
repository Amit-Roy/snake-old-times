var counter = 0;


function setup() {
    fill(0);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    counter++;
    if (counter % 2 === 0) {
        fill(255, 0, 0);
    } else if (counter % 3 === 0) {
        fill(0, 0, 255);
    }
    else {
        fill(0, 255, 0);
    }

    ellipse(mouseX, mouseY, 60, 60);
}