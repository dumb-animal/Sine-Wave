const WIDTH = 720;
const HEIGHT = 480;
const HALF_HEIGHT = HEIGHT / 2;
const HALF_WIDTH = WIDTH / 2;

let angle = 0;
let circles = [];

for (let i = 0; i < 10; i++) {
    circles.push(new Circle(110 + 50 * i, HALF_HEIGHT, 18 * i));
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    background(0, 0, 64);

    for (let i = 0; i < circles.length; i++) {
        circles[i].vibrate(angle);
        circles[i].draw();
    }

    angle += 0.04;
    if (angle > 360) angle = 0;
}