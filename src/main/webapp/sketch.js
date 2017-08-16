var scl = 20;
var snake;
var score = 0;


function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(10);
    spawnFood();
    button = createButton('Restart');
    button.position(650, 200, 65);
    button.mousePressed(reset);

}

function reset() {
    snake = new Snake();
    score = 0;
    spawnFood();
    redraw();
    loop();
}

function draw() {
    background(0);

    text('Score: ' + score, width / 2, height / 2);
    textAlign(CENTER);
    textSize(25);

    if (snake.eat(food)) {
        spawnFood();
    }
    snake.checkDeath();
    snake.update();
    snake.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}

function spawnFood() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}