class Message {
    constructor(msg) {
        this.msg = msg;
    }

    makeMessage() {
        const element = document.createElement('p');
        element.textContent = this.msg;
        return element;
    }
}

export default Message;
