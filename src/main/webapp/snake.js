function Snake() {
    this.x = 0;
    this.y = 0;
    this.xv = 1;
    this.yv = 0;
    this.tail = [];

    this.dir = function (x, y) {
        if ((this.xv === 0 || x === 0) && (this.yv === 0 || y === 0)) {
            this.xv = x;
            this.yv = y;
        }
    };

    this.eat = function (pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            score++;
            return true;
        } else {
            return false;
        }
    };

    this.checkDeath = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
            if (d < 1) {
                noLoop();
            }
        }
    };

    this.update = function () {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (score >= 1) {
            this.tail[score - 1] = createVector(this.x, this.y);
        }

        this.x += this.xv * scl;
        this.y += this.yv * scl;

        this.x = this.x % width;
        this.y = this.y % height;

        if (this.x < 0) {
            this.x = width;
        }

        if (this.y < 0) {
            this.y = height;
        }
    };

    this.show = function () {
        fill(0);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    };
}