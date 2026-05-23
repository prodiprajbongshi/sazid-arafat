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

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {

  const slides = slider.querySelectorAll(".slide");

  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");

  let currentSlide = 0;

  /* =========================
     SHOW SLIDE
  ========================= */

  function showSlide(index){

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");
  
  }

  /* =========================
     NEXT BUTTON
  ========================= */

  nextBtn.addEventListener("click", () => {

    currentSlide++;

    if(currentSlide >= slides.length){
      currentSlide = 0;
    }

    showSlide(currentSlide);

  });

  /* =========================
     PREVIOUS BUTTON
  ========================= */

  prevBtn.addEventListener("click", () => {

    currentSlide--;

    if(currentSlide < 0){
      currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

  });

  /* =========================
     AUTO SLIDE
  ========================= */

  // Disable autoplay for #slider2
  if (slider.id !== "slider2") {

    setInterval(() => {

      currentSlide++;

      if(currentSlide >= slides.length){
        currentSlide = 0;
      }

      showSlide(currentSlide);

    }, 4000);

  }

});