class Mobile {
    constructor() {
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
}