export default function menu() {
    const menuContainer = document.createElement('div');

    const menuText = document.createElement('h1');
    menuText.innerHTML = 'Menu Page';
    menuContainer.appendChild(menuText);

    const main = document.querySelector('.main');
    main.appendChild(menuContainer);
}