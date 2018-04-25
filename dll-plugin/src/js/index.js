import $ from 'jquery';
import 'select2';
import '../css/style.css'
import northsouthstudiosLogo from '../images/northsouthstudios.png';

$('#dd_select').select2({
    closeOnSelect: false
});

const img = document.createElement('img');
img.setAttribute('src', northsouthstudiosLogo);
img.setAttribute('width', 100);
img.setAttribute('height', 100);

$('#wrapper-image').html(img);
