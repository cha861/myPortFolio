// Select all sections
const sections = document.querySelectorAll("section");

// Initial hidden state
sections.forEach((sec) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.6s ease-out";
});

// Reveal on scroll function (one-time)
const revealOnScroll = () => {
    sections.forEach((sec, index) => {
        if (sec.dataset.revealed) return; // skip if already revealed

        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
            sec.style.transitionDelay = `${index * 0.2}s`;
            sec.dataset.revealed = "true"; // mark as revealed
        }
    });
};

// Listen for scroll
window.addEventListener("scroll", revealOnScroll);

// Trigger on load
revealOnScroll();
