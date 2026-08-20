const form = document.getElementById("analysisForm");
const inputUrl = document.getElementById("analysisUrl");
const roleInput = document.getElementById("analysisRole");
const inputView = document.getElementById("inputView");
const loadingView = document.getElementById("loadingView");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const steps = [...document.querySelectorAll("#analysisSteps div")];

const savedUrl = localStorage.getItem("portfolioURL");
const savedRole = localStorage.getItem("targetRole");
if (savedUrl) inputUrl.value = savedUrl;
if (savedRole) roleInput.value = savedRole;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("portfolioURL", inputUrl.value.trim());
  localStorage.setItem("targetRole", roleInput.value);

  inputView.classList.add("hidden");
  loadingView.classList.remove("hidden");

  let progress = 0;
  let currentStep = 0;

  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 5;
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + "%";
    progressPercent.textContent = progress + "%";

    const calculatedStep = Math.min(6, Math.floor(progress / 14));
    if (calculatedStep !== currentStep) currentStep = calculatedStep;

    steps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep && progress < 100);
      step.classList.toggle("done", index < currentStep || progress === 100);
    });

    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(() => window.location.href = "dashboard.html", 700);
    }
  }, 650);
});