// Khởi tạo WOW.js
new WOW().init();

// Owl Carousel
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3500,
  dots: true,
  nav: false,
});

// CounterUp
$(".counter").counterUp({ delay: 10, time: 1200 });

// Back to top
const back = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    back.classList.add("show");
  } else {
    back.classList.remove("show");
  }
});

// Smooth scroll cho anchor
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});
