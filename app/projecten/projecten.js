document.addEventListener('DOMContentLoaded', () => {
    const waveText = document.querySelector('.wave-text');
    const text = waveText.textContent;
    waveText.innerHTML = '';

    // H1-animatie (letter-voor-letter effect)
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`;
        waveText.appendChild(span);
    });

    const totalAnimationTime = text.length * 0.1 + 0.3; // Totale animatietijd berekenen

    // Start de button-animatie na de h1-animatie
    setTimeout(() => {
        const imageButtons = document.querySelectorAll('.image-button');
        imageButtons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('animate');
            }, index * 100); // Stapsgewijs vertragen per button
        });
    }, totalAnimationTime * 1000);

    // Selecteer de benodigde elementen
    const imageButtons = document.querySelectorAll('.image-button img');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');

    // Voeg klik event toe aan elke afbeelding om overlay te openen
    imageButtons.forEach(image => {
        image.addEventListener('click', () => {
            overlay.style.display = 'flex'; // Zet overlay zichtbaar
            setTimeout(() => {
                overlay.classList.add('active'); // Voeg de 'active' klasse toe voor animatie
            }, 10); // Korte vertraging om CSS-transitie te starten
        });
    });

    // Sluit de overlay wanneer de sluitknop wordt aangeklikt
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active'); // Verwijder 'active' klasse voor fade-out animatie
        setTimeout(() => {
            overlay.style.display = 'none'; // Zet overlay display naar 'none' na animatie
        }, 500); // Wacht tot de animatie klaar is
    });

    // Sluit de overlay wanneer buiten de overlay-content wordt geklikt
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('active'); // Verwijder 'active' klasse
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500); // Wacht tot de animatie klaar is
        }
    });
});
