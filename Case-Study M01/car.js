let ctx = document.getElementById('myCanvas').getContext('2d');
class Car {
    constructor( x, y, a, b, image) {
        this.x = x;
        this.y = y;
        this.width = a;
        this.height = b;
        this.image = image;

    }

    drawCar(ctx) {
        ctx.beginPath();
        let car = new Image();
        car.src = this.image;
        ctx.drawImage(car, this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

let playerCar = [];
let main1 = new Car (120,700,100,200,'./img/main1.png')
let main2 = new Car (120,700,100,200,'./img/main2.png')
let main3 = new Car (120,700,100,200,'./img/main3.png')
let main4 = new Car (120,700,100,200,'./img/main4.png')
playerCar.push(main1,main2,main3,main4);







