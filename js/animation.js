document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log("Observed section:", entry.target);

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0 // Alternativ: 0, wenn es sofort erscheinen soll
    });

    sections.forEach(section => observer.observe(section));
});


