
class Object {
    constructor(image,sx,sy,sw,sh,x,y,witdh,height) {
        this.image = image;
        this.sx = sx;
        this.sy = sy;
        this.sw =sw;
        this.sh = sh;
        this.x = x;
        this.y = y;
        this.width = witdh;
        this.height = height;
    }
    drawObj(ctx) {
        ctx.beginPath();
        let object = new Image();
        object.src = this.image;
        ctx.drawImage(object,this.sx,this.sy,this.sw,this.sh,
            this.x,this.y,this.width,this.height);
        ctx.closePath();
    }
}
let obj_cars = [];
let car1 = new Object('./img/obj1.png',0,0,74,143,120,0,100,200);
let car2 = new Object('./img/obj1.png',74,0,74,143,320,0,100,200);
let car3 = new Object('./img/obj1.png',0,143,74,143,520,0,100,200);
let car4 = new Object('./img/obj1.png',74,143,74,143,720,0,100,200);
obj_cars.push(car1,car2,car3,car4);
console.log(obj_cars);


