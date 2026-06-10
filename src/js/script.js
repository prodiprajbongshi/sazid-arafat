const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");

  if (navLinks.classList.contains("show-menu")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});

/* =========================
   MULTIPLE SLIDERS
========================= */

 document.addEventListener("DOMContentLoaded", () => {

  const sliders = document.querySelectorAll(".home-slider");

  sliders.forEach((slider) => {

    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    let currentSlide = 0;

    function showSlide(index) {

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      slides[index].classList.add("active");
    }

    // Next button
    nextBtn.addEventListener("click", () => {

      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      showSlide(currentSlide);

    });

    // Previous button
    prevBtn.addEventListener("click", () => {

      currentSlide--;

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      showSlide(currentSlide);

    });

  // Autoplay for all sliders
setInterval(() => {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 4000);

  });

});






//work page counter
const counters = document.querySelectorAll(".port-stat-num");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = +counter.dataset.target;
      const suffix = counter.dataset.suffix || "+";

      let current = 0;
      const duration = 1000;
      const increment = target / (duration / 32);

      function updateCounter() {
        current += increment;

        if (current < target) {
          counter.textContent = Math.ceil(current) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix;
        }
      }

      updateCounter();
      observer.unobserve(counter);
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => observer.observe(counter));








// certificate image gellery
document.addEventListener("DOMContentLoaded", () => {

  const certItems = document.querySelectorAll(".hpc-cert-item");
  const images = document.querySelectorAll(".hpc-cert-img");

  const modal = document.getElementById("certGallery");
  const modalImg = document.querySelector(".cert-gallery-image");

  const prevBtn = document.querySelector(".cert-gallery-prev");
  const nextBtn = document.querySelector(".cert-gallery-next");
  const closeBtn = document.querySelector(".cert-gallery-close");

  let currentIndex = 0;

  function showImage(index) {
    modalImg.src = images[index].src;
    modalImg.alt = images[index].alt;
  }

  function openGallery(index) {
    currentIndex = index;
    showImage(currentIndex);
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeGallery() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  certItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      openGallery(index);
    });
  });

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  closeBtn.addEventListener("click", closeGallery);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeGallery();
    }
  });

  document.addEventListener("keydown", (e) => {

    if (!modal.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
      nextImage();
    }

    if (e.key === "ArrowLeft") {
      prevImage();
    }

    if (e.key === "Escape") {
      closeGallery();
    }
  });

});