const navbar = document.querySelector('.navbar');
const texts = document.querySelectorAll('.page-1 p');
const button = document.querySelector('.page-1-button');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Naar beneden scrollen
        navbar.classList.add('hidden');
    } else {
        // Naar boven scrollen
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', () => {
    // Voeg de klasse 'visible' toe aan de navbar, de tekst en de knop
    navbar.classList.add('visible');
    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('visible');
        }, index * 500); // Voeg een vertraging toe voor elke tekst
    });
    setTimeout(() => {
        button.classList.add('visible');
    }, texts.length * 500); // Voeg de klasse 'visible' toe aan de knop na de teksten
});

// Zorg ervoor dat de tekst en knoppen responsief zijn bij het laden van de pagina
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