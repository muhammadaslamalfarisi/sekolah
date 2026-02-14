const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add("scroll-active");
  } else {
    scrollUp.classList.remove("scroll-active");
  }
});

// Ambil elemen-elemen yang dibutuhkan
const btn = document.getElementById("hamburger-menu");
const menu = document.getElementById("nav-menu");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

btn.addEventListener("click", () => {
  // 1. Munculkan/Sembunyikan Menu
  menu.classList.toggle("hidden");

  // 2. Animasi Hamburger ke X
  line1.classList.toggle("-translate-y-2");
  line1.classList.toggle("rotate-45");

  line2.classList.toggle("opacity-0");

  line3.classList.toggle("translate-y-2");
  line3.classList.toggle("-rotate-45");
});

// Menutup menu otomatis saat link diklik
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    // Reset animasi tombol
    line1.classList.remove("rotate-45");
    line1.classList.add("-translate-y-2");
    line2.classList.remove("opacity-0");
    line3.classList.remove("-rotate-45");
    line3.classList.add("translate-y-2");
  });
});
