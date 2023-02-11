import home from "./components/home";
import about from "./components/about";
import menu from "./components/menu";
import footer from "./components/footer";

function navbar() {
    const header = document.createElement('div');
    header.classList = 'header';

    const logo = document.createElement('h1');
    logo.classList = 'logo';

    const logoText = document.createElement('div');
    logoText.innerHTML = 'Pizza';

    logo.appendChild(logoText);
    header.appendChild(logo);

    const navbar = document.createElement('nav');
    navbar.classList = 'navbar';

    const homeNav = document.createElement('p');
    homeNav.classList = 'buttonNav';
    homeNav.innerHTML = 'Home';
    homeNav.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeNav);
        const main = document.querySelector('.main');
        main.removeChild(main.lastChild);
        home();
    })
    navbar.appendChild(homeNav);

    const menuNav = document.createElement('p');
    menuNav.classList = 'buttonNav';
    menuNav.innerHTML = 'Menu';
    menuNav.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuNav);
        const main = document.querySelector('.main');
        main.removeChild(main.lastChild);
        menu();
    })
    navbar.appendChild(menuNav);

    const aboutNav = document.createElement('p');
    aboutNav.classList = 'buttonNav';
    aboutNav.innerHTML = 'About';
    aboutNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(aboutNav);
        const main = document.querySelector('.main');
        main.removeChild(main.lastChild);
        about();
    })

    navbar.appendChild(aboutNav);

    header.appendChild(navbar);

    return header;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".buttonNav");

    buttons.forEach(button => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function createMain() {
    const main = document.createElement('main');
    main.classList = 'main';
    main.id = 'main';
    return main;
}

function website() {
    const content = document.createElement('div');
    content.id = 'content';

    content.appendChild(navbar());
    content.appendChild(createMain());
    content.appendChild(footer());

    window.onload = home;
    return content;
}

export default website;