import './styles/main.css';
import './assets/notFound.svg';
import notFound from './views/404.js';

const body = document.querySelector('body');
body.innerHTML = notFound();




