function gameRunning() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    bgrMove();
    displayObj1(ctx);
    // displayObj2(ctx);
    main1.drawCar(ctx);
    gainPoint();
    getCrash();
    crashCheck();
}
setInterval(gameRunning,30);


let score = 0;

function gainPoint() {
    for (let i = 0; i < botCar1.length; i++) {
        if (botCar1[i].y >= 900) {
            score++;
            botCar1.splice(i,1);
            document.getElementById('score').value = score;
        }
    }
}

function getCrash() {
    let top1 = main1.y;
    let left1 = main1.x;
    let right1 = main1.x + main1.width;
    let bot1 = main1.y + main1.height

    for (let i = 0; i < botCar1.length; i++) {
        let top2 = botCar1[i].y;
        let left2 = botCar1[i].x;
        let right2 = botCar1[i].x + botCar1[i].width;
        let bot2 = botCar1[i] + botCar1[i].height;
        if(top1 > bot2 || left1 > right2 || right1 < left2 || bot1 < top2)
            return false;
    }
    return true;
}
function crashCheck() {
    if(getCrash() === true) {
        alert("You lose! Your score is " + score);
    }
}

function difficultChange() {

}