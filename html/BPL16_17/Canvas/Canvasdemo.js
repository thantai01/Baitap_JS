class Rectangle {
    constructor(_x,_y,_a,_b) {
        this.x = _x;
        this.y = _y;
        this.a = _a;
        this.b = _b;
        this.image = new Image();
        this.image.src = 'bmwm5.jpg';

    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.a,this.b);
        ctx.stroke();
        ctx.closePath();
    }

    moveRight() {
        this.x = this.x + this.speed;
    }

    drawImg(ctx) {
        ctx.drawImage(this.image,this.x,this.y,100,50);
    }
}
