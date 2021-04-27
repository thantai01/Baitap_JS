
class Background {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    drawImg(ctx) {
        let background = new Image();
        background.src = './img/road1.png';
        ctx.drawImage(background,this.x,this.y,this.width,this.height);
    }
}

let bgr = new Background(0,-1500,900,3000);
bgr.drawImg(ctx);