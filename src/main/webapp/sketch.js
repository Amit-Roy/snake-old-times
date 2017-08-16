var scl = 20;
var snake;
var score = 0;


function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    bg = loadImage("src/main/resources/grass-bg.jpg");
    frameRate(10);
    spawnFood();
    restartBtn = createButton('Restart');
    restartBtn.position(650, 200, 65);
    restartBtn.mousePressed(onRestart);
    onUnpause();
}

function onUnpause() {
    if (typeof unpauseBtn !== "undefined") {
        unpauseBtn.remove();
    }
    pauseBtn = createButton('Pause');
    pauseBtn.position(650, 250, 65);
    pauseBtn.mousePressed(onPause);
    loop();
}

function onPause() {
    pauseBtn.remove();
    unpauseBtn = createButton('Unpause');
    unpauseBtn.position(650, 250, 65);
    unpauseBtn.mousePressed(onUnpause);
    noLoop();
}

function onRestart() {
    snake = new Snake();
    score = 0;
    spawnFood();
    redraw();
    loop();
}

function draw() {
    background(bg);

    fill(255);
    text('Score: ' + score, width / 2, height / 2);
    textAlign(CENTER);
    textSize(25);

    if (snake.eat(food)) {
        spawnFood();
    }
    snake.checkDeath();
    snake.update();
    snake.show();

    fill(70, 0, 0);
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