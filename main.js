function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += this.speed;
        console.log('left: ' + this.left);
    };
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('left: ' + this.left);
    };
    this.moveUp = function () {
        this.top += this.speed;
        console.log('top: ' + this.top);
    };
    this.moveDow = function () {
        this.top = this.top - this.speed;
        console.log('top: ' + this.top);
    }
}

var hero = new Hero('girl.jpg', 20, 30, 200, 20);

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top === 20) {
        hero.moveRight();
    }
    if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveUp();
    }
    if (hero.top > window.innerHeight - hero.size && hero.left > 20) {
        hero.moveLeft();
    }
    if (hero.left === 10 && hero.top > 20) {
        hero.moveDow();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);
}

