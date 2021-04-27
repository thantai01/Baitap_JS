function objCreate() {
    let objs = [];
    let obj1 = new Car(0,0,102,204,100,0,100,200,'character1.png');
    let obj2 = new Car(102,0,102,204,100,0,100,200,'character1.png');
    let obj3 = new Car(0,204,102,204,100,0,100,200,'character1.png');
    let obj4 = new Car(102,204,102,204,100,0,100,200,'character1.png');

    objs.push(obj1,obj2,obj3,obj4);
    console.log(objs);
}

function drawObjs(ctx) {
    drawObjs.drawCar(ctx);
}