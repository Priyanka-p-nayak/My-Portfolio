// Show welcome alert on page load
window.onload = function () {
    alert("Welcome to my portfolio website!");
  };
  
  // Show "Back to Top" button on scroll
  window.onscroll = function () {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Scroll back to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Set dynamic footer year
  document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Carousel: Show the first certificate
    showSlide(currentSlide);
  });
  
  // Certificate Carousel Logic
  let currentSlide = 0;
  const slides = document.querySelectorAll(".certificate-slide");
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
  const createSparkle = () => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  };
  setInterval(createSparkle, 300);
// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  });
  
    