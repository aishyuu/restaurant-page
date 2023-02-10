export default function home() {
    const mainContainer = document.createElement('div');
    mainContainer.classList = 'containerMain';

    const mainOverlay = document.createElement('div');
    mainOverlay.classList = 'overlayMain';
    mainContainer.appendChild(mainOverlay);

    const mainContent = document.createElement('div');
    mainContent.classList = 'contentMain';
    mainOverlay.appendChild(mainContent);

    const mainText = document.createElement('h1');
    mainText.classList = 'textMain';
    mainText.innerHTML = 'Pizzaria';
    mainContent.appendChild(mainText);

    const subText = document.createElement('h3');
    subText.classList = 'subtextMain';
    subText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    mainContent.appendChild(subText);

    return mainContainer;
}