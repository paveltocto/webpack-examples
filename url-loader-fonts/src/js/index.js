import '../css/style.css'
import northsouthstudiosLogo from '../images/northsouthstudios.png';

document.write('Webpack - URL Loader Fonts');

const img = document.createElement('img');
img.setAttribute('src', northsouthstudiosLogo);
img.setAttribute('width', 100);
img.setAttribute('height', 100);
document.body.append(img);