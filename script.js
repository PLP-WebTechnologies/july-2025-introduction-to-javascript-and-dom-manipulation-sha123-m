// ===============================
// Portfolio Script
// ===============================

// Part 1: Greeting the visitor
const userName = prompt("Hi there! What's your name?");
if (userName) {
  document.getElementById("welcome-message").textContent =
    `Welcome, ${userName}! Thanks for visiting my portfolio.`;
}

// Part 2: Function to calculate years of experience
function calculateExperience(startYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}
const years = calculateExperience(2022);
document.getElementById("experience").textContent =
  `I have ${years} years of experience in tech and software development.`;

// Part 3: Skills List using Loop
const skills = ["HTML5", "CSS3", "JavaScript", "React", "MySQL", "Git/GitHub"];
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  let li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Part 4: DOM Interactions
// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Footer Year Auto-update
document.getElementById("year").textContent = new Date().getFullYear();