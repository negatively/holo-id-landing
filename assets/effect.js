const nav = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
    nav.classList.toggle('nav-scroll', window.scrollY > 0)
})

const navToggle = document.querySelector('.nav-toggle input');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', (e) => {
    navList.classList.toggle('slide')
})