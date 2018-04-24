import Message from './Message';
import './style.css'

let message = new Message('Webpack - Babel Northsouth Studios');

const sum = (a, b) => {
    return a + b;
};

document.body.append(message.makeMessage());

console.log('Suma: ' +  sum(5,9));
