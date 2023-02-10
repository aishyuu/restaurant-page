import './style.css'
import website from './website.js';

function component() {
    return(website())
}

document.body.appendChild(component())