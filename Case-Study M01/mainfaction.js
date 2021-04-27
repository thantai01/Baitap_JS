let CANVAS_WIDTH = c.width = 900;
let CANVAS_HEIGHT = c.height = 900;

function gameRunning() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    bgr.drawImg(ctx);
    bgr.y+=10;
    if(bgr.y >0)
    bgr.y = -1500;

    main1.drawCar(ctx);

    car1.drawObj(ctx);
    car1.y +=5
    if(car1.y > 900)
        car1.y = -200;

    car3.drawObj(ctx);
    car3.y +=7;
    if(car3.y >900)
        car3.y = -250;

    car4.drawObj(ctx);
    car4.y +=3;
    if(car4.y >900)
        car4.y = -150;


}
setInterval(gameRunning,10);