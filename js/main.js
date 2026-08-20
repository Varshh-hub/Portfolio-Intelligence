const heroWords = [
  "Discover your strengths.",
  "Find your gaps.",
  "Verify your skills.",
  "Become job-ready."
];
let wordIndex = 0;
const heroWord = document.getElementById("hero-word");

setInterval(() => {
  if (!heroWord) return;
  heroWord.style.opacity = "0";
  heroWord.style.transform = "translateY(8px)";
  setTimeout(() => {
    wordIndex = (wordIndex + 1) % heroWords.length;
    heroWord.textContent = heroWords[wordIndex];
    heroWord.style.opacity = "1";
    heroWord.style.transform = "translateY(0)";
  }, 300);
}, 2600);

document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  document.querySelector(".mobile-menu")?.classList.toggle("open");
});

document.getElementById("analyzeBtn")?.addEventListener("click", () => {
  const url = document.getElementById("portfolioUrl").value.trim();
  const role = document.getElementById("targetRole").value;
  if (url) localStorage.setItem("portfolioURL", url);
  localStorage.setItem("targetRole", role);
  window.location.href = "analyze.html";
});