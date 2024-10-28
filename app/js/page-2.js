document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.querySelector(".typewriter");
    const firstLineElement = document.querySelector(".first-line");

    const fullText = "Mijn naam is Alessio Sanna. Ik ben 18 jaar en studeer Software Development aan het Drenthe College. Ik ben rustig en gemotiveerd, en ga altijd voor het beste resultaat, in mijn studie én daarbuiten. Sport is belangrijk voor me; ik train zes keer per week om mijn doelen te halen. Of het nu om code gaat of om sporten, ik geef altijd alles.";

    const firstLine = "Mijn naam is Alessio Sanna.";
    const restOfText = fullText.substring(firstLine.length).trim();

    let firstLineIndex = 0;
    let restIndex = 0;
    let typingFirstLine = true;
    let hasStartedTyping = false;

    function typeWriter() {
        if (typingFirstLine && firstLineIndex < firstLine.length) {
            // Typ de eerste regel met inspringing
            firstLineElement.innerHTML += firstLine.charAt(firstLineIndex);
            firstLineIndex++;
            setTimeout(typeWriter, 50);
        } else if (firstLineIndex === firstLine.length) {
            // Ga naar de volgende regel en begin met de rest van de tekst
            typingFirstLine = false;
            firstLineIndex++;
            typewriterElement.innerHTML += "<br>";
            setTimeout(typeWriter, 50);
        } else if (!typingFirstLine && restIndex < restOfText.length) {
            // Typ de rest van de tekst op een nieuwe regel
            typewriterElement.innerHTML += restOfText.charAt(restIndex);
            restIndex++;
            setTimeout(typeWriter, 50);
        }
    }

    document.addEventListener('scroll', function() {
        const page2 = document.querySelector('.page-2');
        const page2Position = page2.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (page2Position < screenPosition && !hasStartedTyping) {
            hasStartedTyping = true;
            typeWriter();
        }
    });
});