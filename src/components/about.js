export default function about() {
    const aboutContainer = document.createElement('div');

    const aboutText = document.createElement('h1');
    aboutText.innerHTML = 'About Page';
    aboutContainer.appendChild(aboutText);

    const main = document.querySelector('.main');
    main.appendChild(aboutContainer);
}