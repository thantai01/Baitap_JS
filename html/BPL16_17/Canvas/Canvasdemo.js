class Car {
    constructor(name,type,speed,image,x,y) {
        this.name = name;
        this.type = type;
        this.speed = speed;
        this.src = image;
        this.x = x;
        this.y = y;
    };

    drawImg(ctx) {
        let img = new Image();
        img.src = this.src;
        ctx.drawImage(img,this.x,this.y,800,400);
    }
}
//
class Rectangle {
    constructor(x,y,a,b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
    }
    drawRect(ctx) {
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.a,this.b);
        ctx.fill();
        ctx.closePath();
    }
}


