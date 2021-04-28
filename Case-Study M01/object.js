
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
        this.speed = speed;
    }
    drawObj(ctx) {
        // ctx.beginPath();
        let object = new Image();
        object.src = this.image;
        ctx.drawImage(object,this.sx,this.sy,this.sw,this.sh,
            this.x,this.y,this.width,this.height);
        // ctx.closePath();
    }
    moveDown() {
        this.y += speed;
    }
}

let speed = Math.floor(Math.random()*(30-5)+5);
let botCar = [];
addObj();



function addObj() {
    let positionX = [120,320,520,720];
    let randomY = Math.floor(Math.random()*(900-2000)+1000); //rd point Y;
    let a = Math.floor(Math.random()*(3-1)+1);

    let obj1 = new Object('./img/obj'+ a +'.png',0,0,74,143,
        positionX[0],-500,100,200);
    let obj2 = new Object('./img/obj'+ a +'.png',74,0,74,143,
        positionX[1],-300,100,200);
    let obj3 = new Object('./img/obj'+ a +'.png',0,143,74,143,
        positionX[2],-400,100,200);
    let obj4 = new Object('./img/obj'+ a +'.png',74,143,74,143,
        positionX[3],-600,100,200);
    botCar.push(obj1,obj2,obj3,obj4);
}
console.log(botCar);


// let car1 = new Object('./img/obj1.png',0,0,74,143,100,0,100,200);
// let car2 = new Object('./img/obj1.png',74,0,74,143,320,0,100,200);
// let car3 = new Object('./img/obj1.png',0,143,74,143,520,0,100,200);
// let car4 = new Object('./img/obj1.png',74,143,74,143,720,0,100,200);



function displayObj() {
    for( let i = 0; i < botCar.length; i++) {
        botCar[i].moveDown();
        botCar[i].drawObj(ctx);
    }
}
let ltpa = setInterval(displayObj,30);

let random = Math.floor(Math.random()*(-1-500)-500);
console.log(random);
function loopMob() {
    // addObj();
    if(botCar[0].y > CANVAS_HEIGHT)
        botCar[0].y = random;
    if(botCar[1].y > CANVAS_HEIGHT)
        botCar[1].y = random;
    if(botCar[2].y > CANVAS_HEIGHT)
        botCar[2].y = random;
    if(botCar[3].y > CANVAS_HEIGHT)
        botCar[3].y = random;
}








