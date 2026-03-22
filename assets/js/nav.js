const burger = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('.nav');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

document.querySelector('header').addEventListener('click', (event) => {
    if (event.target.closest('nav')) {
        return;
    }

    navMenu.classList.add('hidden');
});
