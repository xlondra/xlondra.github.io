const burger = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav');
const exitButton = document.querySelector('.nav-exit');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

exitButton.addEventListener('click', (event) => {
    event.preventDefault();
    navMenu.classList.add('hidden');
});

document.querySelector('header').addEventListener('click', (event) => {
    if (event.target.closest('nav')) {
        return;
    }

    navMenu.classList.add('hidden');
});