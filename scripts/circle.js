function Circle(x, y, shift = 0) {
    return {
        x,
        y,
        shift,
        radius: 5,
        amplitude: 20,

        draw() {
            noStroke();
            ellipse(this.x, this.y, this.radius);
            stroke(1);
        },
        vibrate(angle) {
            this.y = HALF_HEIGHT + this.amplitude * cos(this.shift + angle);
        }
    }
}