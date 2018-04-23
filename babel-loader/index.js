import Message from './Message';
import './style.css'

let message = new Message('Hola Webpack');
message.show();

const sum = (a, b) => {
    return a + b;
};

document.write('Webpack - Babel Suma: ' + sum(5, 4));

console.log('Hola mundo!, desde Webpack en un webpack.configwww');
