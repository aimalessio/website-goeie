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
});

document.addEventListener("DOMContentLoaded", function () {
    const imageButtons = document.querySelectorAll(".image-button");

    imageButtons.forEach(button => {
        button.addEventListener("click", function () {
            const url = button.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
});
