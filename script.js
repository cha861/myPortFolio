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
      sec.style.transitionDelay = `${index * 0.2}s`; // staggered effect
      sec.dataset.revealed = "true"; // mark as revealed
    }
  });
};

// Listen for scroll + trigger on load
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Handle contact form submission
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page reload

    // Collect data
    const name = form.querySelector(".name").value.trim();
    const email = form.querySelector(".email").value.trim();
    const message = form.querySelector(".message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Example: handle form submission (can integrate with backend or email service)
    console.log("Form submitted:", { name, email, message });
    alert("Message sent successfully!");

    form.reset();
  });
}
