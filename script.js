// Semua halaman
const pages = document.querySelectorAll(".page");

// Musik
const music = document.getElementById("bgMusic");

// Play musik saat user pertama kali klik
document.body.addEventListener(
  "click",
  () => {
    music.play().catch(() => {});
  },
  { once: true }
);

// Fungsi pindah halaman
function nextPage(pageNumber) {
  pages.forEach((page) => page.classList.remove("active"));

  document
    .getElementById("page" + pageNumber)
    .classList.add("active");

  // Confetti 🎉
  confetti({
    particleCount: 180,
    spread: 90,
    origin: {
      y: 0.6,
    },
  });

  // Scroll ke atas (untuk HP)
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Halaman terakhir
function finishLove() {

  confetti({
    particleCount: 300,
    spread: 180,
    startVelocity: 45,
    scalar: 1.2,
    origin: {
      y: 0.55,
    },
  });

  setTimeout(() => {
    alert(
`♡ Thank you for opening everything ♡

I hope every little gift made you smile.

No matter how small they are,
each one was chosen with lots of love.

Take good care of them...

and please remember,
someone loves you very, very much.

I love you forever. 🤍`
    );
  }, 500);
}
