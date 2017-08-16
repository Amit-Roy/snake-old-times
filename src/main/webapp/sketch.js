var counter = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    counter++;
    counter = counter % 7;
    switch (counter) {
        case 0:
            fill(255, 0, 0);
            break;
        case 1:
            fill(255, 127, 0);
            break;
        case 2:
            fill(255, 255, 0);
            break;
        case 3:
            fill(0, 255, 0);
            break;
        case 4:
            fill(0, 0, 255);
            break;
        case 5:
            fill(75, 0, 130);
            break;
        case 6:
            fill(139, 0, 255);
            break;
    }

    ellipse(mouseX, mouseY, 60, 60);
}