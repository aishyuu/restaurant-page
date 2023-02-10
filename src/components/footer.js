export default function footer() {
    const container = document.createElement('div');
    container.classList = 'containerMoreInfo';

    const contactContainer = document.createElement('div');
    contactContainer.classList = 'containerContact';
    container.appendChild(contactContainer);

    const headerText = document.createElement('h2');
    headerText.classList = 'headerContact';
    headerText.innerHTML = 'Contact';
    contactContainer.appendChild(headerText);

    const contactText = document.createElement('h3');
    contactText.classList = 'textContact';
    contactText.innerHTML = 'Call +76 (094) 754 43 7I';
    contactContainer.append(contactText);

    const hoursText = document.createElement('h3');
    hoursText.classList = 'textContact';
    hoursText.innerHTML = 'Business Hours: 10am - 11pm Every Day';
    contactContainer.append(hoursText);

    const locationText = document.createElement('h3');
    locationText.classList = 'textContact';
    locationText.innerHTML = 'Location: 817 N California Ave Chicago IL';
    contactContainer.append(locationText);

    const subscribeContainer = document.createElement('div');
    subscribeContainer.classList = "containerSubscribe";
    container.appendChild(subscribeContainer);

    const subscribeHeader = document.createElement('h2');
    subscribeHeader.classList = 'headerSubscribe';
    subscribeHeader.innerHTML = 'Subscribe';
    subscribeContainer.appendChild(subscribeHeader);

    const subscribeForm = document.createElement('form');
    subscribeForm.action = '#';
    subscribeForm.classList = 'formSubscribe';
    subscribeContainer.appendChild(subscribeForm);

    const formText = document.createElement('input');
    formText.classList = 'emailSubscribe';
    formText.placeholder = 'Email';
    formText.type = 'email';
    subscribeForm.appendChild(formText);

    const formButton = document.createElement('input');
    formButton.classList = 'submitSubscribe';
    formButton.innerHTML = 'Subscribe';
    formButton.value = 'submit';
    formButton.textContent = 'Submit';
    subscribeForm.appendChild(formButton);

    return(container);
}