
class Object {
    constructor (sx,sy,sw,sh,x,y,w,h) {
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

        // ctx.drawImage(img,125,0,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,250,0,125,125,this.x,this.y,this.width,this.height);

        // ctx.drawImage(img,0,125,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,125,125,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,250,125,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,375,125,125,125,this.x,this.y,this.width,this.height);

        // ctx.drawImage(img,0,250,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,125,250,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,250,250,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,375,250,125,125,this.x,this.y,this.width,this.height);

        // ctx.drawImage(img,125,375,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,250,375,125,125,this.x,this.y,this.width,this.height);
        // ctx.drawImage(img,375,375,125,125,this.x,this.y,this.width,this.height);
    }

}

// let c = document.getElementById('myCanvas');
// let ctx = c.getContext('2d');
//
// let col1_x = 200;
// let col2_x = 300;
// let col3_x = 500;
// let col4_x = 600;
//
// let obj_width = 250;
// let obj_height = 300;
//
//
// let objects = [];
// let obj1 = new Object(125,0,125,125,col1_x,0,obj_width,obj_height)
// obj1.drawImage(ctx);