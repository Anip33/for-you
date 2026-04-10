const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

// tombol "tidak mau" kabur tapi tetap di layar
noBtn.addEventListener("mouseover", () => {
  const maxX = 300;
  const maxY = 700;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// klik YES pindah halaman dengan efek
yesBtn.addEventListener("click", () => {
  yesBtn.style.transform = "scale(1.3)";
  yesBtn.style.boxShadow = "0 0 40px pink";

  setTimeout(() => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  }, 500);
});