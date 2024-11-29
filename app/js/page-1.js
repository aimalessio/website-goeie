const navbar = document.querySelector('.navbar');
const texts = document.querySelectorAll('.page-1 p');
const button = document.querySelector('.page-1-button');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {

        navbar.classList.add('hidden');
    } else {

        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    navbar.classList.add('visible');
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('visible');
        }, index * 500);
    });
    setTimeout(() => {
        button.classList.add('visible');
    }, texts.length * 500);
});

window.addEventListener('resize', () => {
    adjustTextSize();
});

function adjustTextSize() {
    const width = window.innerWidth;
    texts.forEach(text => {
        if (width < 768) {
            text.style.fontSize = '5em';
        } else if (width < 480) {
            text.style.fontSize = '3em';
        } else {
            text.style.fontSize = '';
        }
    });
}