document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.querySelector(".typewriter");
    const firstLineElement = document.querySelector(".first-line");
    const textElement = document.querySelector(".page-2 p");
    const img = document.querySelector('.page-2 img');
    const fullText = "Mijn naam is Alessio Sanna. Ik ben 18 jaar en studeer Software Development aan het Drenthe College. Ik ben rustig en gemotiveerd, en ga altijd voor het beste resultaat, in mijn studie én daarbuiten. Sport is belangrijk voor me; ik train zes keer per week om mijn doelen te halen. Of het nu om code gaat of om sporten, ik geef altijd alles.";

    const firstLine = "Mijn naam is Alessio Sanna.";
    const restOfText = fullText.substring(firstLine.length).trim();

    let firstLineIndex = 0;
    let restIndex = 0;
    let typingFirstLine = true;

    function typeWriter() {
        if (typingFirstLine && firstLineIndex < firstLine.length) {
            firstLineElement.innerHTML += firstLine.charAt(firstLineIndex);
            firstLineIndex++;
            setTimeout(typeWriter, 50);
        } else if (firstLineIndex === firstLine.length) {
            typingFirstLine = false;
            img.classList.add('show'); // Toon de afbeelding zodra de eerste regel volledig is getypt
            firstLineIndex++;
            typewriterElement.innerHTML += "<br>";
            setTimeout(typeWriter, 50);
        } else if (!typingFirstLine && restIndex < restOfText.length) {
            typewriterElement.innerHTML += restOfText.charAt(restIndex);
            restIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    // Observer instellen voor page-2
    const page2 = document.getElementById("page-2");
    const observerOptions = {
        root: null, // Gebruik de viewport als 'root'
        threshold: 0.5 // Activeer als 50% zichtbaar is
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textElement.classList.add("animate"); // Start de achtergrondkleur-animatie

                // Wacht tot de achtergrondanimatie voltooid is voordat de typemachine start
                textElement.addEventListener("animationend", function onAnimationEnd() {
                    typewriterElement.style.opacity = "1"; // Maak de typewriter zichtbaar
                    typeWriter(); // Start de typemachine
                    textElement.removeEventListener("animationend", onAnimationEnd); // Verwijder de listener om herhaling te voorkomen
                });

                observer.unobserve(page2); // Stop met observeren om animatie slechts één keer te activeren
            }
        });
    }, observerOptions);

    observer.observe(page2);
});

document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.page-2 img');
    const text = document.getElementById('text');

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.target.textContent.trim().length > 0) {
                img.classList.add('show');
                observer.disconnect();
            }
        });
    });

    observer.observe(text, { childList: true, subtree: true });

    // Simulate typing for demonstration purposes
    setTimeout(() => {
        text.textContent = 'First line typed';
    }, 2000);
});
