document.addEventListener('DOMContentLoaded', () => {
    const newH2 = document.createElement('h2');
    const newH3 = document.createElement('h3');
    newH2.textContent = 'Hi, I am H2 from DOM manipulation';
    newH3.textContent = 'Hi, I am H3 from DOM manipulation';

    const container = document.getElementsByClassName('container')[0];
    new
    console.log(container); // Check if the container is found
    document.body.appendChild(newH3)
    if (container) {
        container.appendChild(newH2); // Append to container if it exists
    } else {
        console.error('Container not found');
    }
});
