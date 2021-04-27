class Mobile {
    constructor(name) {
        this.name = name;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
    }

    writeMsg(msg) {
        this.message = msg;
    }

    receivedMsg (msg) {
        this.inbox.push(msg);
    }

    sendMsg(mobile) {
        mobile.receiveMsg(this.message);
        this.outbox.push(this.message);
    }
    readMsg(msg) {
        this.outbox = msg;
        this.inbox = msg;
    }

}

let mobile1 = new Mobile("Nokia");
let mobile2 = new Mobile("Samsung");
console.log(mobile1);
console.log(mobile2);

mobile1.writeMsg("Hello");
mobile1.sendMsg(mobile2);
console.log(mobile2);