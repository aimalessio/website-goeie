document.addEventListener('DOMContentLoaded', function() {
    const page3 = document.getElementById('page-3');
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            document.querySelector('.animated-path-reverse').classList.add('animate-reverse');
        }
    }, { threshold: 0.1 });

    observer.observe(page3);
});