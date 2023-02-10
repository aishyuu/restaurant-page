import home from "./components/home";
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
    homeNav.innerHTML = 'Home';
    navbar.appendChild(homeNav);

    const menuNav = document.createElement('p');
    menuNav.innerHTML = 'Menu';
    navbar.appendChild(menuNav);

    const aboutNav = document.createElement('p');
    aboutNav.innerHTML = 'About';
    navbar.appendChild(aboutNav);

    header.appendChild(navbar);

    return header;
}

function website() {
    const content = document.createElement('div');
    content.id = 'content';

    content.appendChild(navbar());
    content.appendChild(home());
    content.appendChild(footer());

    return content;
}

export default website;