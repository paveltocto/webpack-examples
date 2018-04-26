import $ from 'jquery';
import 'bootstrap';
import northsouthstudiosLogo from '../images/northsouthstudios.png';

const img = document.createElement('img');
img.setAttribute('src', northsouthstudiosLogo);
img.setAttribute('width', 100);
img.setAttribute('height', 100);
$('#container-image').html(img);