let CANVAS_WIDTH = c.width = 900;
let CANVAS_HEIGHT = c.height = 900;




function gameRunning() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    bgrMove();
    displayObj(ctx);
    main1.drawCar(ctx);
    loopMob();


}
setInterval(gameRunning,10);