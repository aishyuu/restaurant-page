import './style.css'

function component(name) {
    const element = document.createElement('div');
    element.classList.add('header');
    element.innerHTML = `Hello ${name}`;

    return element;
}

document.body.appendChild(component("there"));