const roleLabel = document.getElementById("roleLabel");
const roleSwitcher = document.getElementById("roleSwitcher");
const storedRole = localStorage.getItem("targetRole") || "Data Scientist";

if (roleSwitcher) roleSwitcher.value = storedRole;
if (roleLabel) roleLabel.textContent = storedRole;

roleSwitcher?.addEventListener("change", () => {
  roleLabel.textContent = roleSwitcher.value;
  localStorage.setItem("targetRole", roleSwitcher.value);
});

const counters = document.querySelectorAll("[data-counter]");
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.counter);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 35));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 25);
    obs.unobserve(el);
  });
}, {threshold:.6});
counters.forEach(c => observer.observe(c));

const modes = {
  hr: {
    icon:"👔", title:"HR Mode", subtitle:"Recruiter perspective",
    message:"Your portfolio demonstrates strong technical foundations, but your project evidence could be stronger for a Data Scientist role.",
    prompts:["Would you shortlist me?","What are my biggest red flags?","What would HR notice first?"]
  },
  student: {
    icon:"🎓", title:"Student Mode", subtitle:"Your learning roadmap",
    message:"You have a solid base. Focus on one strong end-to-end project and strengthen deployment + SQL before adding more technologies.",
    prompts:["What should I learn next?","What project should I build?","Am I internship-ready?"]
  },
  support: {
    icon:"💙", title:"Support Mode", subtitle:"One step at a time",
    message:"You don't need to fix everything today. Start with the highest-impact improvement, then move to the next.",
    prompts:["What should I improve first?","Give me a simple plan","Help me stay focused"]
  },
  roast: {
    icon:"🔥", title:"Roast Mode", subtitle:"Brutally honest",
    message:"Your portfolio claims 23 skills, but your projects provide evidence for approximately 6. That's not a skill set. That's a wishlist. 💀",
    prompts:["Roast my projects","Roast my skills","How do I fix this?"]
  }
};

const tabs = document.querySelectorAll(".mode-tab");
const chatIcon = document.getElementById("chatIcon");
const chatTitle = document.getElementById("chatTitle");
const chatSubtitle = document.getElementById("chatSubtitle");
const aiMessage = document.getElementById("aiMessage");
const quickPrompts = document.getElementById("quickPrompts");
const roastModal = document.getElementById("roastModal");

function updateMode(mode) {
  const data = modes[mode];
  tabs.forEach(t => t.classList.toggle("active", t.dataset.mode === mode));
  chatIcon.textContent = data.icon;
  chatTitle.textContent = data.title;
  chatSubtitle.textContent = data.subtitle;
  aiMessage.textContent = data.message;
  quickPrompts.innerHTML = data.prompts.map(p => `<button>${p}</button>`).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    if (tab.dataset.mode === "roast") {
      roastModal.classList.remove("hidden");
      return;
    }
    updateMode(tab.dataset.mode);
  });
});

document.getElementById("closeModal")?.addEventListener("click", () => roastModal.classList.add("hidden"));
document.getElementById("cancelRoast")?.addEventListener("click", () => roastModal.classList.add("hidden"));
document.getElementById("doRoast")?.addEventListener("click", () => {
  roastModal.classList.add("hidden");
  updateMode("roast");
});

document.querySelectorAll(".quick-prompts button").forEach(btn => {
  btn.addEventListener("click", () => {
    aiMessage.textContent = `Great question. Based on this mock analysis, the biggest opportunity is to strengthen evidence around your target role and turn weak skills into demonstrated skills through projects.`;
  });
});

document.querySelector(".chat-input button")?.addEventListener("click", () => {
  const input = document.querySelector(".chat-input input");
  if (!input.value.trim()) return;
  aiMessage.textContent = `Based on your portfolio analysis: "${input.value.trim()}" — start with the highest-priority gap and create evidence for it through a focused project.`;
  input.value = "";
});

document.querySelector(".menu-toggle")?.addEventListener("click", () => {
  const existing = document.querySelector(".dashboard-mobile-menu");
  if (existing) {
    existing.remove();
    return;
  }
  const menu = document.createElement("div");
  menu.className = "mobile-menu dashboard-mobile-menu open";
  menu.innerHTML = `<a href="#overview">Overview</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#recommendations">Recommendations</a><a href="#ai-modes">AI Modes</a>`;
  document.body.appendChild(menu);
});

document.querySelectorAll(".fix-btn,.warning-list button,.recommendation button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "✓ Added to plan";
    btn.style.color = "#a8ee68";
  });
});