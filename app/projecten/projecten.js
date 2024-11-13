document.addEventListener('DOMContentLoaded', () => {
    const waveText = document.querySelector('.wave-text');
    const text = waveText.textContent;
    waveText.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${index * 0.1}s`;
        waveText.appendChild(span);
    });

    const totalAnimationTime = text.length * 0.1 + 0.3;

    setTimeout(() => {
        const imageButtons = document.querySelectorAll('.image-button');
        imageButtons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('animate');
            }, index * 100);
        });
    }, totalAnimationTime * 1000);

    const imageButtons = document.querySelectorAll('.image-button img');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeBtn = document.getElementById('close-btn');

    imageButtons.forEach(image => {
        image.addEventListener('click', () => {
            // Stel de afbeelding en de afmetingen in voor elke individuele afbeelding
            overlayImage.src = image.src;
            overlayImage.style.width = `${image.dataset.width}px`;
            overlayImage.style.height = `${image.dataset.height}px`;

            // Toon de overlay
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 500);
        }
    });
});
