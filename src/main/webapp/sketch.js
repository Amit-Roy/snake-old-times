function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(255);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    }
    else {
        fill(255, 0, 0);
    }

    ellipse(mouseX, mouseY, 60, 60);
}