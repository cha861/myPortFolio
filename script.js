// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Scroll Animation (Intersection Observer is more efficient than scroll event)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(sec => {
    observer.observe(sec);
  });

  // 2. Navigation Active State on Scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".sidebar nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // 3. Form Handling
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add visual feedback button change
      const btn = form.querySelector("button");
      const originalText = btn.innerText;
      
      btn.innerText = "Sent Successfully!";
      btn.style.backgroundColor = "#4ade80"; // Green
      
      setTimeout(() => {
        form.reset();
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; // Reset
      }, 3000);
    });
  }
  const roles = ["Full Stack Developer", "UI/UX Designer", "Python Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const delayBetweenRoles = 2000;

function typeWriter() {
  const currentRole = roles[roleIndex];
  const typeElement = document.querySelector(".typewriter");
  
  if (!typeElement) return; // Guard clause

  if (isDeleting) {
    // Deleting text
    typeElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Typing text
    typeElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  // Speed control
  let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && charIndex === currentRole.length) {
    // Finished typing word, pause before deleting
    typeDelay = delayBetweenRoles;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Finished deleting, move to next word
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeWriter, typeDelay);
}

// Start the effect when page loads
document.addEventListener("DOMContentLoaded", typeWriter);
});