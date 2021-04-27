let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');

class Car {
    constructor( x, y, a, b, image) {
        this.x = x;
        this.y = y;
        this.width = a;
        this.height = b;
        this.image = image;
        this.speed = 40;
    }

    drawCar(ctx) {
        ctx.beginPath();
        let car = new Image();
        car.src = this.image;
        ctx.drawImage(car, this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

    moveLeft() {
        this.x = this.x - this.speed;
    }

    moveRight() {
        this.x = this.x + this.speed;
    }
}



let playerCar = [];
let main1 = new Car (320,700,100,200,'./img/main1.png')
// let main2 = new Car (120,700,100,200,'./img/main2.png')
// let main3 = new Car (120,700,100,200,'./img/main3.png')
// let main4 = new Car (120,700,100,200,'./img/main4.png')
// playerCar.push(main1,main2,main3,main4);


let sel = 0;
function carChoice() {
    switch (sel%4) {
        case 0:
            main1.drawCar(ctx);
            break;
        case 1:
            main1.image = './img/main2.png';
            main1.drawCar(ctx);
            break;
        case 2:
            main1.image = './img/main3.png';
            main1.drawCar(ctx);
            break;
        case 3:
            main1.image = './img/main4.png';
            main1.drawCar(ctx);
            break;
    }
    sel++;
}


function playerMove(event) {
    switch (event.keyCode) {
        case 100:
            main1.moveLeft();
            main1.drawCar(ctx);
            break;
        case 102:
            main1.moveRight();
            main1.drawCar(ctx);
            break;
    }
}
window.addEventListener('keydown',playerMove);




