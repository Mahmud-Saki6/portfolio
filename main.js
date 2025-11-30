// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navItems = document.querySelector(".nav-items");

  mobileMenuBtn.addEventListener("click", () => {
    navItems.classList.toggle("active");
    mobileMenuBtn.innerHTML = navItems.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navItems.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNavLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);

  // About Section Image Slider
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll(".skill-progress");

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (barPosition < screenPosition) {
        const level = bar.getAttribute("data-level");
        bar.style.width = `${level}%`;
      }
    });
  }

  // Initial check and then on scroll
  animateSkillBars();
  window.addEventListener("scroll", animateSkillBars);

  // Form submission
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");

    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = "Message Sent!";
      submitBtn.style.backgroundColor = "#2D5A27";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "";
        contactForm.reset();
      }, 2000);
    }, 1500);
  });

  // Navbar background on scroll
  const navContainer = document.querySelector(".nav-container");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navContainer.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navContainer.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navContainer.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      navContainer.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  // Floating elements animation
  const floatingElements = document.querySelectorAll(".floating-element");

  floatingElements.forEach((element, index) => {
    // Add random delay to each element
    element.style.animationDelay = `${index * 2}s`;
  });

  // Initialize AOS (Animate On Scroll) - if you decide to add it
  // This is a placeholder for if you want to add more animations
  function initAnimations() {
    // You can add more animation triggers here
  }

  initAnimations();
});
