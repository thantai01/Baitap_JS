class player {
    constructor(sx,sy,sw,sh,x,y,w,h) {
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

    }

    drawImg(ctx) {
        let img = new Image();
        img.src = 'car2-removebg-preview - Copy.png';
        ctx.drawImage(img,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.width,this.height);
    }

    move(a,d) {
        if(controler.key[a]) {
            this.x -=50;
            if(this.x <150) this.x -=this.speed;
        }
        if(controler.key[d]) {
            this.x +=50;
            if (this.x<703 ) this.x +=this.speed;
        }
    }
}

